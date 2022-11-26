import '../unit1.css'
import Oahu from '../../../Assets/Unit 1/Oahu Map.png'
import React, { useState } from 'react';
import Select from 'react-select'

const options = [
    { value: 'Koʻolau Loa', label: 'Koʻolau Loa' },
    { value: 'Koʻolau Poko', label: 'Koʻolau Poko' },
    { value: 'Waialua', label: 'Waialua' },
    { value: 'Waiʻanae', label: 'Waiʻanae' },
    { value: 'ʻEwa', label: 'ʻEwa' },
    { value: 'Kona', label: 'Kona' },
    { value: 'Another Island', label: 'Another Island' },
    { value: 'Outside Hawaii', label: 'Outside Hawaii' },
    { value: 'I do not know', label: 'I do not know' },
  ]

const Unit11exit = () => {
    const [title, setTitle] = useState();
    return (
        <>
            <div className='title'> Lesson 1.1 Activity </div>
            <div className='textbox'>
                <p>
                Please share your hoʻolauna.
                </p>
            </div>
            <form>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </form>
            <div className='textbox'>
                <p>
                What moku do you live in? 
                </p>
            </div>
            <div className="Oahumap">
                <img src={Oahu} alt="Ho"/>
            </div>
            <Select options={options} />
            <br></br>
            <a className='proceedexam' href='/unit1.2'>
                    <p class="proceedtext">Proceed to Lesson 2</p>
            </a>
        </> 
    )

}

export default Unit11exit;