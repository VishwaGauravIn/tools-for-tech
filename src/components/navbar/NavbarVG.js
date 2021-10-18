import React from "react";
import "./NavbarVG.css";
import { useState } from "react";
import Modal from "../modal/Modal";
// Not creating NavBar from Scratch because it will use js for dropdown and relative sizing of desired contents which I need to create from scratch

const spaceVal = " ";

function NavbarVG(params) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar-custom-props">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Tools for Tech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  List of Techs
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-custom"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item dropdown-item-custom"
                      href="/twitter"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-item-custom" href="/whatsapp" >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-item-custom" href="/instagram" >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-item-custom" href="/reddit" >
                      Reddit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-item-custom" href="/snapchat" >
                      Snapchat
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-item-custom" href="/facebook" >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-item-custom" href="/youtube" >
                      YouTube
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                </ul>
              </li>
            </ul>
            <button
              className="btn btn-success btn-success-custom"
              type="submit"
              onClick={() => setIsOpen(true)}
              data-toggle="tooltip"
              title="Your every Contribution is Valuable to us"
            >
              Contribute {spaceVal}
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/contribute-3184857-2684510.png"
                alt="contribute"
                className="nav-btn-contribute"
              />
            </button>
          </div>
        </div>
      </nav>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Model
      </Modal>
    </>
  );
}

export default NavbarVG;
