import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import copy
from sklearn.preprocessing import LabelEncoder



l1= LabelEncoder()

app = Flask(__name__)
CORS(app)
model = pickle.load(open('model_pkl', 'rb'))
loan_model = pickle.load(open('loan_model.pkl', 'rb'))

data1= pd.read_csv("APY.csv")
data2= pd.read_csv("APY.csv")
tr_df = pd.read_csv("https://raw.githubusercontent.com/Kirti-kn/AgroInOne/master/loan%20prediction/Train.csv")
tr_df.drop('Loan_ID',axis=1,inplace=True)






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
  j=j.replace(" ","")
  crop_dict[j]=i

for i,j in zip(data1['Season'],data2['Season']):
  j=j.replace(" ","")
  season_dict[j]=i




null_cols = ['Credit_History', 'Self_Employed', 'LoanAmount','Dependents', 'Loan_Amount_Term', 'Gender', 'Married']
for col in null_cols:
    tr_df[col] = tr_df[col].fillna(tr_df[col].dropna().mode().values[0])

# categorial columns
cat = tr_df.select_dtypes('object').columns.to_list()



train_data= copy.deepcopy(tr_df)

for i in cat:
  train_data[i]=l1.fit_transform(train_data[i])

oi_dict ={}


for i in cat:
  for j,k in zip(tr_df[i],train_data[i]):
    oi_dict[j]=k

credits_dict = {'No dues':1.0,'Dues left':0.0}










# print(district_dict)
# print(crop_dict)
# print(season_dict)

# Route for serving the React frontend
@app.route('/')
def index():
    # Define your dictionary of dropdown values
    # district_dropdown = sorted(list(district_dict.keys()))
    # state_dropdown = sorted(list(state_dict.keys()))
    # crop_dropdown = sorted(list(crop_dict.keys()))
    # season_dropdown = sorted(list(season_dict.keys()))
    # # return render_template('index.html', dd=district_dropdown,sd=state_dropdown,sed=season_dropdown,cd=crop_dropdown)
    return "Hello world"

@app.route('/get_selected_value', methods=['POST'])
def get_selected_value():
    temp = request.json
    state = temp['selected_state']
    district = temp['selected_district']
    crop = temp['selected_crop']
    crop_year = int(temp['crop_year'])
    season = temp['selected_season']
    area = float(temp['area'])
    production = float(temp['Production'])
    input=[[state_dict[state],district_dict[district],crop_dict[crop],crop_year,season_dict[season],area,production]]
    prediction = model.predict(input)
    result=round(prediction[0],2)
    a = {
       'answer':result
    }
    return jsonify(a)




@app.route('/loan_predicted_value', methods=['POST'])
def loan_predicted_value():
    temp1 = request.json
    gender = temp1['gender']
    married = temp1['married']
    dependent = temp1['dependent']
    education = temp1['education']
    self_emp = temp1['self_emp']
    ap_income = int(temp1['ap_income'])
    coap_income = float(temp1['coap_income'])
    loan_amount = float(temp1['loan_amount'])
    loan_term = float(temp1['loan_term'])
    credit_history = temp1['credit_history']
    prop_area = temp1['prop_area']

    input= [[oi_dict[gender],oi_dict[married],oi_dict[dependent],oi_dict[education],oi_dict[self_emp],ap_income,coap_income,loan_amount,loan_term,credits_dict[credit_history],oi_dict[prop_area]]]
    prediction = loan_model.predict(input)
    result = prediction[0]
    txt=""
    if result==1:
       txt = "Can be Approved"
    else:
       txt = "Cannot be Approved"   

    Answer = {
       "ans":result
      }


    return Answer






# Run the Flask application
if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=False)