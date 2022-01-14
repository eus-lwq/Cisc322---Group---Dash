import { Fragment } from "react";
import "../ui/w3.css";

const Navbar = (props) => {
  return (
    <Fragment>
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            DASH
          </a>

          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">
              ABOUT
            </a>
            <a href="#project" className="w3-bar-item w3-button">
              <i className="fa ff"></i> PROJECT
            </a>
            <a href="#team" className="w3-bar-item w3-button">
              <i className="fa fa-user"></i> TEAM
            </a>
          </div>

          <a
            href="javascript:void(0)"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
