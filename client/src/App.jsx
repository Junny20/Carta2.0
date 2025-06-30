import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FlashcardPage from "./pages/FlashcardPage";
import SignupPage from "./pages/SignupPage";
import CustomisePage from "./pages/CustomisePage";
import FlashcardTestPage from "./pages/FlashcardTestPage";
import RevisionTestPage from "./pages/RevisionTestPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/flashcards", element: <FlashcardPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/customise", element: <CustomisePage /> },
    { path: "/flashcards/test", element: <FlashcardTestPage /> },
    { path: "/revision/test", element: <RevisionTestPage /> },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
