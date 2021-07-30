import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faSignature } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return(
        <div className='about-footer container-fluid'>
            <div className='about-footer-summary'>
            Join fi.do and connect with high-quality dog freelancers and clients. <br />
            </div>
            <div className='about-footer-buttons'>
                <div>
                <button type="button" className="btn btn-link btn-lg footer-button"><FontAwesomeIcon icon={faBook} size="lg" className="footer-button-icon"/> Learn more</button> 
                <button type="button" className="btn btn-link btn-lg footer-button"><FontAwesomeIcon icon={faSignature} size="lg" className="footer-button-icon"/> Sign up</button>
                </div>            
            </div>
            <div className='about-footer-sitelinks'>         
            <a href="#">Privacy Policy</a> • <a href="#">Sitemap</a> • <a href="#">Contact Us</a><br />
            Copyright 2021 fi.do.
            </div>
        </div>
    );
}

export default Footer;