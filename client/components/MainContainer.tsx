import React from 'react';
import ContainerContent from '../components/ContainerContent';
import Navbar from '../components/Navbar';

function MainContainer() {
    return(
        <div>
            <Navbar />
            <h1>main container</h1>
            <ContainerContent />
        </div>
    );
}

export default MainContainer;