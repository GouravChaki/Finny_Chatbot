from flask import Flask
import requests
app=Flask(__name__)

key="H3BREHFF0JD7DQ5S"
url = 'https://www.alphavantage.co/query'
@app.route('/')
def hello():
    data = {
    "function": "TIME_SERIES_DAILY",
    "symbol": "NIFTY",
    "outputsize": "compact",
    "datatype": "csv",
    "apikey": "H3BREHFF0JD7DQ5S"
    }
    response = requests.get(url,params=data)
    # data = response.json()
    print(response.text)
    return 'Hello World!'


if __name__=="__main__":
    app.run(debug=True,port=5000)
