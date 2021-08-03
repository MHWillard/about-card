import AboutContent from '../components/AboutContent';

/*
Depending on the class, ContainerContent rotates with other components for different content: about, social, etc.
*/

function ContainerContent() {
    return(
        <div className="container-content container-fluid">
            <AboutContent />
        </div>
    );
}

export default ContainerContent;