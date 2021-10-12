import "./App.css";
import "./components/Scroller.css";
import Masonry from 'masonry-layout'
import NavBarVG from "./components/navbar/NavbarVG";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import ContentTwitter from "./components/ContentTwitter";
import ContentWhatsapp from "./components/ContentWhatsapp";
import ContentInstagram from "./components/ContentInstagram";

// Use caraousal for home
/*
While adding any new Tech Component for ex: Twitter, Snapchat etc
in App.js > define bodyComponent, pass it's value in NavBarVG
in NavBarVG > add Navigation bar Dropdown (for ex: add Snapchat in dropdown menu), and define onClick function
*/
const bodyComponents = {
  a: <ContentTwitter/>,
  b: <ContentWhatsapp/>,
  c: <ContentInstagram/>
};
function MasonryInit(){
setTimeout(
function(){
  const grid2 = document.querySelector(".grid2");
        const masonry = new Masonry(grid2);
},10);
}
function App() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      {/* <div class="white">
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
      </div> */}
      <NavBarVG 
      twitter={() => {setSelected("a"); MasonryInit();}}
      whatsapp={() => {setSelected("b"); MasonryInit();}}
      instagram={() => {setSelected("c"); MasonryInit();}}
      />
      {/* <ModeToggler/> */}
      <div className="grid">{selected && bodyComponents[selected]}</div>
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
