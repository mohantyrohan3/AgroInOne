import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from sklearn.preprocessing import LabelEncoder
l1= LabelEncoder()

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

data1= pd.read_csv("APY.csv")
data2= pd.read_csv("APY.csv")

mn=round(data1["Production"].mean(),2)
data1["Production"].fillna(mn,inplace=True)
data1["Crop"].fillna("Wheat",inplace=True)
data2["Production"].fillna(mn,inplace=True)
data2["Crop"].fillna("Wheat",inplace=True)

data1["State"]=l1.fit_transform(data1["State"])
data1["District "]=l1.fit_transform(data1["District "])
data1["Crop"]=l1.fit_transform(data1["Crop"])
data1["Season"]=l1.fit_transform(data1["Season"])

state_dict={}
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

# print(district_dict)
# print(crop_dict)
# print(season_dict)

# Route for serving the React frontend
@app.route('/')
def index():
    # Define your dictionary of dropdown values
    district_dropdown = sorted(list(district_dict.keys()))
    state_dropdown = sorted(list(state_dict.keys()))
    crop_dropdown = sorted(list(crop_dict.keys()))
    season_dropdown = sorted(list(season_dict.keys()))
    return render_template('index.html', dd=district_dropdown,sd=state_dropdown,sed=season_dropdown,cd=crop_dropdown)

@app.route('/get_selected_value', methods=['POST'])
def get_selected_value():
    state = request.form['selected_state']
    district = request.form['selected_district']
    crop = request.form['selected_crop']
    crop_year = int(request.form['crop_year'])
    season = request.form['selected_season']
    area = float(request.form['area'])
    production = float(request.form['Production'])
    input=[[state_dict[state],district_dict[district],crop_dict[crop],crop_year,season_dict[season],area,production]]
    prediction = model.predict(input)
    result=round(prediction[0],2)
    # Use the selected value for further processing
    # For example, return it as a response, store it in a database, etc.
    return render_template('index.html',pred_text= result)


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)