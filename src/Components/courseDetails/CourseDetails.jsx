import dataWrangling from "../../assets/Data Wrangling.png";
import edyodaInstructor from "../../assets/edyoda-avatar.png";
import "./courseDetails.css";

const CourseDetails = () => {
  return (
    <div className="course-details">
        <div className="instructor-details">
            <div className="instructor-details-header">
                <img src={dataWrangling} alt="data-wrangling" />
                <div className="instructor-course-name">
                    <p>DATA WRANGLING AND VISUALIZATION</p>
                    <div className="course-instructor">
                        <img src={edyodaInstructor} alt="edyoda-instructor" className="edyoda-instructor"/>
                        <p className="test-instructor">Test Instructor</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="course-plan">
            <div className="todays-plan">
                <p className="todays-plan-header">Today's Plan</p>
                <p className="todays-plan-time">21 Mar 2022</p>
            </div>
            <p className="data-transgorm-details">Data transformation using pandas-3</p>
            <div className="feedback-details">
                <p className="feedback-details-header">DAILY FEEDBACK</p>
                <p className="feedback-details-time">Opens at 7:30 PM</p>
            </div>
            <div className="live-session-details">
                <button className="live-session-btn">JOIN LIVE SESSION</button>
                <p className="live-session-time">Begins at 7:30 PM</p>
            </div>
        </div>
    </div>
  )
}

export default CourseDetails