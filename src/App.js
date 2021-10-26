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
import ContentFacebook from "./components/content/ContentFacebook"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
      <Router>
      <div>{ loaderVisibility ? <LoaderVG /> : null }</div>
      <NavBarVG/>
      {/* <ModeToggler/> */}
      <div className="grid" onLoad={ () => {MasonryInit();setTimeout(function() {slv(false)}, 0);}}>
      <Switch>
      <Route path='/twitter' component={ContentTwitter} />
      <Route path='/whatsapp' component={ContentWhatsapp} />
      <Route path='/instagram' component={ContentInstagram} />
      <Route path='/reddit' component={ContentReddit} />
      <Route path='/snapchat' component={ContentSnapchat} />
      <Route path='/facebook' component={ContentFacebook} />
      <Route path='/youtube' component={ContentYoutube} />
      <Route path='/home' component={Home} />
      <Route component={Home} />
      </Switch>
      </div>
      <Footer />
      <canvas id="canvas"></canvas>
      </Router>
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