#!/usr/bin/env python
# coding: utf-8

# In[39]:


from xgboost import XGBClassifier
import xgboost as xgb
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix

from sklearn.metrics import mean_squared_error
import numpy as np
from pandas import read_csv
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import roc_curve
from sklearn.metrics import roc_auc_score
from matplotlib import pyplot


# In[40]:


from bayes_opt import BayesianOptimization


# In[41]:


data = pd.read_csv('D:/downloads/COVID19ML-master/COVID19ML-master/UsedCombined.txt',sep='\t')


# In[42]:


data


# In[43]:


data.info()


# In[44]:


data2=data.drop(columns=['Unnamed: 0','CTscanResults','XrayResults','Sex'])


# In[45]:


data2=data2.drop(columns=['Fever','NauseaVomitting','lymphocytesCategorical','serumLevelsOfWhiteBloodCellCategorical'])


# In[46]:


data2.info()


# In[47]:


data2=data2.drop(columns=["neutrophilCategorical"])


# In[48]:


removeList = ['Diarrhea','Coughing','SoreThroat','Fatigue','RenalDisease','diabetes']


# In[49]:


for i in removeList:
    data2 = pd.concat([data2,pd.get_dummies(data2[i], prefix=i)],axis=1)


# In[50]:


data2['D'].value_counts()


# In[51]:


data2 = pd.concat([data2,pd.get_dummies(data2['D'], prefix="rt_pcr")],axis=1)


# In[52]:


data2.info()


# In[53]:


data2


# In[54]:


removeList2 = ['Diarrhea','Coughing','SoreThroat','Fatigue','RenalDisease','diabetes']


# In[55]:


data3=data2.drop(columns=removeList2)


# In[56]:


data3=data3.drop(columns=['D','Coughing_No'])


# In[57]:


data3.info()


# In[58]:


data3


# In[59]:


y=data3['Diagnosis']


# In[60]:


label_encoder = LabelEncoder().fit(y)
y = label_encoder.transform(y)


# In[61]:


y


# In[62]:


data4=data3.drop(columns=['Diagnosis'])


# In[63]:


data4.columns


# In[64]:


data4=data4.drop(columns=['rt_pcr_0','rt_pcr_1'])


# In[65]:


data4


# In[66]:


data4.info()


# In[67]:


X_train, X_test, y_train, y_test = train_test_split(data4.values, y, test_size=0.2, random_state=42)


# In[82]:


XGBCL = XGBClassifier()
classifier1 = XGBCL.fit(X_train,y_train)
preds = classifier1.predict(X_test)


# In[83]:


X_test[0][9]==0


# In[84]:


arr=X_test[200]


# In[85]:


arr


# In[86]:


type(arr)


# In[87]:


arr_new=arr.reshape((1,-1))


# In[88]:


predc=classifier1.predict_proba(arr_new)


# In[89]:


predc


# In[ ]:





# In[90]:


print(classification_report(preds, y_test))
cm = confusion_matrix(preds, y_test)
acc = cm.diagonal().sum()/cm.sum()
print(acc)


# In[91]:


preds


# In[92]:


y_test


# In[93]:



dtrain = xgb.DMatrix(X_train, label=y_train)


# In[94]:


dtrain


# In[95]:


def bo_tune_xgb(max_depth, gamma, n_estimators ,learning_rate):
     params = {'max_depth': int(max_depth),
              'gamma': gamma,
              'n_estimators': int(n_estimators),
              'learning_rate':learning_rate,
              'subsample': 0.8,
              'eta': 0.1,
              'eval_metric': 'rmse'}
     #Cross validating with the specified parameters in 5 folds and 70 iterations
     cv_result = xgb.cv(params, dtrain, num_boost_round=70, nfold=5)
     #Return the negative RMSE
     return -1.0 * cv_result['test-rmse-mean'].iloc[-1]


# In[96]:


xgb_bo = BayesianOptimization(bo_tune_xgb, {'max_depth': (3, 10),
                                             'gamma': (0, 1),
                                             'learning_rate':(0,1),
                                             'n_estimators':(100,120)
                                            })
xgb_bo.maximize(n_iter=5, init_points=8, acq='ei')


# In[97]:


params = xgb_bo.max['params']
print(params)
params['max_depth']= int(params['max_depth'])
params['n_estimators']= int(params['n_estimators'])


# In[98]:


classifier2 = XGBClassifier(**params).fit(X_train,y_train)
preds2 = classifier2.predict(X_test)


# In[99]:


print(classification_report(preds2, y_test))
cm = confusion_matrix(preds2, y_test)
acc = cm.diagonal().sum()/cm.sum()
print(acc)
print(cm)


# In[100]:


lr_probs = classifier2.predict_proba(X_test)
lr_probs = lr_probs[:, 1]
ns_probs = [0 for _ in range(len(y_test))]
ns_auc = roc_auc_score(y_test, ns_probs)
lr_auc = roc_auc_score(y_test, lr_probs)


# In[101]:


print('No Skill: ROC AUC=%.3f' % (ns_auc))
print('Logistic: ROC AUC=%.3f' % (lr_auc))


# In[102]:


from sklearn.metrics import precision_recall_curve
from sklearn.metrics import f1_score
from sklearn.metrics import auc


# In[103]:



data_dmatrix = xgb.DMatrix(data=data4,label=y)
import graphviz
xg_reg = xgb.train(params=params, dtrain=data_dmatrix, num_boost_round=10)
import matplotlib.pyplot as plt


# In[104]:


xgb.plot_importance(xg_reg)
plt.rcParams['figure.figsize'] = [10, 10]
#plt.show()
pyplot.savefig('barWithoutNan.pdf',format='pdf')


# In[105]:


pred_prob=classifier2.predict_proba(X_test)


# In[106]:


pred_prob #right column gives probability of Covid19


# In[107]:


preds2


# In[108]:


import pickle


# In[109]:


pickle.dump(classifier2,open('covidpred.pkl','wb'))


# In[110]:


model1=pickle.load(open('covidpred.pkl','rb'))#pickling the file


# In[91]:


res_new=model1.predict_proba(X_test)


# In[92]:


res_new #working


# In[74]:


import pickle


# In[118]:


modelxg=pickle.load(open('covidpred.pkl','rb'))


# In[112]:


pred_check=modelxg.predict_proba(arr_new)


# In[113]:


pred_check


# In[114]:


pred_check.shape


# In[115]:


pred_check[0][0]


# In[116]:


print('Corona alert.\nProbability of corona occuring is {pr:.2f}%'.format(pr=pred_check[0][0]*100))


# In[98]:


arr.shape


# In[95]:


arr.resize(16,1)


# In[96]:


arr


# In[102]:


X_test.iloc[123]


# In[53]:


rescheck=pd.DataFrame(X_test.iloc[123])


# In[54]:


rescheck


# In[35]:


import json

x =  '{ "name":"John", "age":30.00, "city":"New York"}'
y = json.loads(x)

print(y["age"]) 


# In[36]:


type(y["age"])


# In[ ]:




