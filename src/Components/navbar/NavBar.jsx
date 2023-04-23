import edyodaLogo from "../../assets/edyoda-logo.png";
import edyodaAvatar from "../../assets/edyoda-avatar.png";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
        <nav className="nav-wrapper">
            <div className="nav-logo">
                <img src={edyodaLogo} alt="edyoda-logo" className="edyoda-logo"/>
            </div>
            <ul className="nav-list">
                <div>Hi, Test Learner</div>
                <img src={edyodaAvatar} alt="learner-avatar"className="nav-avatar" />
            </ul>
        </nav>
    </div>
  )
}

export default NavBar