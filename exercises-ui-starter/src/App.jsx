import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {

  return (
    <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/add-exercise" element={ <AddExercisePage />}></Route>
            <Route path="/edit-exercise/:id" element={ <EditExercisePage />}></Route>
          </Routes>
        </Router>
        <footer>
          <p class="copyright">© Chris Chea 2025</p>
        </footer>
    </div>
  );
}

export default App;