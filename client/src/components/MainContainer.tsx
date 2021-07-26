import ContainerContent from '../components/ContainerContent';
import NavbarButtons from '../components/NavbarButtons'
import Footer from '../components/Footer'

function MainContainer() {
    return(
        <div className="main-container">
            <NavbarButtons />
            <ContainerContent />
            <Footer />
        </div>
    );
}

export default MainContainer;