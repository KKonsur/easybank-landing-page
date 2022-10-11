import './App.scss'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import logo from './images/logo.svg'
import imageMockups from './images/image-mockups.png'
import Button from './UI/Button/Button';
import Intro from './components/Main/Intro';
import About from './components/About/About';

function App() {
  return (
    <div className="container">
      <Header>
        <img className='header__logo' src={logo} alt="logo" />
        <Navigation />
        <Button name={'Request Invite'} />
      </Header>
      <Intro>
        <div className="intro__content">
          <h1 className='intro__heading'>Next generation digital banking</h1>
          <p className='intro__paragraph'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <Button name={'Request Invite'} />
        </div>
        <div className="intro__images">
          <img className="intro__mockups" src={imageMockups} alt="" />
        </div>
      </Intro>
      <About />
    </div>
  );
}

export default App;
