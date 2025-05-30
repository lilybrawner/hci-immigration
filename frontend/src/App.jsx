import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import GreencardRes from './pages/GreencardRes';
import SpouseRes from './pages/SpouseRes';
import ParentARes from './pages/ParentARes';
import ParentCRes from './pages/ParentCRes';
import F1Res from './pages/F1Res';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greencard" element={<GreencardRes />} />
          <Route path="/spouse" element={<SpouseRes />} />
          <Route path="/parenta" element={<ParentARes />} />
          <Route path="/parentc" element={<ParentCRes />} />
          <Route path="/visa" element={<F1Res />} />
        </Routes>
      </Router>
  );
}

export default App;
