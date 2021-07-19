import React from 'react';
import NavbarButtons from 'components/NavbarButtons';

/*
Navbar is divided into two sections
-left section, left aligned: first and last name
-right section, right aligned: a container for the various navbar buttons in order
*/

function Navbar() {
    return(
        <div className="navbar">
            <NavbarButtons />
        </div>
    );
}

export default Navbar;