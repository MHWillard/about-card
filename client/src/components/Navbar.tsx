/*
Navbar is divided into two sections
-left section, left aligned: first and last name
-right section, right aligned: a container for the various navbar buttons in order
*/

function Navbar() {
    return(
        <nav className='navbar navbar-expand-lg'>

        <div className='about-card-navbar container-fluid'>
            
            <div className='navbar-brand'>
                fi.do
            </div>

            <div className="navbar-buttons navbar-nav">
                <button type="button" className="btn btn-link btn-lg mx-auto">About</button>
                <button type="button" className="btn btn-link btn-lg mx-auto">Portfolio</button>
                <button type="button" className="btn btn-link btn-lg mx-auto">Social</button>
                <button type="button" className="btn btn-link btn-lg mx-auto">Contact</button>
            </div>

        </div>

        </nav>
    );
}

export default Navbar;


