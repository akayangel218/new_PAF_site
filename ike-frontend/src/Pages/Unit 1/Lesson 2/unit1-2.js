import '../unit1.css'
import React from 'react';
import pic21 from '../../../Assets/Unit 1/Lesson 2/pic2.png';

const Unit12 = () => {
    return (
        <>
            <div className='title'> Lesson 1.2: Hoʻolauna</div>
            <div className='textbox'> 
                <p>
                    In this lesson you will learn how to enter an aloha ʻāina site. 
                </p>
            </div>
            <div class="l2pic1">
                <img src={pic21} alt="1st Unit2 pic"/>
            </div>
            <div className='textbox_right'>
                <p>
                    First you need to ask permission before entering. 
                    E hō mai by Edith Kanaka'ole is an acceptable oli to use when entering an aloha ʻāina site.
                </p>
            </div>
            <a className='proceed' href='/unit1.3'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit12;