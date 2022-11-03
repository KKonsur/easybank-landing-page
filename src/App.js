import './App.scss'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import logo from './images/logo-dark.svg'
import imageMockups from './images/image-mockups.png'
import Button from './UI/Button/Button';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
  return (
    <div className="container">
      <Header>
        <img className='header__logo' src={logo} alt="logo" />
        <Navigation />
        <Button name={'Request Invite'} />
        <Hamburger />
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
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
