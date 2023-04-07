from flask import Flask, request, Response
import requests
import yfinance as yf #importing yahoo finance api
# from train import dance
from return_model import ml_model
import pandas as pd
app=Flask(__name__)
from companies_list import companies

@app.route('/yours_price',methods=['GET','POST'])
async def hello():
  if (request.method=='GET'):
    name=request.get_json()
    # print(name['data'])
    #getting dataset according to company nasdaq code
    dataset = yf.Ticker(name['data'])
    # print(dataset.info)
    
    # data history for that particular company
    hist = dataset.history(period="2mo") 
    print(hist)
    df=pd.DataFrame(hist)# converting the datahistory to dataframe

    df.to_csv('temporary_store_data.csv') # to store data temporarily in temporary_store_data.csv file
    df_read=pd.read_csv('temporary_store_data.csv')# to read from temporary_store_data.csv
    
    # print(df_read)
    
    model=await ml_model(df_read)
    p=model.predict([[20230405]])
    print(p)
    price=(p[0][0]+p[0][1]+p[0][2]+p[0][3])/4
    print(type([price]))

    return [price]
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
