import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='title'> Aloha </div>
      <div className='intro_desc'> Welcome to the Waikalua Loko I'a interactive platform. </div>
    </div>
  );
}

export default App;
