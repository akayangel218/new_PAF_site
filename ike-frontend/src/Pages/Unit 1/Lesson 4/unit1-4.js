import '../unit1.css'
import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

const Unit14 = () => {
    return (
        <>
            <div className='title'> Lesson 1.4: Exiting</div>
            <div className='textbox'> 
                <p>
                Next, you will learn one format of hoʻolauna using the ʻŌlelo Hawaiʻi. 
                We use hoʻolauna to introduce ourself to other people and places. 
                Please listen to the example and practice your inoa hoʻolauna
                </p>
            </div>
            <div className='video'>
                <Vimeo
                video="https://vimeo.com/showcase/9894233/video/769700380"
                className='video'
                />
            </div>
            <a className='proceed' href='/unit1.1exit'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit14;