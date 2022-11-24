import './unit1.css';
import React from 'react';
import Unit1Intro from '../../Assets/Unit 1/unit1_intro.png';

const Unit1 = () => {
        return (
            <>
                <div class="unit1BG">
                    <img src={Unit1Intro} alt="BG"/>
                </div>
                <div className='title'> Unit 1: Hoʻomākaukau</div>
                <div className='intro_textbox'> 
                    <p>
                    You will be entering an aloha ʻāina site soon. These lessons will prepare you to physically and 
                    mentally connect, learn, and get the most out of your experience.
                    </p>
                </div>
                <a className='intro_proceed' href='/unit1.1'>
                    <p class="proceedtext">Enter</p>
                </a>
            </>
        );
    }

export default Unit1;