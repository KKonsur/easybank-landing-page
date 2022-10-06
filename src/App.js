import './App.scss'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import logo from './images/logo.svg'
import imageMockups from './images/image-mockups.png'
import Button from './UI/Button/Button';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="container">
      <Header>
        <img className='header__logo' src={logo} alt="logo" />
        <Navigation />
        <Button name={'Request Invite'} />
      </Header>
      <Main>
        <div className="main__content">
          <h1 className='main__heading'>Next generation digital banking</h1>
          <p className='main__paragraph'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <Button name={'Request Invite'} />
        </div>
        <div className="main__images">
          <img className="main__mockups" src={imageMockups} alt="" />
        </div>
      </Main>
    </div>
  );
}

export default App;
