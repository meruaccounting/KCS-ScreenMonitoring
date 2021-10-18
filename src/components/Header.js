import React, { Component } from "react";
import icon from "../images/icon1.png";
class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-tabs">
            <div className="icons">
              <img src={icon} alt="logo" className="nav__logo" />
            </div>
            <ul className="nav__link">
              <li href="#" className="welcome__user ">
                Welcome User
              </li>
              <li>
                <a className="nav__items" href="#">
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a className="nav__items" href="#">
                  Username
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn nav__items">Reports</button>
                  <div className="dropdown-content">
                    <a href="#">Summary</a>
                    <a href="#" className="boder_bottom">
                      Detailed
                    </a>
                    <hr />
                    <a href="#" className="boder_bottom">
                      Weekly Reports
                    </a>
                    <hr />
                    <a href="#">Saved Reports</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrow-down"></div>
      </div>
    );
  }
}

export default Header;
