import Header from "./header";
import Button from "../ui/button";
import "../ui/w3.css";

const HeaderContent = () => {
  return (
    <Header>
      <div
        className="w3-display-left w3-text-white"
        style={{ padding: "48px" }}
      >
        <span className="w3-jumbo w3-hide-small">We are group 6: Dash.</span>
        <br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium">
          We are group 6: Dash
        </span>
        <br />
        <span className="w3-large"> Let's get work together.</span>
        <br />
        <p>
          <a
            href="#about"
            className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
          >
            Learn more and start today
          </a>
        </p>
      </div>
    </Header>
  );
};

export default HeaderContent;
