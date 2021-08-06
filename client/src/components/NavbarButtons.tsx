import React from 'react';

/*
click handler: click button, changes state to correect name: about, portfolio, social, contact
talks to click listener in container content

 */
function NavbarButtons(props) {
    let changeAbout = props.changeAbout;
    let changePortfolio = props.changePortfolio;
    let changeSocial = props.changeSocial;
    let changeContact = props.changeContact;

    return(
        <nav className='navbar navbar-expand-lg'>

            <div className='profile-navbar container-fluid justify-content-center'>

                <div className="profile-navbar-buttons navbar-nav">
                    <button type="button" className="btn btn-lg mx-auto" onClick={changeAbout}>About</button>
                    <button type="button" className="btn btn-lg mx-auto" onClick={changePortfolio}>Portfolio</button>
                    <button type="button" className="btn btn-lg mx-auto" onClick={changeSocial}>Social</button>
                    <button type="button" className="btn btn-lg mx-auto" onClick={changeContact}>Contact</button>
                </div>
            </div>

        </nav>
        
    );
}

export default NavbarButtons;