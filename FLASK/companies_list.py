import numpy as np
import pandas as pd
from sklearn import datasets,linear_model,preprocessing,metrics
from sklearn.model_selection import train_test_split
from flask import Flask, request

async def companies(price):
    df=pd.read_csv('nasdaq_use.csv')

    #sort and return values based upon a range
    if(price>=10000.0):
        symbol_df=df[df['Last Sale']>=price]
    
    elif(price>=5000.0 and price<=10000.0):
        symbol_df=df[(df['Last Sale']>=price) & (df['Last Sale']<=10000)]
    
    elif(price>=3000.0 and price<=5000.0):
        symbol_df=df[(df['Last Sale']>=price) & (df['Last Sale']<=5000)]
    
    elif(price>=2000.0 and price<=3000.0):
        symbol_df=df[(df['Last Sale']>=price) & (df['Last Sale']<=3000)]
    
    elif(price>=1000.0 and price<=2000.0):
        symbol_df=df[(df['Last Sale']>=price) & (df['Last Sale']<=2000)]    
    
    else:
        symbol_df=df[(df['Last Sale']>=(price-0.003*price)) & (df['Last Sale']<=(price+0.003*price))]
    
    return symbol_df