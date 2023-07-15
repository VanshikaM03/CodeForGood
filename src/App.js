import Navbar from "./components/Navbar.js";
import "./App.css";
import Carousel from "./components/Carousel";
import UserActivities from "./components/UserActivities";
import EventCard from "./components/EventCard";
import Event1 from "./components/Event1";

import "./App.css";

import Footer from "./components/footer/Footer";

import Aboutus from "./components/contact/Aboutus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Carousel />;
        <UserActivities />;
        <EventCard />;{/* <Event1 />; */}
      </div>
      <Routes>
        <Route
          exact
          path="/contact"
          element={
            <div className="contact">
              <Aboutus />
            </div>
          }
        ></Route>
      </Routes>
      <div className="footer-container">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
