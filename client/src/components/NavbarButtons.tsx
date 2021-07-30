import React from 'react';

function NavbarButtons() {
    return(
        <nav className='navbar navbar-expand-lg'>

            <div className='profile-navbar container-fluid justify-content-center'>

                <div className="profile-navbar-buttons navbar-nav">
                    <button type="button" className="btn btn-lg mx-auto">About</button>
                    <button type="button" className="btn btn-lg mx-auto">Portfolio</button>
                    <button type="button" className="btn btn-lg mx-auto">Social</button>
                    <button type="button" className="btn btn-lg mx-auto">Contact</button>
                </div>
            </div>

        </nav>
        
    );
}

export default NavbarButtons;