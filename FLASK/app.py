from flask import Flask, request, Response
import requests
import yfinance as yf #importing yahoo finance api
# from train import dance
from Functions.return_model import ml_model
import pandas as pd
from datetime import date
from Functions.companies_list import companies
from Functions.predict_price import predict_data
from Functions.predict_price_2 import predict_data_2
from yahoo_fin.stock_info import get_data
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

@app.route('/historical_data',methods=['GET','POST'])
async def history():
    if (request.method=='GET'):
        #extract price from json shared
        data=request.get_json()
        name_company=data['nasdaq']
        starting_date=data['date']
        # dataset = yf.Ticker(name)
        today = date.today()
        company_dataset= get_data(name_company, start_date=starting_date, end_date=today, index_as_date = True, interval="1d")
        # company_dataset['date']=company_dataset.index
        # company_dataset.index = (company_dataset.index).dt.strftime('%Y-%m-%d')
        print(company_dataset)
        company_dataset=company_dataset.to_json(date_format='iso')
        # for i in company_dataset:
        #     i=i.dt.strftime('%Y-%m-%d')
        return company_dataset
     
@app.route('/compare',methods=['GET','POST'])
async def compare():
    if (request.method=='GET'):
        #extract price from json shared
        data=request.get_json()
        name_company_1=data['nasdaq']['c_1']
        name_company_2=data['nasdaq']['c_2']

        date_company=int(data['days_after'])

        df1=await predict_data_2(name_company_1,date_company) 
        df2=await predict_data_2(name_company_2,date_company)
        df1=df1.to_json()
        df2=df2.to_json()
        json={
            name_company_1:df1,
            name_company_2:df2
        }
        return json

@app.route('/individual_company',methods=['GET','POST'])
async def individual_company():
        if (request.method=='GET'):
            data=request.get_json()
            name_company_1=data['nasdaq']
            date_company=int(data['days_after'])

            company_1=await predict_data_2(name_company_1,date_company)
            # p=company_1['Price']
            # company_1['Price']=(p[0][0]+p[0][1]+p[0][2]+p[0][3])/4
            company_1=company_1.to_json()
            # company_1['Price'][1]=company_1['Price'][1][0]+company_1['Price'][1][1]+company_1['Price'][1][2]+company_1['Price'][1][3]
            return company_1

if __name__=="__main__":
    app.run(debug=True,port=5000)
