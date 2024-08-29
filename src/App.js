import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <header className='header-container'>
        <Header />
        <nav className='nav-container'>
          <Nav />
        </nav>
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
