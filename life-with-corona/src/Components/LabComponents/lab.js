import React from 'react'
import {Link} from 'react-router-dom'
import './lab.css'
function Lab() {
return(

   <div class = "bckimg">
    <div class="middle">
    <div class="headdiv"><h1 class="headone">LAUDA LASSAN!</h1></div>
    <Link to="/xray" class="btnz btn1">X-Ray Prediction</Link>
    <Link to="/prediction" class="btnz btn2">ML Classifier</Link>
  </div>
  </div>



)

}
export default Lab
