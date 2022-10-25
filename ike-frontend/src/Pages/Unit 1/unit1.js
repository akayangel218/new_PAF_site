import './unit1.css'
import React, { Component } from 'react';

class Unit1 extends Component {
    render () {
        return (
            <div className="App">
                <Navbar/>
                <div className='title'> Unit 1: Hoʻomākaukau</div>
                <div className='textbox'> 
                    <p>
                    These lessons will prepare you to physically and 
                    mentally connect, learn, and get the most out of 
                    your experience.
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Unit1;