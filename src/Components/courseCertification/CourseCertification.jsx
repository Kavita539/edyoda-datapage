import dataanalysis from "../../assets/Data-Analysis.png";
import "./courseCertification.css";

const CourseCertification = () => {
  return (
    <div className="course-certification">
        <img src={dataanalysis} alt="data-analysis" />
        <div className="certification-duration">
            <div className="attempt">CERTIFICATION | Attempt 1</div>
            <p className="course">DATA ANALYSIS CERTIFICATION</p>
            <div className="completion">COMPLETED | 21 MAR 2022</div>
        </div>
        <div className="certification-structure">
            <p className="structure">Exam Structure</p>
            <p className="round-one">Round 1 <span className="mcq">MCQS</span><span className="coding">CODING</span></p>
            <p className="round-two">Round 2<span className="projects">PROJECTS</span></p>
        </div>
        <div className="certification-details">
            <button className="exam-details-btn">VIEW EXAM DETAILS</button>
        </div>
    </div>
  )
}

export default CourseCertification