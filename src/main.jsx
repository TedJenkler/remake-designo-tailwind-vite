import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Homepage from './pages/Homepage';
import Errorpage from './pages/Errorpage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Locations from './pages/Locations';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <React.StrictMode>
      <Router>
        <Nav toggle={toggle} setToggle={setToggle} />
        {toggle === true ? <MobileNav setToggle={setToggle} /> : null}
        <div className={toggle === true ? "brightness-50" : null}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="*" element={<Errorpage />} /> {/* Catch all route for handling 404 */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);