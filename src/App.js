import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Modules from './pages/modules/Modules';
import Instructor from './pages/instructor/Instructor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/modules' element={<Modules />}/>
        <Route path='/instructor' element={<Instructor />}/>
      </Routes>
    </div>
  );
}

export default App;
