import CourseAccordion from "../../Components/courseAccordion/CourseAccordion";
import NavBar from "../../Components/navbar/NavBar";
import SideBar from "../../Components/sidebar/SideBar";
import topic from "../../assets/topic.svg";
import assignment from "../../assets/assignment.svg";
import quiz from "../../assets/moduleQuiz.svg";
import { Link } from "react-router-dom";
import "./modules.css";

const Modules = () => {
  return (
    <>
    <NavBar />
    <CourseAccordion />
    <div className="modules-area">
      <div className="sidebar-modules"><SideBar /></div>
      <div className="modules-content">
        <aside className="modulessidebar-container">
        <ul className="modulessidebar-wrapper">
        <li className="modulessidebar-li-item">
          <Link to="/modules/topic">
          <img src={topic} alt="topic" className="topic"/><span className="modulessidebar-li-content">Python Loops</span></Link>
        </li>
        <li className="modulessidebar-li-item">
          <Link to="/modules/quiz">
          <img src={quiz} alt="quiz" className="quiz"/><span className="modulessidebar-li-content">quiz 1: Data Types</span></Link>
        </li>
        <li className="modulessidebar-li-item">
          <Link to="/modules/assignment">
          <img src={assignment} alt="assignment"  className="assignment"/><span className="modulessidebar-li-content">Assignment 1: Loops</span></Link>
        </li>
      </ul>
        </aside>
      </div>
    </div>
  </>
  )
}

export default Modules