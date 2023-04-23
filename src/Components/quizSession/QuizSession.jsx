import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import CourseAccordion from "../courseAccordion/CourseAccordion";
import SideBar from "../sidebar/SideBar";
import topic from "../../assets/topic.svg";
import assignment from "../../assets/assignment.svg";
import quiz from "../../assets/moduleQuiz.svg";
import "./quizSession.css";

const QuizSession = () => {
return (
<>
    <NavBar />
    <CourseAccordion />
    <div className="modules-area">
        <div className="sidebar-modules">
            <SideBar />
        </div>
        <div className="modules-content">
            <aside className="modulessidebar-container">
                <ul className="modulessidebar-wrapper">
                    <li className="modulessidebar-li-item">
                        <Link to="/modules/topic">
                        <img src={topic} alt="topic" /><span className="modulessidebar-li-content">Python Loops</span>
                        </Link>
                    </li>
                    <li className="modulessidebar-li-item">
                        <Link to="/modules/quiz">
                        <img src={quiz} alt="quiz" /><span className="modulessidebar-li-content">quiz 1: Data
                            Types</span></Link>
                    </li>
                    <li className="modulessidebar-li-item">
                        <Link to="/modules/assignment">
                        <img src={assignment} alt="assignment" /><span className="modulessidebar-li-content">Assignment
                            1: Loops</span></Link>
                    </li>
                </ul>
            </aside>
            <main className="modules-main">
                <h2>Quiz-1: Data Types</h2>
                <p>16 December, 2021 Thursday</p>
                <h4>Quiz Details</h4>
                <div className="quiz-details-card">
                    <div className="question-answer">
                        <p>10<span>Questions</span></p>
                        <p>-<span>Duration</span></p>
                        <p>125<span>Total Score</span></p>
                    </div>
                    <div></div>
                </div>
            </main>
        </div>
    </div>
</>
)
}

export default QuizSession