import thumbnail from '../avatar2.jpg';

function AboutContent() {
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
                    As the good boy account executive for the Hillson Family, I'm responsible for providing unconditional love and companionship, while teaching life-long lessons in an easy-to-understand format. For example, my latest project involves teaching the family the value of reconnecting with nature, so after I've chewed up their shoes, they'll have no choice but to walk on grass with their bare feet. I'm proud to have provided three years of decicated service ever since I joined the family at two months old. Currently I manage the Hillson Family children, Brent and Jackie, and I provide valuable avoidance training to the Hillson Family cat department, Mittens. I hope to further develop Hillson Family projects and avoid car interactions for the remainder of my career.
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutContent;