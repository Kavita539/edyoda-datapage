import {FaHome} from "react-icons/fa";
import {GiBookshelf} from "react-icons/gi";
import {BsPersonLinesFill} from "react-icons/bs";
import "./sideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-wrapper">
        <li className="sidebar-li-item">
          <Link to="/">
          <FaHome size={30} /><span className="sidebar-li-content">HOME</span></Link>
        </li>
        <li className="sidebar-li-item">
          <Link to="/modules">
          <GiBookshelf size={30} /><span className="sidebar-li-content">MODULES</span></Link>
        </li>
        <li className="sidebar-li-item">
          <Link to="/instructor">
          <BsPersonLinesFill size={30} /><span className="sidebar-li-content">INSTRUCTORS</span></Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar