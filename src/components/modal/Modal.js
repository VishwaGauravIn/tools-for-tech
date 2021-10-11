// ©VishwaGauravIn

import React from "react";
import "./modal.css";

let spaceVal = " ";

export default function Modal({open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="fullscreen-container">
        <div className="pseudo-modal">
          <button className="modal-btn-5" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-x-lg"
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
              class="bi bi-x-lg"
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
              class="bi bi-x-lg"
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
                  <button className="modal-body-button modal-btn-2">
                    Add your fav Tool !
                  </button>
                  <br />
                  <button className="modal-body-button modal-btn-3">
                    Commit on GitHub
                  </button>
                  <br />
                  <button className="modal-body-button modal-btn-4">
                    <div className="donate-text">
                      Donate {spaceVal} <br />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="38"
                        class="bi bi-suit-heart donate-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                      </svg>
                    </div>
                  </button>
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
