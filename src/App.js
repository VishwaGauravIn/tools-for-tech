import "./App.css";
import Masonry from "masonry-layout";
import "./components/Scroller.css";
import NavBarVG from "./components/navbar/NavbarVG";
import Footer from "./components/footer/Footer";
import ContentTwitter from "./components/ContentTwitter";
import ContentWhatsapp from "./components/ContentWhatsapp";
import ContentInstagram from "./components/ContentInstagram";
import { Modal } from "./components/modal/Modal";

// Use caraousal for home

window.onload = () => {
  const grid = document.querySelector(".grid");
  const masonry = new Masonry(grid);

  const grid2 = document.querySelector(".grid2");
  const masonry2 = new Masonry(grid2);
};
function App() {
  return (
    <>
      <div class="white">
        <div class="squares">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>
      <NavBarVG />
      {/* <ModeToggler/> */}
      <ContentTwitter/>
      <ContentWhatsapp/>
      {/* <ContentInstagram /> */}
      <Footer />
    </>
  );
}

// Trying to find max Height to create footer appear when scrolled
// window.addEventListener("scroll", (event) => {
//     let maxScroll = window.pageYOffset;
//     console.log(window.scrollTop);
//     let scroll = window.scrollY;
//     console.log(scroll)
// });

export default App;
