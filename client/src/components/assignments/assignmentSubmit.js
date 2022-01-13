const Assignment = (props) => {
  return (
    <form action="/assignmentPDF" method="POST" encType="multipart/form-data">
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
      <button>submit</button>
    </form>
  );
};
export default Assignment;
