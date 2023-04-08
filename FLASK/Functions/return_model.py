import numpy as np
import pandas as pd
from sklearn import datasets,linear_model,preprocessing,metrics
from sklearn.model_selection import train_test_split
from flask import Flask, request

async def ml_model(dataset):

    db=dataset
    db['date']=0
    
    #function to remove timestamp and convert date to string
    for x in (db.index) :
        timestamp=db['Date'][x]
        t=''
        for x1 in timestamp :
           if(x1=='-'):
              continue
           elif (x1==' '):
              break
           else:
              t=t+x1
        db.loc[x,'date']=int(t)
   
   #put X as feature and Y as label  
    X=db[['date']]
    Y=db[['Open','High','Low','Close']]

   #manual spilliting 
   #  X_train=X[:-20]
   #  X_test=X[-20:]
   #  Y_train=Y[:-20]
   #  Y_test=Y[-20:]
    
   #training model
    model=linear_model.LinearRegression()
   #  model.fit(X_train,Y_train)
    
    model.fit(X.values,Y.values) # training model using entire X and Y
    
    #predicting model
   #  predict=model.predict(X_test)
   #  # mean_squared_error
   #  m=metrics.mean_squared_error(Y_test,predict)

   #  p= model.predict([[20230405]])
   #  yay=(p[0][0]+p[0][1]+p[0][2]+p[0][3])/4
   #  print("Price according to finny: ",yay)
   #  print("Mean_Sqaured_Error: ",m)
   
    return model