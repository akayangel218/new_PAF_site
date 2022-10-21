import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='title'> Aloha </div>
      <div className='textbox'> 
        <span className='text'>
          Welcome to the Waikalua Loko I'a interactive platform.
        </span> 
        <br></br>
        <span className='text'>
          The Information shared will support us in continuing to foster kinship and kuleana between kanaka and ʻāina.
        </span> 
        <br></br>
        <span className='text'>
          Please select a unit to begin.
        </span>
        <br></br>
        <br></br>
        <span className='text'>
          Mahalo nui.
        </span> 
      </div>
    </div>
  );
}

export default App;
