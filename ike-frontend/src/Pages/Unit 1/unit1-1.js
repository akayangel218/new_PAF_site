import './unit1.css'
import React from 'react';

const Unit11 = () => {
    return (
        <>
            <div className='title'> Lesson 1.1: Before your visit</div>
            <div className='textbox'> 
                <p>
                In this lesson, you will learn how to prepare for an aloha ʻāina site. 
                To start, watch this video of Rosalyn Concepcion.
                </p>
            </div>
            <a className='proceed' href='/unit1.12'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit11;