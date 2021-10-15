import React, { Component } from "react";
// import Capture from "./public/Capture.png";
class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-tabs">
            <img src="" alt="logo" className="nav__logo" />
            <ul className="nav__link">
              <li href="#" className="welcome__user">
                Welcome User
              </li>
              <li>
                <a href="#" className="nav__items">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav__items">
                  Username
                </a>
              </li>
              <li>
                <a href="#" className="nav__items">
                  <div class="dropdown">
                    <button class="dropbtn">Reports</button>
                    <div class="dropdown-content">
                      <a href="#">Summary</a>
                      <a href="#">Detailed</a>
                      <a href="#">Weekly Reports</a>
                      <a href="#">Saved Reports</a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="arrow-down"></div>
      </div>
    );
  }
}

export default Header;
