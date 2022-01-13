import "../ui/w3.css";

const assignmentCard = (props) => {
  return (
    <div
      className="w3-container w3-light-grey"
      id="project"
      style={{ padding: "128px 16px" }}
    >
      <div className="w3-row-padding">
        <div className="w3-col m6">
          <h3 style={{ color: "black" }}>{props.title}:</h3>
          <p>{props.content}</p>
          <p
            style={{
              width: "64%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href={props.linkOfSlide} className="w3-button w3-black">
              <i className="fa fa-th">&nbsp;</i> See Slide
            </a>
            <a href={props.linkOfReport} className="w3-button w3-black">
              <i className="fa fa-th">&nbsp;</i> See Report
            </a>
          </p>
        </div>
        <div className="w3-col m6">
          <img
            className="w3-image w3-round-large"
            src={props.imageLink}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default assignmentCard;
