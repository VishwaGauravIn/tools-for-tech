import "./button.css";

/*
Required parameters
name, svg and url
*/
export default function Button(params) {
  return (
    <>
      <button className="btnoff" onClick={() => window.open(params.url,"_current")} data-bs-toggle="tooltip" data-bs-placement="top" title={params.name}>
        <span className="icon">{params.svg} </span>
      </button>
    </>
  );
}
