import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Components/HomeComponents/Navbar/Navbar";
import Footer from "./Components/HomeComponents/Footer";
import Home from './Components/Home'
import SignUp from "./Components/SignUpComponents/Form";
import LogIn from "./Components/LogInComponents/Form";
// import Prediction from "./Components/LabComponents/Prediction";
import Lab from "./Components/LabComponents/lab";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signup" ><SignUp /></Route>
      <Route exact path="/login"><LogIn /></Route>
      {/* <Route exact path="/prediction"><Prediction /></Route> */}
      <Route exact path="/lab"><Lab /></Route>
      </ Switch>
      <Footer />
    </div>
  );
}

export default App;
