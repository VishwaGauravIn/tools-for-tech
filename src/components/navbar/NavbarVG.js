import React from "react";
import "./NavbarVG.css";
import { useState } from "react";
import Modal from "../modal/Modal";
// Not creating NavBar from Scratch because it will use js for dropdown and relative sizing of desired contents which I need to create from scratch

const spaceVal = " ";

function NavbarVG({home,twitter,whatsapp,instagram,reddit,snapchat,youtube},params) {
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
                <div className="nav-link active" aria-current="page" onClick={home} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  Home
                </div>
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
                    <div
                      className="dropdown-item dropdown-item-custom"
                      onClick={twitter} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    >
                      Twitter
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item dropdown-item-custom" onClick={whatsapp} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      WhatsApp
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item dropdown-item-custom" onClick={instagram} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Instagram
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item dropdown-item-custom" onClick={reddit} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Reddit
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item dropdown-item-custom" onClick={snapchat} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Snapchat
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item dropdown-item-custom" onClick="" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Facebook
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item dropdown-item-custom" onClick={youtube} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      YouTube
                    </div>
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
