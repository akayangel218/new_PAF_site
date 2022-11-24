import '../unit1.css'
import React from 'react';
import bubble from '../../../Assets/Unit 1/Lesson 1/thought.png'

const Unit112 = () => {
    return (
        <>
            <div className='title'> Lesson 1.1: Hoʻolauna</div>
            <div className='textbox'> 
                <p>
                Next, you will learn one format of hoʻolauna using the ʻŌlelo Hawaiʻi. 
                </p>
            </div>
            <div className='textbox'> 
                <p>
                We use hoʻolauna to introduce ourself to other people and places. 
                </p>
            </div>
            <div className='textbox'> 
                <p>
                Please listen to the example and practice your inoa hoʻolauna.
                </p>
            </div>
            <div className='thoughtbubble' >
                <img src={bubble} alt="bubble"/>
            </div>
            <div className='input1' >
                <form>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                </form>
            </div>
            <a className='proceed' href='/unit1.13'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit112;