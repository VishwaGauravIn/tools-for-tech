// ©VishwaGauravIn

import React from "react";
import "./modal.css";
import { useState } from "react";
import Form from "./form/Form";
import AnimateBg from "../AnimateBg";

let spaceVal = " ";

export default function Modal({ open, onClose }) {
  const [formVisible, isFormVisible] = useState(false);
  if (!open)
    return (
      <Form
        visibility={formVisible}
        formInvisible={() => isFormVisible(false)}
      />
    );

  return (
    <>
      <div className="fullscreen-container" onLoad={AnimateBg}>
      <canvas id="canvas"></canvas>
        <div className="pseudo-modal">
          <button className="modal-btn-5" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </button>
          <button className="modal-btn-5 modal-btn-501" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </button>
          <button className="modal-btn-5 modal-btn-502" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </button>
          <div className="parent-modal">
            <div className="modal-title">
              <center>
                Contribute {spaceVal}
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/contribute-3184857-2684510.png"
                  alt="contribute"
                  className="modal-title-image"
                />
                <hr className="modal-divider" />
              </center>
            </div>
            <div className="modal-body">
              <center>
                <div className="modal-body-content"></div>
                <div className="modal-body-buttons">
                  <button
                    onClick={() => {
                      isFormVisible(true);
                      onClose();
                    }}
                    className="modal-body-button modal-btn-2"
                  >
                    Add your fav Tool !
                  </button>
                  <br />
                  <a href="https://github.com/VishwaGauravIn/tools-for-tech">
                  <button className="modal-body-button modal-btn-3">
                    Commit on GitHub
                  </button></a>
                  <br />
                  <a href="https://paypal.me/VishwaGauravIn">
                  <button className="modal-body-button modal-btn-4">
                     Donate
                  </button></a>
                </div>
              </center>
            </div>
            {/* <button className="modal-btn-close" onClick={onClose}>Close Modal</button>   */}
          </div>
        </div>
        
      </div>
    </>
  );
}