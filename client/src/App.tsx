import './App.css';
import MainContainer from 'components/MainContainer';
import Navbar from 'components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <MainContainer />
      </header>
    </div>
  );
}

export default App;
