import CourseAccordion from "../../Components/courseAccordion/CourseAccordion";
import CourseCertification from "../../Components/courseCertification/CourseCertification";
import CourseDetails from "../../Components/courseDetails/CourseDetails";
import NavBar from "../../Components/navbar/NavBar";
import ProgressCard from "../../Components/progressCard/ProgressCard";
import SideBar from "../../Components/sidebar/SideBar";
import "./home.css";

const Home = () => {
  return (
    <>
        <NavBar />
        <CourseAccordion />
        <div className="home-area">
            <SideBar />
            <div className="home-content">
                <h1>Upcoming Certifications</h1>
                <CourseCertification />
                <h1>Continue Learning</h1>

                <div className="home-details">
                    <div className="course-details-overview">
                        <h4 className="module-details-btn">View Module Details</h4>
                        <CourseDetails />
                    </div>
                    <ProgressCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home