import React from 'react';

import CoronaCounter from "./HomeComponents/coronacounter";
import Divisions from "./HomeComponents/divisions";

import './Home.css';

function Home() {
  return (
    <div className="App">
     
      <CoronaCounter />
      <Divisions />
  
    </div>
  );
}

export default Home;
