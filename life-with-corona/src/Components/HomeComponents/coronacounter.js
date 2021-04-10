import React, { Component, useState, useEffect } from 'react'
import './coronacounter.css'
let url = 'https://api.covid19api.com/summary'

function Coronacounter (){
    const [confirmedCases, setconfirmedCases] = useState(0);
    const [deaths, setdeaths] = useState(0);
    const [recovered, setrecovered] = useState(0);
    const [date, setdate] = useState(0);

    useEffect(() => {
        fetch(url).then(function(res) { return res.json() })
    	.then(function(data) {
            let index = 76;
            setconfirmedCases(data.Countries[index].TotalConfirmed.toLocaleString('en'));
            setdeaths(data.Countries[index].TotalDeaths.toLocaleString('en'));
            setrecovered(data.Countries[index].TotalRecovered.toLocaleString('en'));
            setdate(data.Global.Date.substr(0, 10));
        });
    }, []);

return(
  <div id="about" class="about">
  <div class="data-container">
      <div>
          <p class = "counter">Country: <strong> India </strong></p>
          <p class = "counter">Last Updated: <strong> {date} </strong> </p>
      </div>
      <div>
          <p class = "counter">Cases: <strong> {confirmedCases} </strong></p>
          <p class = "counter">Deaths: <strong> {deaths} </strong></p>
          <p class = "counter">Recovered: <strong> {recovered} </strong></p>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
              <div class="about_box">
                  <h2>COVID-19<br/><strong class="black"> Things To Know!</strong></h2>
                  <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                  <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target='blank'>Read More</a>
              </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
              <div class="about_img">
                  <figure><img src="https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg" alt="img" /></figure>
              </div>
          </div>
      </div>
  </div>
</div>


)

}
export default Coronacounter
