import '../unit1.css'
import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

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
            <div className='video1'>
                <Vimeo
                video="https://vimeo.com/showcase/9894233/video/769717429"
                className='video1'
                />
            </div>
            <a className='proceed' href='/unit1.12'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit11;