import classes from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <a>DASH</a>
      <div>
        <a>About</a>
        <a>Assignments</a>
        <a>Team</a>
      </div>
    </div>
  );
};

export default Navbar;
