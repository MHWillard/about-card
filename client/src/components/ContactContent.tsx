import thumbnail from '../avatar2.jpg';

function ContactContent() {
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
                
                <div className='col-md-8 col-xs-12 '>
                    <div className='about-summary align-self-center'>
                    Contact CONTENT
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContactContent;