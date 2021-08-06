import AboutContent from '../components/AboutContent';
import PortfolioContent from '../components/PortfolioContent';
import SocialContent from '../components/SocialContent';
import ContactContent from '../components/ContactContent';

/*
Depending on the class, ContainerContent rotates with other components for different content: about, social, etc.

Click Portfolio button
Set ContentState to match name of container which is a string
loads that string as name of the container
*/

function ContainerContent(props) {
    let component;
    let activeComponent = props.currentComponent

    /*if (props.currentComponent === 'about') {
        component = <AboutContent />
    } else {
        component = <PortfolioContent />
    }*/

    switch (activeComponent) {
        case 'about':
            component = <AboutContent />;  
            break
        case 'portfolio':
            component = <PortfolioContent />; 
            break
        case 'social':
            component = <SocialContent />; 
            break
        case 'contact':
            component = <ContactContent />; 
            break
    }


    return(
        <div className="container-content container-fluid">
            {component}
        </div>
    );
}

export default ContainerContent;