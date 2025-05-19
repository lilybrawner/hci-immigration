import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import GreencardRes from './pages/GreencardRes';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greencard" element={<GreencardRes />} />
        </Routes>
      </Router>
  );
}

export default App;
