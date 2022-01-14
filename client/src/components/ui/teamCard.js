import "./w3.css";

const TeamCard = (props) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-card">
        <img src={props.headURL} alt={props.Name} style={{ width: "100%" }} />
        <div className="w3-container">
          <h3>{props.Name}</h3>
          <p className="w3-opacity">{props.specialization}</p>
          <p>{props.introduction}</p>
          <p>
            <a href={props.email}>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-envelope"></i> Send Email
              </button>
            </a>
          </p>
          <p>
            <a href={props.linkedIn}>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-linkedin"></i> LinkedIn
              </button>
            </a>
          </p>
          <p>
            <a href={props.github}>
              <button className="w3-button w3-light-grey w3-block">
                <i className="fa fa-github"></i> Github
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
