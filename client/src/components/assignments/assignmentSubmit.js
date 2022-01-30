import "./assignmentSubmit.css";
import "../ui/w3.css";
import { useState } from "react";

const Assignment = (props) => {
  const [verify, setVerify] = useState(false);
  const [code, setCode] = useState("");

  if (verify) {
    return (
      <div className="assn-submit">
        <h2>Check each selection carfully!!</h2>
        <form
          action="/assignmentPDF"
          method="POST"
          encType="multipart/form-data"
        >
          <select name="assignment[title]">
            <option value="assignment1">Assignment1</option>
            <option value="assignment2">Assignment2</option>
            <option value="assignment3">Assignment3</option>
          </select>
          <select name="assignment[fileType]">
            <option value="slide">Slide</option>
            <option value="report">Report</option>
          </select>
          <input type="file" name="pdf" />
          <button>Submit your change</button>
        </form>
      </div>
    );
  }

  const submintHandler = async (event) => {
    event.preventDefault();
    await fetch(`/send/${code}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.verified) {
          setVerify(result.verified);
        }
      });
  };

  const codeChangeHandler = (event) => {
    console.log(event.target.value);
    setCode(event.target.value);
  };

  return (
    <div className="assn-submit">
      <h1>here to submit your work</h1>
      <form onSubmit={submintHandler}>
        <label htmlFor="">Input code to verify</label>
        <input type="text" onChange={codeChangeHandler} value={code} />
        <button>Verify!</button>
      </form>
    </div>
  );
};
export default Assignment;
