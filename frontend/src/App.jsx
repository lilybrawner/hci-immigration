import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import GreencardRes from './pages/GreencardRes';
import SpouseRes from './pages/SpouseRes';
import ParentARes from './pages/ParentARes';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greencard" element={<GreencardRes />} />
          <Route path="/spouse" element={<SpouseRes />} />
          <Route path="/parenta" element={<ParentARes />} />
        </Routes>
      </Router>
  );
}

export default App;
