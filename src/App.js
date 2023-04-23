import './App.css';
import CourseAccordion from './Components/courseAccordion/CourseAccordion';
import NavBar from './Components/navbar/NavBar';
import SideBar from './Components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CourseAccordion />
      <SideBar/>
    </div>
  );
}

export default App;
