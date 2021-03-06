import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {


  return (
    <Router>
        <div>
    
          <Navbar />

          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            
          </Routes>

        </div>
      </Router>
  );
}

export default App;
