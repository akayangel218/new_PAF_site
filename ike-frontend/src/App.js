import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Unit1 from './Pages/Unit 1/unit1';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Unit1' element={<Unit1 />} />
      </Routes>
    </Router>
  );
}

export default App;
