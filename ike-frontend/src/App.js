import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Unit1 from './Pages/Unit 1/unit1';
//import Unit2 from './Pages/Unit 2/unit2';
//import Unit3 from './Pages/Unit 3/unit3';
//import Unit4 from './Pages/Unit 4/unit4';
//import Unit5 from './Pages/Unit 5/unit5';
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
