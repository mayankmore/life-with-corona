import React, { useState } from 'react'
import './materialize.css'

function Prediction(){
    const[prediction,setPrediction]=useState();
    const [Age, setAge] = useState();
    const [serumLevelsOfWhiteBloodCell,setSer] = useState();
    const [Neutrophil,setNeu] = useState();
    const [lymphocytes,setlymph] = useState();
    const [Diarrhoea,setDiar] = useState();
    const [Coughing,setCough] = useState();
    const [sorethroat,setthroat] = useState();
    const [Fatigue,setfat] = useState();
    const [RenalDisease,setRen] = useState();
    const [Diabetes,setDia] = useState();
    const [Temperature,setTemp] = useState();
    const [dataReturn, setDataReturn] = useState(false);

    async function loginUser(credentials) {
      console.log(credentials);
      return fetch('http://127.0.0.1:5000/prediction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json()).then(data => {
            setPrediction(data.prob);
            setDataReturn(true);
        });
     }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          Age,
          serumLevelsOfWhiteBloodCell,
          Neutrophil,
          lymphocytes,
          Diarrhoea,
          Coughing,
          sorethroat,
          Fatigue,
          RenalDisease,
          Diabetes,
          Temperature
        });
  }
return(
<>
<img src="https://ak.picdn.net/shutterstock/videos/10776032/thumb/1.jpg" class="im"/>
<div class="wrapper1">
  <div class="title">
    <h1>Classifier</h1>
</div>
  <form class="contact-form" >
    <div class="input-fields">
      <input type="text" class="input" placeholder="Age" onChange={e => setAge(e.target.value)}/>
      <input type="text" class="input" placeholder="Neutrophil Value" onChange={e => setNeu(e.target.value)}/>
      <input type="text" class="input" placeholder="serumLevelsOfWhiteBloodCell" onChange={e => setSer(e.target.value)}/>
      <input type="text" class="input" placeholder="lymphocytes" onChange={e => setlymph(e.target.value)}/>
      <input type="text" class="input" placeholder="Diarrhoea" onChange={e => setDiar(e.target.value)}/>
      <input type="text" class="input" placeholder="Coughing" onChange={e => setCough(e.target.value)}/>

    </div>
    <div class="input-fields">
      <input type="text" class="input" placeholder="Sorethroat" onChange={e => setthroat(e.target.value)}/>
      <input type="text" class="input" placeholder="Fatigue" onChange={e => setfat(e.target.value)}/>
      <input type="text" class="input" placeholder="RenalDisease" onChange={e => setRen(e.target.value)}/>
      <input type="text" class="input" placeholder="Diabetes"onChange={e => setDia(e.target.value)}/>
      <input type="text" class="input" placeholder="Temperature"onChange={e => setTemp(e.target.value)}/>
    </div>
    <div class="button" onClick={handleSubmit}>  <a href="#" class="btnx btn3">Predict</a>  </div>
  </form>
  {dataReturn ? (<h1 class="prediction">The probablity for corona is: {prediction}</h1>) : (<p></p>)}
</div>


</>
)

}
export default Prediction
