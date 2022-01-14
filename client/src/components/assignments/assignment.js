import { useEffect, useState } from "react";
import "../ui/w3.css";
import AssignmentCard from "../ui/assignmentCard";

const predefinedValue = {
  assignment1: {
    content: "asdhiljsahfi hfdsi fhiodsan idsanf ioewnif ndsklf nas",
    imageLink:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
  },
  assignment2: {
    content:
      "asdhiljsahfi hfdsi sad sa dsa f fhiodsan idsanf ioewnif ndsklf nas",
    imageLink:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  assignment3: {
    content: "asdhiljsahfi hfdsi fhiods fds fdds fsan idsf ",
    imageLink:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
  },
};

const stringParser = (string) => {
  return "Assignment " + string.charAt(string.length - 1);
};

const Assignment = () => {
  const [data, setData] = useState();
  useEffect(async () => {
    await fetch("/data")
      .then((res) => {
        return res.json();
      })
      .then((assn) => setData([...assn]));
  }, []);

  console.log(data);
  if (data) {
    let dataList = data.map((el) => {
      return (
        <AssignmentCard
          key={el._id}
          title={stringParser(el.title)}
          content={predefinedValue[el.title].content}
          imageLink={predefinedValue[el.title].imageLink}
          linkOfSlide={el.linkOfSlide}
          linkOfReport={el.linkOfReport}
        />
      );
    });

    console.log(dataList);

    return (
      <div
        className="w3-container w3-light-grey"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="project"
      >
        <h1 style={{ padding: "4% 0" }}>Our Assignments</h1>
        {dataList}
      </div>
    );
  }
  return (
    <article className="assn">
      <p>
        No_Data_Exception: No data found, if the problem presists, contact me
        @Lu
      </p>
    </article>
  );
};

export default Assignment;
