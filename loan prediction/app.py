from flask import Flask, request, jsonify, render_template
import pickle
import copy
import pandas as pd
from sklearn.preprocessing import LabelEncoder
l1= LabelEncoder()

app = Flask(__name__)
model = pickle.load(open('loan_model.pkl', 'rb'))

# read in csv file as a DataFrame
tr_df = pd.read_csv("https://raw.githubusercontent.com/Kirti-kn/AgroInOne/master/loan%20prediction/Train.csv")
tr_df.drop('Loan_ID',axis=1,inplace=True)

null_cols = ['Credit_History', 'Self_Employed', 'LoanAmount','Dependents', 'Loan_Amount_Term', 'Gender', 'Married']
for col in null_cols:
    tr_df[col] = tr_df[col].fillna(tr_df[col].dropna().mode().values[0])

# categorial columns
cat = tr_df.select_dtypes('object').columns.to_list()

train_data= copy.deepcopy(tr_df)

l1=LabelEncoder()

for i in cat:
  train_data[i]=l1.fit_transform(train_data[i])

oi_dict ={}

for i in cat:
  for j,k in zip(tr_df[i],train_data[i]):
    oi_dict[j]=k

credits_dict = {'No dues':1.0,'Dues left':0.0}


@app.route('/')
def index():
    # Define your dictionary of dropdown values
    Gen_dd = sorted(set(tr_df['Gender']))
    married = sorted(set(tr_df['Married']))
    dependents = sorted(set(tr_df['Dependents']))
    education = sorted(set(tr_df['Education']))
    self_emp = sorted(set(tr_df['Self_Employed']))
    prop_area = sorted(set(tr_df['Property_Area']))
    credit_hist =['No dues','Dues left']
    return render_template('index.html', gd=Gen_dd,md=married,dd=dependents,ed=education,spd=self_emp,pd=prop_area,cd=credit_hist)

@app.route('/get_selected_value', methods=['POST'])
def get_selected_value():
    # loan_id = request.form['selected_state']
    gender = request.form['gender']
    married = request.form['married']
    dependent = request.form['dependent']
    education = request.form['education']
    self_emp = request.form['self_emp']
    ap_income = int(request.form['ap_income'])
    coap_income = float(request.form['coap_income'])
    loan_amount = float(request.form['loan_amount'])
    loan_term = float(request.form['loan_term'])
    credit_history = request.form['credit_history']
    prop_area = request.form['prop_area']

    input= [[oi_dict[gender],oi_dict[married],oi_dict[dependent],oi_dict[education],oi_dict[self_emp],ap_income,coap_income,loan_amount,loan_term,credits_dict[credit_history],oi_dict[prop_area]]]
    prediction = model.predict(input)
    result = prediction[0]
    if result==1:
       txt = "Can be Approved"
    else:
       txt = "Cannot be Approved"   
    # Use the selected value for further processing
    # For example, return it as a response, store it in a database, etc.
    return render_template('index.html',pred_text= txt)


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
