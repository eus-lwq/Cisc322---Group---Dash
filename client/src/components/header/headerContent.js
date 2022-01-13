import Header from "./header";
import Button from "../ui/button";
import classes from "./headerContent.css";

const HeaderContent = () => {
  return (
    <Header>
      <h1 className="headerh1">We are group 6: Dash.</h1>
      <h4>Let's get work together.</h4>
      <div>
        <Button>Learn More and start today</Button>
      </div>
    </Header>
  );
};

export default HeaderContent;
