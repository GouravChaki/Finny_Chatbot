import numpy as np
import pandas as pd
from sklearn import datasets,linear_model,preprocessing,metrics
from sklearn.model_selection import train_test_split
from flask import Flask, request
from Functions.return_model import ml_model
import yfinance as yf #importing yahoo finance api

async def predict_data(name,date):
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
       return "empty",0,0,0
    else:
        df.to_csv('temporary_store_data.csv') # to store data temporarily in temporary_store_data.csv file
        df_read=pd.read_csv('temporary_store_data.csv')# to read from temporary_store_data.csv
    
    # print(df_read)
    
        model=await ml_model(df_read)
        p0=model.predict([[date]])
        p1=model.predict([[date+5]])
        p2=model.predict([[date+7]])
        p3=model.predict([[date+10]])

        price0=(p0[0][0]+p0[0][1]+p0[0][2]+p0[0][3])/4
        price1=(p1[0][0]+p1[0][1]+p1[0][2]+p1[0][3])/4
        price2=(p2[0][0]+p2[0][1]+p2[0][2]+p2[0][3])/4
        price3=(p3[0][0]+p3[0][1]+p3[0][2]+p3[0][3])/4
    
        print(price0,price1,price2,price3)
    
        return price0,price1,price2,price3
