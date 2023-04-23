import {FaHome} from "react-icons/fa";
import {GiBookshelf} from "react-icons/gi";
import {BsPersonLinesFill} from "react-icons/bs";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
        <ul className="sidebar-wrapper">
            <li className="sidebar-li-item">
                <FaHome size={30} /><span className="sidebar-li-content">HOME</span></li>
            <li className="sidebar-li-item">
                <GiBookshelf size={30} /><span className="sidebar-li-content">MODULES</span></li>
            <li className="sidebar-li-item">
                <BsPersonLinesFill size={30} /><span className="sidebar-li-content">INSTRUCTORS</span></li>
        </ul>
    </div>
  )
}

export default SideBar