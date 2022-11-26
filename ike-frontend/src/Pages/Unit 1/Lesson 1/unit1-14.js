import '../unit1.css'
import coral from '../../../Assets/Unit 1/Lesson 1/Hookupu/coral.png'
import freshwater from '../../../Assets/Unit 1/Lesson 1/Hookupu/freshwater.png'
import lei from '../../../Assets/Unit 1/Lesson 1/Hookupu/lei.png'
import rain from '../../../Assets/Unit 1/Lesson 1/Hookupu/rain.png'
import rock from '../../../Assets/Unit 1/Lesson 1/Hookupu/rock.png'
import saltwater from '../../../Assets/Unit 1/Lesson 1/Hookupu/saltwater.png'
import sand from '../../../Assets/Unit 1/Lesson 1/Hookupu/sand.png'
import waterspring from '../../../Assets/Unit 1/Lesson 1/Hookupu/waterspring.png'
import React from 'react';

const Unit114 = () => {
    return (
        <>
            <div className='title'> Lesson 1.1: Hoʻokupu</div>
            <div className='textbox'> 
                <p>
                When visiting an aloha ‘āina site, your group can present ho’okupu (an offering). These are different types of hoʻokupu that are acceptable to offer.
                </p>
            </div>
            <div className='textbox'> 
                <p>
                When visiting Waikalua Loko Iʻa, you may leave your hoʻokupu on this ahu. Hoʻokupu can also be placed on the Kū stone or on the Hina stone.
                </p>
            </div>
            <div className='textbox'> 
                <p>
                You may also offer an oli or mele as a hoʻokupu.
                </p>
            </div>
            <div className="coral">
                <img src={coral} alt="reef"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                koʻa - coral: 
                You can bring a piece of coral to represent where you are from, to offer as hoʻokupu.
                </p>
            </div>
            <div className="fresh">
                <img src={freshwater} alt="fresh"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                wai - fresh water:
                You can gather fresh water from a stream to offer as hoʻokupu. Perhaps collecting in a jar or container to bring with you. 
                </p>
            </div>
            <div className="lei">
                <img src={lei} alt="flowers"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                lei: You can make a lei to offer as hoʻokupu.
                </p>
            </div>
            <div className="rain">
                <img src={rain} alt="drops"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                ua - rain: 
                You can gather rain water from the place you are from to offer as hoʻokupu. Perhaps collect ua in a jar or container to bring with you.
                </p>
            </div>
            <div className="rock">
                <img src={rock} alt="stone"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                pōhaku - rock or stone: 
                You can bring a pōhaku to represent where you are from, to offer as hoʻokupu
                </p>
            </div>
            <div className="salt">
                <img src={saltwater} alt="ocean"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                kai - salt water:
                You can gather salt water from your favorite beach to offer as hoʻokupu. Perhaps collecting in a jar or container to bring with you. 
                </p>
            </div>
            <div className="sand">
                <img src={sand} alt="pebbles"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                one - sand: Not the number ʻoneʻ. You can collect sand from your favorite beach, to offer as hoʻokupu. Perhaps collecting in a jar or container to bring with you. 
                </p>
            </div>
            <div className="waterspring">
                <img src={waterspring} alt="spring"/>
            </div>
            <div className='textbox_right4'> 
                <p>
                punawai - fresh water spring:
                You can collect water from a fresh water spring to offer as hoʻokupu. Perhaps collecting in a jar or container to bring with you.
                </p>
            </div>
            <a className='proceed' href='/unit1.1exit'>
                    <p class="proceedtext">Next</p>
            </a>
        </>
    );
}

export default Unit114;