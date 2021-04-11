from flask import Flask, request,render_template
from flask_cors import CORS
import numpy as np
import pickle


app = Flask(__name__) 

CORS(app)

@app.route('/pre', methods = ['GET', 'POST'])
def func():
	return render_template("htm1.html")


@app.route('/prediction', methods = ['GET', 'POST'])
def predict():
	print("krish")
	print(request)
	print(request.json)
	Age=float(request.json["Age"])
	serumLevelsOfWhiteBloodCell=float(request.json["serumLevelsOfWhiteBloodCell"])
	Neutrophil=float(request.json["Neutrophil"])
	lymphocytes=float(request.json["lymphocytes"])
	Diarrhoea=float(request.json["Diarrhoea"])
	Coughing=float(request.json["Coughing"])
	sorethroat=float(request.json["sorethroat"])
	Fatigue=float(request.json["Fatigue"])
	RenalDisease=float(request.json["RenalDisease"])
	Diabetes=float(request.json["Diabetes"])
	Temperature=float(request.json["Temperature"])
	arr = []
	for i in range(17):
		arr.append(0)

	

	arr[0] = Age
	arr[1] = Neutrophil
	arr[2] = serumLevelsOfWhiteBloodCell
	arr[3] = lymphocytes
	arr[4] = Temperature

	if Diarrhoea == 0:
		arr[5] = 1

	else :
		arr[6] = 1

	if Coughing == 0:
		arr[7] = 1

	else :
		arr[8] = 1


	if sorethroat == 0:
		arr[9] = 1

	else :
		arr[10] = 1

	if Fatigue == 0:
		arr[11] = 1

	else :
		arr[12] = 1

	if RenalDisease == 0:
		arr[13] = 1

	else :
		arr[14] = 1

	if Diabetes == 0:
		arr[15] = 1

	else :
		arr[16] = 1


	final=np.array(arr)
	final2=final.reshape((1,-1))
	print(final)
	classifier2=pickle.load(open('covidpred.pkl','rb'))
	prediction=classifier2.predict_proba(final2)
	output=prediction[0][0]
	
	return {"prob":output}



if __name__ == '__main__':
    app.run(debug=True)