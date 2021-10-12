import React from "react";
import "./form.css";
import '../modal.css'

export default function Form({ visibility, formInvisible }) {
  if (!visibility) return null;
  return (
    <>
      <div className="fullscreen-form">
        <div className="new-form-shape">
          <div className="close-circle red" onClick={formInvisible}>
            {" "}
            <center>Close</center>
          </div>
          <div className="close-circle green" />
          <div className="close-circle yellow" />
          <h2 className="form-title appear-late">Add Your favourite tool:</h2>
          <div className="form-body appear-late">
            <hr />
            <center>
              <input
                class="form-input"
                autoFocus="true"
                type="text"
                name=""
                id=""
                placeholder="Tech Name, for ex: Twitter"
              />
              <br />
              <input
                class="form-input"
                type="text"
                name=""
                id=""
                placeholder="Name of Tool"
              />
              <br />
              <textarea
                class="form-input form-input-description"
                name=""
                id=""
                placeholder="Details about the Tool (try to keep it short) and provide link of tool"
              />
              <br />
              <button class="form-submit-btn">Submit</button>
              
            </center>
          </div>
        </div>
        <div class="foreground"></div>
        <div class="midground">
        </div>
        <div className="clouds"></div>
        <div class="background"></div>
      </div>
    </>
  );
}
