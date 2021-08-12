import thumbnail from '../avatar2.jpg';
import gallery1 from '../gallery1.jpg';
import gallery2 from '../gallery2.jpg';
import gallery3 from '../gallery3.jpg';

function PortfolioContent() {
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

                    Check out a sample of my work below.<br/>

                    <div className="card-group">
                        <div className="card">
                            <img src={gallery1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Balloons in the Sky</h5>
                        </div>
                        </div>
                        <div className="card">
                            <img src={gallery2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Peaceful Lake</h5>
                        </div>
                        </div>
                        <div className="card">
                            <img src={gallery3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mountain Range</h5>
                        </div>
                    </div>
                    </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default PortfolioContent;