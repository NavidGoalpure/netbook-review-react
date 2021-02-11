import logo from './page-logo.png';
import './App.css';

function App() {
  return (
    <div className="desktop-container">
    <header className="App-header">
    <img class="logo" src={logo} alt="logo"/> 
    <div class="icons-container">
    <h3 ><a class="header-icons" href="home">HOME</a></h3>
    <h3><a class="header-icons" href="about">ABOUT</a></h3>
    <h3><a class="header-icons" href="'reviews'">REVIEWS</a></h3>
    <h3 class="h3"><a class="earning-button" href="start-earning">START EARNING</a></h3>
    </div>
    </header>
    </div>
  );
}

export default App;
