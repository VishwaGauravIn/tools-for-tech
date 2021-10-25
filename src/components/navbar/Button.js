import "./button.css";
import { Link } from "react-router-dom";
/*
Required parameters
name, svg and url
*/
export default function Button(params) {
  return (
    <>
      <Link to={params.url}>
        <button className="btnoff" data-bs-toggle="tooltip" data-bs-placement="top" title={params.name}>
           <span className="icon">{params.svg} </span>
      </button>
      </Link>
    </>
  );
}
