import './Home.css';
import React from 'react';

const Home = () => {
    
    <><div className='title'> Aloha </div><div className='textbox'>
    <p>
      Welcome to the Waikalua Loko I'a interactive platform.
      The Information shared will support us in continuing to foster kinship and kuleana between kanaka and ʻāina.
      Please select a unit to begin.
      Mahalo nui.
    </p>
  </div><div className='units'>
      <a className='unit' href='/unit1'>
        <p class="unittext">Unit 1: E Komo</p>
        <p class="text-translation">Welcome</p>
      </a>
      <a className='unit' href='/unit2'>
        <p class="unittext">Unit 2: Nā Loko lʻa</p>
        <p class="text-translation">Fishponds (Coming Soon)</p>
      </a>
      <a className='unit' href='/unit3'>
        <p class="unittext">Unit 3: E Ola I ka Loko</p>
        <p class="text-translation">Life in a Fishpond (Coming Soon)</p>
      </a>
      <a className='unit' href='/unit4'>
        <p class="unittext">Unit 4: Nā Mea Kanu</p>
        <p class="text-translation">Plants (Coming Soon)</p>
      </a>
      <a className='unit' href='/unit5'>
        <p class="unittext">Unit 5: I Ka Wā Ma Hope</p>
        <p class="text-translation">Future (Coming Soon)</p>
      </a>
    </div></>
}

export default Home;