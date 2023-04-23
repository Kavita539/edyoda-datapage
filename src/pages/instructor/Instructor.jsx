import CourseAccordion from "../../Components/courseAccordion/CourseAccordion";
import NavBar from "../../Components/navbar/NavBar";
import SideBar from "../../Components/sidebar/SideBar";
import "./instructor.css";

const Instructor = () => {
  return (
    <>
      <NavBar />
      <CourseAccordion />
      <div className="instructor-area">
        <SideBar />
        <div className="instructor-content">
          <h2>Nothing to display here...</h2>
        </div>
      </div>
    </>
  )
}

export default Instructor