import thumbnail from '../avatar2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare} from '@fortawesome/free-brands-svg-icons'

function SocialContent() {
    return(
        <div className="container-fluid about-content">

            <div className='row'>
                <div className='col-md-4 col-xs-12 align-self-center'>
                    <div className='about-image'>
                        <img src={thumbnail} />
                    </div>
                    <div className='about-info'>
                    <h1>Spot</h1>
                    <span>Good Boy Account Executive</span><br />
                    <span>Hillson Family</span>
                    </div>
                </div>
                
                <div className='col-md-8 col-xs-12'>


                    <div className='about-summary align-self-center'>
                        
                        <div className="justify-content-center">Reach out to me across the web:</div>

                        <div className='social-media-links row align-self-center '>
                                <div className='col-md-12 d-flex justify-content-center'><button type="button" className="btn btn-link btn-lg social-button"><FontAwesomeIcon icon={faFacebookSquare} size="lg" className="social-button-icon"/>Facebook</button></div> 
                                <div className='col-md-12 d-flex justify-content-center'><button type="button" className="btn btn-link btn-lg social-button"><FontAwesomeIcon icon={faTwitterSquare} size="lg" className="social-button-icon"/>Twitter</button></div> 
                                <div className='col-md-12 d-flex justify-content-center'><button type="button" className="btn btn-link btn-lg social-button"><FontAwesomeIcon icon={faInstagramSquare} size="lg" className="social-button-icon"/>Instagram</button></div> 
                                <div className='col-md-12 d-flex justify-content-center'><button type="button" className="btn btn-link btn-lg social-button"><FontAwesomeIcon icon={faPinterestSquare} size="lg" className="social-button-icon"/>Pinterest</button></div> 
                        </div>

                    </div>
                </div>
            </div>
            </div>
    );
}

export default SocialContent;