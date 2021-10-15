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
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus quas vitae ut aperiam eum saepe, inventore modi, laboriosam dolor minus maxime rem doloremque earum repellendus error perferendis unde vero illum! Est fugiat molestiae ipsam amet?
    </div>
    </div>
    <List/>
    </>
  );
}
