import '../unit1.css'
import React from 'react';
import bubble from '../../../Assets/Unit 1/Lesson 1/thought.png'

const Unit113 = () => {
    return (
        <>
            <div className='title'> Lesson 1.1: My ʻĀina</div>
            <div className='textbox'> 
                <p>
                Next, use this map of Oʻahu to find the name of your ahupuaʻa. 
                </p>
            </div>
            <div className='textbox'> 
                <p>
                You can then add this information to your hoʻolauna.
                </p>
            </div>
            <div className='thoughtbubble' >
                <img src={bubble} alt="bubble"/>
            </div>
            <div className='input1' >
                <form>
                    <label>Aloha, 
                        <input type="text" />
                         ʻo koʻu inoa.
                    </label>
                </form>
                <form>
                    <label>No 
                        <input type="text" />
                         mai au.
                    </label>
                </form>
            </div>
            <a className='proceed' href='/unit1.14'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit113;