import "./App.css";
import "./components/Scroller.css";
import Masonry from 'masonry-layout'
import NavBarVG from "./components/navbar/NavbarVG";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import ContentTwitter from "./components/content/ContentTwitter";
import ContentWhatsapp from "./components/content/ContentWhatsapp";
import ContentInstagram from "./components/content/ContentInstagram";
import AnimateBg from "./components/AnimateBg"
import ContentReddit from "./components/content/ContentReddit";
import ContentSnapchat from "./components/content/ContentSnapchat";
import LoaderVG from "./components/loader/LoaderVG";
import Home from "./components/home/Home";
import ContentYoutube from "./components/content/ContentYoutube";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/*
While adding any new Tech Component for ex: Twitter, Snapchat etc
in App.js > define bodyComponent, pass it's value in NavBarVG
in NavBarVG > add Navigation bar Dropdown (for ex: add Snapchat in dropdown menu), and define onClick function
*/

window.onload = function (){
  AnimateBg();
}
function MasonryInit(){
  const grid2 = document.querySelector(".grid2");
    new Masonry(grid2);
}
function App() { 
  const [loaderVisibility, slv] = useState(null)
  return (
    <>
      <div>{ loaderVisibility ? <LoaderVG /> : null }</div>
      <NavBarVG/>
      {/* <ModeToggler/> */}
      <div className="grid" onLoad={ () => {MasonryInit();setTimeout(function() {slv(false)}, 1000);}}>
      <Router>
        <Switch>
      <Route path="/twitter">
            <ContentTwitter />
      </Route>
      <Route path="/whatsapp">
            <ContentWhatsapp />
      </Route>
      <Route path="/instagram">
            <ContentInstagram />
      </Route>
      <Route path="/reddit">
            <ContentReddit />
      </Route>
      <Route path="/snapchat">
            <ContentSnapchat />
      </Route>
      <Route path="/facebook">
            {/* <ContentFacebook /> */}
      </Route>
      <Route path="/youtube">
            <ContentYoutube />
      </Route>
      <Route path="/">
            <Home />
      </Route>
      </Switch>
      </Router>
      </div>
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