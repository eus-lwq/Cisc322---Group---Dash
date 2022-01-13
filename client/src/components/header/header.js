import "../ui/w3.css";
const Header = (props) => {
  return (
    <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home" style={{height: "100vh"}}>
      {props.children}
    </header>
  );
};

export default Header;
