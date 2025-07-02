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
import words407to453 from "./data/words407to453/words407to453.js";
import words454to519 from "./data/words454to519/words454to519.js";
import words520to540 from "./data/words520to540/words520to540.js";
import words541to553 from "./data/words541to553/words541to553.js";
import words554to584 from "./data/words554to584/words554to584.js";
import words585to607 from "./data/words585to607/words585to607.js";
import words608to670 from "./data/words608to670/words608to670.js";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/flashcards", element: <FlashcardPage flashcards = {flashcards}/> },
    { path: "/flashcards/verbs", element: <FlashcardPage flashcards = {verbs}/> },
    { path: "/flashcards/nouns", element: <FlashcardPage flashcards = {nouns}/> },
    { path: "/flashcards/adjectives", element: <FlashcardPage flashcards = {adjectives}/> },
    { path: "/flashcards/407to453", element: <FlashcardPage flashcards = {words407to453}/> },
    { path: "/flashcards/454to519", element: <FlashcardPage flashcards = {words454to519}/> },
    { path: "/flashcards/520to540", element: <FlashcardPage flashcards = {words520to540}/> },
    { path: "/flashcards/541to553", element: <FlashcardPage flashcards = {words541to553}/> },
    { path: "/flashcards/554to584", element: <FlashcardPage flashcards = {words554to584}/> },
    { path: "/flashcards/585to607", element: <FlashcardPage flashcards = {words585to607}/> },
    { path: "/flashcards/608to670", element: <FlashcardPage flashcards = {words608to670}/> },
    //{ path: "/flashcards/729to731", element: <FlashcardPage flashcards = {words729to731}/> },
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
