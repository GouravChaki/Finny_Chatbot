from flask import Flask, request, Response
import requests
import yfinance as yf #importing yahoo finance api
# from train import dance
from return_model import ml_model
import pandas as pd
from datetime import date
from companies_list import companies
from predict_price import predict_data

app=Flask(__name__)

@app.route('/yours_price',methods=['GET','POST'])
async def hello():
  if (request.method=='GET'):
    
    price=request.get_json()#fetch price
    price=float(price['price'])

    companies_df=await companies(price)#get company list falling in this price
    companies_df['price_5days']=0
    companies_df['price_7days']=0
    companies_df['price_10days']=0
    
    today = date.today()
    date_current=int(today.strftime("%Y%m%d")) #current date
    # print(type([price]))
    for i in (companies_df.index):
       name=companies_df['Symbol'][i]
       price0,price1,price2,price3=await predict_data(name,date_current)
       if (price0!="empty"):
          companies_df.loc[i,'Last Sale']=price0
          companies_df.loc[i,'price_5days']=price1
          companies_df.loc[i,'price_7days']=price2
          companies_df.loc[i,'price_10days']=price3
    
    print(companies_df)
    if(price>=10000.0):
        companies_df=companies_df[(companies_df['price_10days']>=price)]
    
    elif(price>=5000.0 and price<=10000.0):
        companies_df=companies_df[(companies_df['price_10days']>=price) & (companies_df['Last Sale']<=10000)]
    
    elif(price>=3000.0 and price<=5000.0):
        companies_df=companies_df[(companies_df['price_10days']>=price) & (companies_df['Last Sale']<=5000)]
  
    elif(price>=2000.0 and price<=3000.0):
        companies_df=companies_df[(companies_df['price_10days']>=price) & (companies_df['Last Sale']<=3000)]
        
    elif(price>=1000.0 and price<=2000.0):
        companies_df=companies_df[(companies_df['price_10days']>=price) & (companies_df['Last Sale']<=2000)]
       
    else:
       companies_df=companies_df[(companies_df['price_10days']>=(price-0.05*price)) & (companies_df['price_10days']<=(price+0.05*price))]
    
    print(companies_df)
    companies_df=companies_df.to_json()

    return companies_df
    # return 'hello'

@app.route('/realtime',methods=['GET','POST'])
async def realtime_data():
     if (request.method=='GET'):
        #extract price from json shared
        price=request.get_json()

        #send the price received to companies function

        df=await companies(price['price'])# receive the intended dataframe
        df=df.to_json()
        return df

if __name__=="__main__":
    app.run(debug=True,port=5000)
