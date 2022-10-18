import React from 'react';
import "./Navbar.css";


const NavBar = () => {
    return (
        <div className="Navbar">
            <span className='nav-logo'>ʻIke Kūpuna</span>
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