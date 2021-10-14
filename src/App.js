import "./App.css";
import "./components/Scroller.css";
import Masonry from 'masonry-layout'
import NavBarVG from "./components/navbar/NavbarVG";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import ContentTwitter from "./components/ContentTwitter";
import ContentWhatsapp from "./components/ContentWhatsapp";
import ContentInstagram from "./components/ContentInstagram";
import AnimateBg from "./components/AnimateBg"
import ContentReddit from "./components/ContentReddit";
import ContentSnapchat from "./components/ContentSnapchat";
import LoaderVG from "./components/loader/LoaderVG";

// Use caraousal for home
/*
While adding any new Tech Component for ex: Twitter, Snapchat etc
in App.js > define bodyComponent, pass it's value in NavBarVG
in NavBarVG > add Navigation bar Dropdown (for ex: add Snapchat in dropdown menu), and define onClick function
*/
const bodyComponents = {
  a: <ContentTwitter/>,
  b: <ContentWhatsapp/>,
  c: <ContentInstagram/>,
  d: <ContentReddit/>,
  e: <ContentSnapchat/>
};
window.onload = function (){
  AnimateBg();
}
function MasonryInit(){
  const grid2 = document.querySelector(".grid2");
        const masonry = new Masonry(grid2);
}
function App() {
  const [selected, setSelected] = useState(null); //set it to a,b,c,d, or home for default value
  const [loaderVisibility, slv] = useState(null)
  const loaderAlgo = (contentVal) => {
      if (contentVal != selected){
        slv(true);
      }
  }
  return (
    <>
      <div>{ loaderVisibility ? <LoaderVG /> : null }</div>
      <NavBarVG 
      twitter={() => {setSelected("a");loaderAlgo("a")}}
      whatsapp={() => {setSelected("b");loaderAlgo("b")}}
      instagram={() => {setSelected("c");loaderAlgo("c")}}
      reddit={() => {setSelected("d");loaderAlgo("d")}}
      snapchat={() => {setSelected("e");loaderAlgo("e")}}
      />
      {/* <ModeToggler/> */}
      <div className="grid" onLoad={ () => {MasonryInit();setTimeout(function() {slv(false)}, 1000);}}>{selected && bodyComponents[selected]}</div>
      <Footer />
      <canvas id="canvas"></canvas>
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