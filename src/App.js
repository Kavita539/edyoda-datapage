import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Modules from './pages/modules/Modules';
import Instructor from './pages/instructor/Instructor';
import TopicSession from './Components/topicSession/TopicSession';
import QuizSession from './Components/quizSession/QuizSession';
import AssignmentSession from './Components/assignmentsession/AssignmentSession';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/modules' element={<Modules />}/>
        <Route path='/instructor' element={<Instructor />}/>
        <Route path='/modules/topic' element={<TopicSession />}/>
        <Route path='/modules/quiz' element={<QuizSession />}/>
        <Route path='/modules/assignment' element={<AssignmentSession />}/>
      </Routes>
    </div>
  );
}

export default App;
