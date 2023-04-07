import numpy as np
import pandas as pd
from sklearn import datasets,linear_model,preprocessing,metrics
from sklearn.model_selection import train_test_split
from flask import Flask, request

async def companies(price):
    df=pd.read_csv('nasdaq_use.csv')

    #sort and return values based upon a range
    symbol=df[(df['Last Sale']>=(price-0.004*price)) & (df['Last Sale']<=(price+0.004*price))]
    
    return symbol