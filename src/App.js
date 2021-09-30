import './App.css';
import Masonry from 'masonry-layout';
import Navbar from './components/Navbar';
import ContentTwitter from './components/ContentTwitter';
import ContentWhatsapp from './components/ContentWhatsapp';


// Use caraousal for home
window.onload =() => {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid);
};
function App() {
  return (
    <>
    <Navbar/>
    {/* <ContentTwitter/> */}
    <ContentWhatsapp/>
    </>
  );
}

export default App;
