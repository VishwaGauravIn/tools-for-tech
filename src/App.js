import './App.css';
import Masonry from 'masonry-layout';
import Navbar from './components/Navbar';
import ContentTwitter from './components/ContentTwitter';
import ContentWhatsapp from './components/ContentWhatsapp';
import './components/Scroller.css';
import NavBarVG from './components/navbar/NavbarVG';

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

    <ContentTwitter/>
    <ContentWhatsapp/>
    </>
  );
}

export default App;
