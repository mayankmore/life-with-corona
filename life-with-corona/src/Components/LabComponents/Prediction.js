import React, { useState } from 'react'
import './materialize.css'

async function loginUser(credentials) {
 return fetch('http://localhost:5000/prediction', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json).then(data =>
       setPrediction(data.prediction)
   );

}

function Prediction(){
    const [Age, setAge] = useState();
    const [prediction, setPrediction] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
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
      <input type="text" class="input" placeholder="Email Address" onChange={e => setUserName(e.target.value)}/>
      <input type="text" class="input" placeholder="Phone" onChange={e => setUserName(e.target.value)}/>
      <input type="text" class="input" placeholder="Subject" onChange={e => setUserName(e.target.value)}/>
      <input type="text" class="input" placeholder="Phone" onChange={e => setUserName(e.target.value)}/>
      <input type="text" class="input" placeholder="Subject" onChange={e => setUserName(e.target.value)}/>

    </div>
    <div class="input-fields">
      <input type="text" class="input" placeholder="Name"/>
      <input type="text" class="input" placeholder="Email Address"/>
      <input type="text" class="input" placeholder="Phone"/>
      <input type="text" class="input" placeholder="Subject"/>
      <input type="text" class="input" placeholder="Phone"/>
      <input type="text" class="input" placeholder="Subject"/>
    </div>
    <div class="button" onSubmit={handleSubmit}>  <a href="#" class="btnx btn3">Predict</a>  </div>
  </form>

</div>

</>
)

}
export default Prediction
