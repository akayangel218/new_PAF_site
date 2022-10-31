import './unit1.css';
//import Unit1_1 from './unit1-1';
import React from 'react';
//import {Link} from "react-router-dom";

const Unit1 = () => {
        return (
            <>
                <div className='title'> Unit 1: Hoʻomākaukau</div>
                <div className='textbox'> 
                    <p>
                    You will be  entering an aloha ʻāina site soon. These lessons will prepare you to physically and 
                    mentally connect, learn, and get the most out of your experience.
                    </p>
                </div>
                <a className='proceed' href='/unit1-1'>
                    <p class="proceedtext">Enter</p>
                </a>
            </>
        );
    }

export default Unit1;