import './App.scss'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import logo from './images/logo.svg'
import Button from './UI/Button/Button';

function App() {
  return (
    <div className="container">
      <Header>
        <img className='header__logo' src={logo} alt="logo" />
        <Navigation />
        <Button name={'Request Invite'}/>
      </Header>
    </div>
  );
}

export default App;
