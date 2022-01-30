import { useEffect, useState } from "react";
import "../ui/w3.css";
import AssignmentCard from "../ui/assignmentCard";

const predefinedValue = {
  assignment1: {
    content:
      "In this assignment, we will dive into this software's documents to find out the conceptual architecture holding multiple parts of components, where these components interact with each other to present the functionality. Moreover, we will dig out the rationale of this architecture that plays behind the scenes from different views and perspectives and further extrapolate its evolution. ",
    imageLink:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
  },
  assignment2: {
    content:
      "In this assignment, we will delve into the software's code and find out the rudimental logic in the actual implementation, then we summarize it as concrete architecture and place it side by side with conceptual architecture from A1 to compare the differences in between. ",
    imageLink:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  assignment3: {
    content:
      "Finally, in this assignment, we will propose possible enhancements and potential new features that we can add on. And then, we extrapolate any possible change to the current code, like interface, class, and dependency. ",
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
