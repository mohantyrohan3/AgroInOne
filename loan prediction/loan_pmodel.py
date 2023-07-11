import numpy as np # linear algebra
import pandas as pd # data processing
import copy
import pickle

#relevant ML libraries
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split

#ML model
from sklearn.linear_model import LogisticRegression

# read in csv file as a DataFrame
tr_df = pd.read_csv("https://raw.githubusercontent.com/Kirti-kn/AgroInOne/master/loan%20prediction/Train.csv")
# explore the first 5 rows
#tr_df.head()

# read in csv file as a DataFrame
te_df = pd.read_csv("https://raw.githubusercontent.com/Kirti-kn/AgroInOne/master/loan%20prediction/Test.csv")
# explore the first 5 rows
#te_df.head()

#the Id column is not needed, let's drop it for both test and train datasets
tr_df.drop('Loan_ID',axis=1,inplace=True)
te_df.drop('Loan_ID',axis=1,inplace=True)

# tr_df = pd.concat([tr_df, te_df], ignore_index=True)

#filling the missing data
null_cols = ['Credit_History', 'Self_Employed', 'LoanAmount','Dependents', 'Loan_Amount_Term', 'Gender', 'Married']
for col in null_cols:
    tr_df[col] = tr_df[col].fillna(tr_df[col].dropna().mode().values[0])

# categorial columns
cat = tr_df.select_dtypes('object').columns.to_list()

train_data= copy.deepcopy(tr_df)
l1=LabelEncoder()

for i in cat:
  train_data[i]=l1.fit_transform(train_data[i])

y = train_data['Loan_Status']
X = train_data.drop('Loan_Status', axis = 1)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state = 0)

LR = LogisticRegression()
LR.fit(X_train, y_train)

final_model = LR

pickle.dump(final_model,open('loan_model.pkl','wb'))