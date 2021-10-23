import React, { useState } from "react";
import "./form.css";
import '../modal.css'
import { db } from "./firebase"
export default function Form({ visibility, formInvisible }) {
  const [techName,setTechName] = useState("");
  const [toolName,setToolName] = useState("");
  const [description,setDescription] = useState("");

    // Form Logic Start
  const handleSubmit = (e) => {
    e.preventDefault();
    if (techName !== "" && toolName !== ""){
      db.collection('Submitted Tools').add({
        techName:techName,
        toolName:toolName,
        description:description,
      })
      .then(() => {
        alert('Thanks for submitting your Favourite Tool !')
      })
      .catch((error) => {
        alert(error.message);
      })
      setTechName("")
      setToolName("")
      setDescription("")
    }else{
      if(techName === ""){
        alert('Please Enter the name of technology, for ex: Twitter, Facebook');
      }
      if(toolName === ""){
        alert('Please Enter the name of Tool, for ex: Gbox');
      }
    }
    }
      // Form Logic End

  if (!visibility) return null;
  return (
    <>
      <div className="fullscreen-form">
        <form id="form" onSubmit={handleSubmit}>
        <div className="new-form-shape">
          <div className="close-circle red" onClick={formInvisible}>
            {" "}
            <center><strong>X</strong></center>
          </div>
          <div className="close-circle green" />
          <div className="close-circle yellow" />
          <h2 className="form-title appear-late">Add Your favourite tool:</h2>
          <div className="form-body appear-late">
            <div className="form-content">
            <center>
              <h5 className="form-label">Tech Name:</h5>
              <input
                className="form-input"
                type="text"
                value={techName}
                onChange={(e) => setTechName(e.target.value)}
                id="techName"
              />
              <br />
              <h5 className="form-label">Tool Name:</h5>
              <input
                className="form-input"
                type="text"
                value={toolName}
                onChange={(e) => setToolName(e.target.value)}
                id="toolName"
              />
              <br />
              <h5 className="form-label">Description:</h5>
              <textarea
                className="form-input form-input-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
               />
              <br />
              <button type="submit" className="form-submit-btn">Submit</button>  
            </center>
          </div></div>
        </div>
        </form>
      </div>
    </>
  );
}
