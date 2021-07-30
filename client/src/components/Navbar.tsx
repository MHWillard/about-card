/*
Navbar is divided into two sections
-left section, left aligned: first and last name
-right section, right aligned: a container for the various navbar buttons in order
*/

function Navbar() {
    return(
        <nav className='navbar navbar-expand-lg justify-content-between'>

        <div className='about-card-navbar container-fluid'>
            
            <div className='navbar-brand'>
                fi.do
            </div>

            <div className='navbar-search'>
                <form className='form-inline d-flex p2'>
                    <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            <div className="navbar-buttons navbar-nav">
                <button type="button" className="btn btn-link btn-lg mx-auto">Log In</button>
            </div>

        </div>

        </nav>
    );
}

export default Navbar;

/*
        <nav className='navbar navbar-expand-lg justify-content-between'>

        <div className='about-card-navbar container-fluid'>
            
            <div className='navbar-brand'>
                fi.do
            </div>

            <div className='navbar-search'>
                <form className='form-inline d-flex'>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            <div className="navbar-buttons navbar-nav">
                <button type="button" className="btn btn-link btn-lg mx-auto">Log In</button>
            </div>

        </div>

        </nav>
*/
