import { Component, useEffect, useState } from "react";
import "./assignment.css";
import AssignmentCard from "../ui/assignmentCard";

const Assignment = () => {
  const [data, setData] = useState();
  useEffect(async () => {
    await fetch("/data")
      .then((res) => res.json())
      .then((assn) => setData([...assn]));
  }, []);

  // data.map((el) => {
  //   <AssignmentCard
  //     title={el.title}
  //     content="Lorem sajkdh lksahdlk sahdl sab dbnkuewbf"
  //     link={el.link}
  //   />;
  // });
  console.log(data);
  if (data) {
    return (
      <article className="assn">
        <AssignmentCard
          title="Assignment 1"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita temporibus reprehenderit maiores tempore, quisquam blanditiis, corrupti quae adipisci quidem perspiciatis, ab facilis et. Excepturi rem ipsa enim non officiis."
        ></AssignmentCard>
        <AssignmentCard
          title="Assignment 2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita temporibus reprehenderit maiores tempore, quisquam blanditiis, corrupti quae adipisci quidem perspiciatis, ab facilis et. Excepturi rem ipsa enim non officiis."
        ></AssignmentCard>
        <AssignmentCard
          title="Assignment 3"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita temporibus reprehenderit maiores tempore, quisquam blanditiis, corrupti quae adipisci quidem perspiciatis, ab facilis et. Excepturi rem ipsa enim non officiis."
        ></AssignmentCard>
      </article>
    );
  }
  return (
    <article className="assn">
      <AssignmentCard
        title="Assignment 1"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita temporibus reprehenderit maiores tempore, quisquam blanditiis, corrupti quae adipisci quidem perspiciatis, ab facilis et. Excepturi rem ipsa enim non officiis."
      ></AssignmentCard>
      <AssignmentCard
        title="Assignment 2"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita temporibus reprehenderit maiores tempore, quisquam blanditiis, corrupti quae adipisci quidem perspiciatis, ab facilis et. Excepturi rem ipsa enim non officiis."
      ></AssignmentCard>
      <AssignmentCard
        title="Assignment 3"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita temporibus reprehenderit maiores tempore, quisquam blanditiis, corrupti quae adipisci quidem perspiciatis, ab facilis et. Excepturi rem ipsa enim non officiis."
      ></AssignmentCard>
    </article>
  );
};

export default Assignment;
