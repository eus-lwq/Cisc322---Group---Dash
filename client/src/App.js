import { Fragment } from "react";
import AssignmentSubmit from "./components/assignments/assignmentSubmit";
import Assignment from "./components/assignments/assignment";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import HeaderContent from "./components/header/headerContent";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <HeaderContent></HeaderContent>
      <About></About>
      <Assignment></Assignment>
      <div>
        <AssignmentSubmit></AssignmentSubmit>
      </div>
      <Team></Team>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
