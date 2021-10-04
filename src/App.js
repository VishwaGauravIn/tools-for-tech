import './App.css';
import Masonry from 'masonry-layout';
import Navbar from './components/Navbar';
import './components/Scroller.css';
import NavBarVG from './components/navbar/NavbarVG';
import Footer from './components/footer/Footer';
import ContentTwitter from './components/ContentTwitter';
import ContentWhatsapp from './components/ContentWhatsapp';
import ContentInstagram from './components/ContentInstagram';

// Use caraousal for home

window.onload =() => {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid);

  const grid2 = document.querySelector('.grid2');
  const masonry2 = new Masonry(grid2);
};

function App() {
  return (
    <>
    <Navbar/>
    {/* <ModeToggler/> */}

    {/* <ContentTwitter/> */}
    {/* <ContentWhatsapp/> */}
    <ContentInstagram/>
    <Footer/>
    </>
  );
}

export default App;
