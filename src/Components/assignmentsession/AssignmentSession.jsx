import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import CourseAccordion from "../courseAccordion/CourseAccordion";
import SideBar from "../sidebar/SideBar";
import topic from "../../assets/topic.svg";
import assignment from "../../assets/assignment.svg";
import quiz from "../../assets/moduleQuiz.svg";
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock-blue.svg";
import "./assignmentSession.css";

const AssignmentSession = () => {
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
                            <img src={topic} alt="topic" className="topic"/><span className="modulessidebar-li-content">Python
                                Loops</span></Link>
                        </li>
                        <li className="modulessidebar-li-item">
                            <Link to="/modules/quiz">
                            <img src={quiz} alt="quiz" className="quiz"/><span className="modulessidebar-li-content">quiz 1: Data
                                Types</span></Link>
                        </li>
                        <li className="modulessidebar-li-item">
                            <Link to="/modules/assignment">
                            <img src={assignment} alt="assignment" className="assignment"/><span
                                className="modulessidebar-li-content">Assignment 1: Loops</span></Link>
                        </li>
                    </ul>
                </aside>
                <main className="modules-main">
                <h2>Assignment-1: Data Types</h2>
                <p>16 December, 2021 Thursday</p>
                <h4>Assignment Details</h4>
                <div className="quiz-details-card">
                    <div className="question-answer-overview">
                        <div className="question-answer">
                            <p className="total-question">10<span className="questions-span">Questions</span></p>
                        </div>
                        <div className="question-answer">
                            <p className="duration">-<span className="duration-span">Duration</span></p>
                        </div>
                        <div className="question-answer">
                            <p className="total-score">125<span className="score-span">Total Score</span></p>
                        </div>

                    </div>
                    <div className="start-end-date">
                        <div className="start-date">
                            <p>Start:</p>
                            <div className="start-date-time">
                                <div className="start-date">
                                    <img src={calendar} alt="calendar" className="calendar"/>
                                    <span>16 DEC 2021</span>
                                </div>
                                <div className="start-time">
                                    <img src={clock} alt="clcok" className="clock"/>
                                    <span>7:30 PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="end-date">
                            <p>End:</p>
                            <div className="end-date-time">
                            <div className="end-date">
                                <img src={calendar} alt="calendar" className="calendar" style={{fontSize: "16px"}}/>
                                    <span>19 DEC 2021</span>
                                </div>
                                <div className="end-time">
                                    <img src={clock} alt="clcok" className="clock"/>
                                    <span>11:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </main>
            </div>
        </div>
    </>
  )
}

export default AssignmentSession