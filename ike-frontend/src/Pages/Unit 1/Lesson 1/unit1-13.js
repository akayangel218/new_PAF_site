import '../unit1.css'
import React from 'react';
import Oahu from '../../../Assets/Unit 1/Oahu Map.png'

const Unit113 = () => {
    return (
        <>
            <div className='title'> Lesson 1.13: My ʻĀina</div>
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
            <div className="Oahumap">
                <img src={Oahu} alt="Ho"/>
            </div>
            <div className='input_title'> ʻŌlelo Hawaiʻi </div>
            <br></br>
            <div className='input1' >
                <form>
                    <label>Aloha, </label>
                        <input 
                        type="text"
                        />
                    <label> ʻo koʻu inoa.</label>
                </form>
            </div>
            <div className='input1' >
                <form>
                    <label>No </label>
                        <input type="text" /> 
                    <label> mai au.</label>
                </form>
            </div>
            <div className='input_title'> English </div>
            <br></br>
            <div className='input1' >
                <form>
                    <label>Hello, my name is </label>
                        <input 
                        type="text"
                        />
                    <label> .</label>
                </form>
            </div>
            <div className='input1' >
                <form>
                    <label>I am from </label>
                        <input type="text" />
                    <label> .</label>
                </form>
            </div>
            <div className='input_title'>Example</div>
            <br></br>
            <div className='input1'> 
                <p>ʻO Rosalyn koʻu inoa. </p>
                <p>No Kāneʻohe mai au.</p>
            </div>
            <a className='proceed' href='/unit1.14'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit113;