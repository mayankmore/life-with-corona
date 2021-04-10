import React from 'react';
import './materialize.css'
function Prediction (){
    return(
        <div class="container">
        <br/><br/>
        <h1 class="header center orange-text">Corona Prediction</h1>
        <div class="row center">
          <h5 class="header col s12 light">Predict the probability of Corona on basis of symptoms
          <br/>
          </h5>
        </div>
  
                <div class="row">
      <form action='/predict' method="post" class="col s12">
        <div class="row">
          <div class="input-field col s4">
              <label for="first_name"><b>Temperature</b></label>
              <br/>
            <input placeholder="Temperature in Celsius" name="Temperature" id="first_name" type="text" class="validate" />
          </div>
          <div class="input-field col s4">
  
            <label for="last_name"><b>Oxygen </b></label>
              <br/>
            <input id="last_name" name="Oxygen" placeholder="Oxygen content in ppm"  type="text" class="validate" />
  
          </div>
  
          <div class="input-field col s4">
              <label for="_name"><b>Humidity</b></label>
              <br/>
            <input id="_name" name="Humidity" placeholder="Humidity %" type="text" class="validate" /> 
  
          </div>
          <div class="input-field col s4">
            <label for="first_name"><b>Temperature</b></label>
            <br/>
          <input placeholder="Temperature in Celsius" name="Temperature" id="first_name" type="text" class="validate" />
        </div>
        <div class="input-field col s4">

          <label for="last_name"><b>Oxygen </b></label>
            <br/>
          <input id="last_name" name="Oxygen" placeholder="Oxygen content in ppm"  type="text" class="validate" />

        </div>

        <div class="input-field col s4">
            <label for="_name"><b>Humidity</b></label>
            <br/>
          <input id="_name" name="Humidity" placeholder="Humidity %" type="text" class="validate" />

        </div>
        <div class="input-field col s4">
          <label for="first_name"><b>Temperature</b></label>
          <br/>
        <input placeholder="Temperature in Celsius" name="Temperature" id="first_name" type="text" class="validate" />
      </div>
      <div class="input-field col s4">

        <label for="last_name"><b>Oxygen </b></label>
          <br/>
        <input id="last_name" name="Oxygen" placeholder="Oxygen content in ppm"  type="text" class="validate" />

      </div>

      <div class="input-field col s4">
          <label for="_name"><b>Humidity</b></label>
          <br/>
        <input id="_name" name="Humidity" placeholder="Humidity %" type="text" class="validate" />

      </div>
      <div class="input-field col s4">
        <label for="first_name"><b>Temperature</b></label>
        <br/>
      <input placeholder="Temperature in Celsius" name="Temperature" id="first_name" type="text" class="validate" />
    </div>
    <div class="input-field col s4">

      <label for="last_name"><b>Oxygen </b></label>
        <br/>
      <input id="last_name" name="Oxygen" placeholder="Oxygen content in ppm"  type="text" class="validate" />

    </div>

    <div class="input-field col s4">
        <label for="_name"><b>Humidity</b></label>
        <br/>
      <input id="_name" name="Humidity" placeholder="Humidity %" type="text" class="validate" />

    </div>
  
        </div>
  
        <div class="row center">
  
            <button type="submit" class="btn-large waves-effect waves-light orange">Predict Probability</button>
        </div>
      </form>
        </div>
  
      </div>
    
    )
}

export default Prediction