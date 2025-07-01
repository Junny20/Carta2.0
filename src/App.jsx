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
import EnglishToLatinPage from "./pages/EnglishToLatinPage";
import OptionsPage from "./pages/OptionsPage.jsx";
import LineOptionsPage from "./pages/LineOptionsPage.jsx";
import flashcards from "./data/words.js";
import nouns from "./data/nouns.js";
import verbs from "./data/verbs.js";
import adjectives from "./data/adjectives.js";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/flashcards", element: <FlashcardPage flashcards = {flashcards}/> },
    { path: "/flashcards/verbs", element: <FlashcardPage flashcards = {verbs}/> },
    { path: "/flashcards/nouns", element: <FlashcardPage flashcards = {nouns}/> },
    { path: "/flashcards/adjectives", element: <FlashcardPage flashcards = {adjectives}/> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/customise", element: <CustomisePage /> },
    { path: "/flashcards/test", element: <FlashcardTestPage flashcards = {flashcards}/> },
    { path: "/flashcards/nouns/test", element: <FlashcardTestPage flashcards = {nouns}/> },
    { path: "/flashcards/verbs/test", element: <FlashcardTestPage flashcards = {verbs}/> },
    { path: "/flashcards/adjectives/test", element: <FlashcardTestPage flashcards = {adjectives}/> },
    { path: "/revision/test", element: <RevisionTestPage /> },
    { path: "/english", element: <EnglishToLatinPage /> },
    { path: "/options", element: <OptionsPage /> },
    { path: "/lineoptions", element: <LineOptionsPage /> },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
