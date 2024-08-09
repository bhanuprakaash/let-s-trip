import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import TravelTips from "./components/TravelTips";
import Profile from "./components/Profile";
import PlanTrip from "./components/PlanTrip";
import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/plan-trip" element={<PlanTrip/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/travel-tips" element={<TravelTips/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
    );
}

export default App;
