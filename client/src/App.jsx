import { useState } from "react";
import Home from "./Home";

import Profile from "./Profile";

// import "../style/App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="overflow-y-auto">

        < >
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Hero />}></Route>

         

          <Route path="/Summarize" element={<Summarize />} />
        </Routes>

        <Footer2 />
     </>
    
       </div>
    </div>
  );
};

export default App;
