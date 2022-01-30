import "../ui/w3.css";

const assignmentCard = (props) => {
  return (
    <div
      className="w3-container w3-light-grey"
      id="project"
      style={{ margin: "1%" }}
    >
      <div
        className="w3-row-padding"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <div className="w3-col m3">
          <img
            className="w3-image w3-round-large"
            src={props.imageLink}
            alt=""
          />
        </div>
        <div className="w3-col m6">
          <h3 style={{ color: "black" }}>{props.title}:</h3>
          <p style={{ paddingRight: "45%" }}>{props.content}</p>
          <p>
            <a
              href={props.linkOfSlide}
              className="w3-button w3-black"
              style={{ margin: "1%" }}
            >
              <i className="fa fa-th">&nbsp;</i> See Slide
            </a>
            <a href={props.linkOfReport} className="w3-button w3-black">
              <i className="fa fa-th">&nbsp;</i> See Report
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default assignmentCard;
