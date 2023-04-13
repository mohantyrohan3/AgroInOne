import pandas as pd
import numpy as np
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
#from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import LabelEncoder
l1=LabelEncoder()

data1= pd.read_csv("https://raw.githubusercontent.com/Kirti-kn/AgroInOne/master/crop_pred%20model/APY.csv")
data2= pd.read_csv("https://raw.githubusercontent.com/Kirti-kn/AgroInOne/master/crop_pred%20model/APY.csv")

#filling empty values
mn=round(data1["Production"].mean(),2)
data1["Production"].fillna(mn,inplace=True)
data1["Crop"].fillna("Wheat",inplace=True)
data2["Production"].fillna(mn,inplace=True)
data2["Crop"].fillna("Wheat",inplace=True)

data1["State"]=l1.fit_transform(data1["State"])
data1["District "]=l1.fit_transform(data1["District "])
data1["Crop"]=l1.fit_transform(data1["Crop"])
data1["Season"]=l1.fit_transform(data1["Season"])

#dictionary for columns containing values as their key and corresponding numerical value as their values.
state_dict ={}
district_dict={}
crop_dict={}
season_dict={}

for i,j in zip(data1['State'],data2['State']):
  state_dict[j]=i

for i,j in zip(data1['District '],data2['District ']):
  district_dict[j]=i

for i,j in zip(data1['Crop'],data2['Crop']):
  crop_dict[j]=i

for i,j in zip(data1['Season'],data2['Season']):
  season_dict[j]=i      

x = data1.drop("Yield", axis=1)
y = data1["Yield"]

#model training
rf_model = RandomForestRegressor(n_estimators=100, random_state=50)

rf_model.fit(x, y)

#Final Model
final_model=rf_model

pickle.dump(rf_model,open('model.pkl','wb'))