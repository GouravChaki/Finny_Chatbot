import numpy as np
import pandas as pd
from sklearn import datasets,linear_model,preprocessing,metrics
from sklearn.model_selection import train_test_split
from flask import Flask, request
from datetime import date
from Functions.return_model import ml_model
import yfinance as yf #importing yahoo finance api

async def predict_data_2(name,date_received,a=0):
    # print(name['data'])
    #getting dataset according to company nasdaq code
    print(name)
    dataset = yf.Ticker(name)
    # print(dataset.info)
    
    # data history for that particular company
    hist = dataset.history(period="2mo") 
    print(hist)
    df=pd.DataFrame(hist)# converting the datahistory to dataframe
    if (df.empty) :
       print("empty")
       return "empty"
    else:
        df.to_csv('temporary_store_data.csv') # to store data temporarily in temporary_store_data.csv file
        df_read=pd.read_csv('temporary_store_data.csv')# to read from temporary_store_data.csv
    
    # print(df_read)
        today = date.today()
        date_current=int(today.strftime("%Y%m%d")) #current date        
        data={
            'Name':['0'],
            'Date':['0'],
            'Price':[0]
        }
        company_dataframe=pd.DataFrame(data)
        
        model=await ml_model(df_read)
        predicted_price=model.predict([[date_current+date_received]])    
        if(a==1):
            data={
            'Name':name,
            'Date':date_current+date_received,
            'Price':(predicted_price[0][1]+predicted_price[0][2]+predicted_price[0][3]+predicted_price[0][1])/4
            }
        else:
            data={
            'Name':name,
            'Date':date_current+date_received,
            'Price':predicted_price
            }

        company_dataframe.loc[len(company_dataframe)] = data
        print(company_dataframe)
    
        return company_dataframe
