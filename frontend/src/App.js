import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Results from './pages/Results';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      </Router>
  );
}

export default App;
