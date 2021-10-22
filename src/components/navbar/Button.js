import "./button.css";

/*
Required parameters
name, svg and url
*/
export default function Button(params) {
  return (
    <>
      <button className="btnoff" onClick={() => window.open(params.url,"_current")}>
        <span className="text">{params.name}</span>
        <span className="icon">{params.svg} </span>
      </button>
    </>
  );
}
