import './App.css';
import ContentTwitter from './components/ContentTwitter';
import Navbar from './components/Navbar';
import Masonry from 'masonry-layout';
// Use caraousal for home
window.onload =() => {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid);
};
function App() {
  return (
    <>
    <Navbar></Navbar>
    <ContentTwitter></ContentTwitter>
    </>
  );
}

export default App;
