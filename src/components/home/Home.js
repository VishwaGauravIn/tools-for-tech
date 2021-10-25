import "./home.css";
import List from "./components/list/List";
import Showdown from "./components/Showdown";
import Features from './components/Features'

const spaceVal=" "
export default function Home(params) {
  return (
    <>
    <div className="home-about">
    <div className="home-title">
      {/* Tools for Tech */}
    </div>
    <div className="home-desc">
    <p className="home-tagline">One Stop Solution to Every Social-Media Problem. </p>
    We Help You to Find Best Tools that: <br/>
      <div className="home-features">
        <Features/>
    </div>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="blockquote-decoration">“Social media is a two-edged Sword,<br/>Use it Wisely”</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Don't Worry, We got your back{spaceVal}😉
          </figcaption>
        </figure>
    </div>
    </div>
    <List/> 
    <center>
      <Showdown/>
    </center>
    </>
  );
}
