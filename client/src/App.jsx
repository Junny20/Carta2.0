import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FlashcardPage from "./pages/FlashcardPage";
import SignupPage from "./pages/SignupPage";
import CustomisePage from "./pages/CustomisePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/customise" element={<CustomisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
