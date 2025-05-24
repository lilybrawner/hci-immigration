import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import GreencardRes from './pages/GreencardRes';
import SpouseRes from './pages/SpouseRes';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greencard" element={<GreencardRes />} />
          <Route path="/spouse" element={<SpouseRes />} />
        </Routes>
      </Router>
  );
}

export default App;
