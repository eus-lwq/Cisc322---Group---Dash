import "./assignmentCard.css";
import Button from "./button";
const assignmentCard = (props) => {
  return (
    <div className="assnCard">
      <div className="left-assnCard">
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
        <section>
          <Button>See Slide</Button>
          <Button>See Report</Button>
        </section>
      </div>
      <div className="right-assnCard">
        <div></div>
      </div>
    </div>
  );
};

export default assignmentCard;
