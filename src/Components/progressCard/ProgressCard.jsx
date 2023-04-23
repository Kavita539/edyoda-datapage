import "./progressCard.css";

const ProgressCard = () => {
  return (
    <div className="progress-card">
        <h4>Progress Overview</h4>
        <div className="grade">
            <p>0%</p>
            <p className="progress-overview">Overall Grade</p>
        </div>
        <div className="attendance">
            <p>0%</p>
            <p className="progress-overview">attendance</p>
        </div>
        <p>VIEW DETAILED PROGRESS</p>
    </div>
  )
}

export default ProgressCard