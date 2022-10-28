import './unit1.css';
//import Unit1_1 from './unit1-1';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
//import {Link} from "react-router-dom";

const Unit1 = () => {
        return (
            <div className="App">
                <Navbar />
                <div className='title'> Unit 1: Hoʻomākaukau</div>
                <div className='textbox'> 
                    <p>
                    These lessons will prepare you to physically and 
                    mentally connect, learn, and get the most out of 
                    your experience.
                    </p>
                </div>
            </div>
        );
    }

export default Unit1;