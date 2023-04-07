import numpy as np
import pandas as pd
from sklearn import datasets,linear_model,preprocessing,metrics
from sklearn.model_selection import train_test_split
from flask import Flask, request

async def predict_data(model):
    
