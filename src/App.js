import './App.scss'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import logo from './images/logo.svg'

function App() {
  return (
    <div className="container">
      <Header>
        <img src={logo} alt="logo" />
        <Navigation />
      </Header>
    </div>
  );
}

export default App;
