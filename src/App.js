import React from "react";
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills";




function App() {
  return (
    <div className="app_wrapper">
    <div className="App">
  <Header />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/skills' element={<Skills/>} />



</Routes>
    </div>
    </div>
  );
}

export default App;
