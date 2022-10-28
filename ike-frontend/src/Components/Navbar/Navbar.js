import React from 'react';
import "./Navbar.css";
import PAFlogo from '../../Assets/logo-PAF-sm.png';
import WaikaluaLogo from '../../Assets/waikalualogo.png';


const Navbar = () => {
    return (
        <div className="Navbar">
            <a className='nav-logo' href='/'>
            <div class="NavLogo">
                <img src={WaikaluaLogo} alt="2eLogo"/>
            </div>
            </a>
            <a className='paf-logo' href='https://www.thepaf.org/'>
            <div class="PAFLogo">
                <img src={PAFlogo} alt="Logo"/>
            </div>
            </a>
        </div>
    );
};

export default Navbar;