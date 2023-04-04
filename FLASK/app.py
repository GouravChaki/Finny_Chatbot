from flask import Flask
import requests
import yfinance as yf
app=Flask(__name__)

name="AAPL"
@app.route('/')
def hello():
    dataset = yf.Ticker(name)
    # get stock info
    # print(msft.info)
    # get historical market data
    hist = dataset.history(period="500d")
    print(hist)
    return 'hello world'


if __name__=="__main__":
    app.run(debug=True,port=5000)
