import ContainerContent from '../components/ContainerContent';
import NavbarButtons from '../components/NavbarButtons'
import Footer from '../components/Footer'
import React from 'react';

/* 
put state here
bleed down to navbarbuttons: commpands
bleed down to containercontent: prop for type of content
*/


type ComponentState = {
    current_component?: string;
};

class MainContainer extends React.Component<ComponentState> {
    state: ComponentState = {
        current_component: 'about'
    };

    /*
    clickhandler: listens for click
    --on click, the button changes the state to the name of the component
    rough way of doing it: four handlers that handle each possible button
    */

    changeAbout = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        this.setState({current_component: 'about'});
    }

    changePortfolio = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        this.setState({current_component: 'portfolio'});
    }

    changeSocial = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        this.setState({current_component: 'social'});
    }

    changeContact = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        this.setState({current_component: 'contact'});
    }
    /* push down state as a prop to ContainerContent: change state functions to NavbarButtons */

    render() {

        return(
            <div className="main-container">
            <NavbarButtons 
                changeAbout={this.changeAbout}
                changePortfolio={this.changePortfolio}
                changeSocial={this.changeSocial}
                changeContact={this.changeContact}
            />
            <ContainerContent currentComponent={this.state.current_component} />
            <Footer />
        </div>
        );
    }

}

export default MainContainer;