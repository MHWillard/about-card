import React from 'react';

function NavbarButtons() {
    return(
        <div className="navbar-buttons">
            <ul className='navbar-nav'>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Portfolio</li>
                <li className='nav-item'>Social</li>
                <li className='nav-item'>Contact</li>
            </ul>
        </div>
    );
}

export default NavbarButtons;

/* 
                    <button type="button" className="btn btn-light btn-lg mx-auto">About</button>
                    <button type="button" className="btn btn-light btn-lg mx-auto">Portfolio</button>
                    <button type="button" className="btn btn-light btn-lg mx-auto">Social</button>
                    <button type="button" className="btn btn-light btn-lg mx-auto">Contact</button>
*/