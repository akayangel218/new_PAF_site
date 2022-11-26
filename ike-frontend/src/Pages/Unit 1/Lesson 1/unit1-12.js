import '../unit1.css'
import React from 'react';

const Unit112 = () => {
    return (
        <>
            <div className='title'> Lesson 1.12: Hoʻolauna</div>
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
                Please read the following example and practice your inoa hoʻolauna by filling in the blanks for the English and ʻŌlelo Hawaiʻi.
                </p>
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
            <div className='input_title'>Example</div>
            <br></br>
            <div className='input1'> 
                <p>ʻO Rosalyn koʻu inoa. </p>
            </div>
            <a className='proceed' href='/unit1.13'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit112;