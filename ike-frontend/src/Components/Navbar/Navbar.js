import React from 'react';
import "./Navbar.css";
//import PAFlogo from '../../Assets/logo-PAF-sm.png';


const NavBar = () => {
    return (
        <div className="Navbar">
            <a className='nav-logo' href='/'>ʻIke Kūpuna</a>
            <div className="nav-items">
                <a href="/Unit 1">Unit 1</a>
                <a href="/Unit 2">Unit 2</a>
                <a href="/Unit 3">Unit 3</a>
                <a href="/Unit 4">Unit 4</a>
                <a href="/Unit 5">Unit 5</a>
            </div>
            <div className='nav-toggle'>
                <div className='bar'></div>
            </div>
        </div>
    );
};

export default NavBar;