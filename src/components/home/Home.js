import "./home.css";
import List from "../list/List";

export default function Home(params) {
  return (
    <>
    <div className="home-about">
    <div className="home-title">
      Tools for Tech
    </div>
    <div className="home-desc">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> Aliquam delectus quas vitae ut aperiam eum saepe, inventore <br/> modi, laboriosam dolor minus maxime rem doloremque <br/> earum repellendus error perferendis unde vero illum! <br/> Est fugiat molestiae ipsam amet?
    </div>
    </div>
    <List/>
    </>
  );
}
