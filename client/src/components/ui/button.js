import classes from "./button.module.css";

const Button = (props) => {
  return (
    <form action="">
      <button onClick={() => console.log("as")} className={classes.button}>
        <div className={classes.WordContent}>{props.children}</div>
      </button>
    </form>
  );
};

export default Button;
