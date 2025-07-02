import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import FlashcardPage from "./pages/FlashcardPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CustomisePage from "./pages/CustomisePage.jsx";
import FlashcardTestPage from "./pages/FlashcardTestPage.jsx";
import RevisionTestPage from "./pages/RevisionTestPage.jsx";
import EnglishToLatinPage from "./pages/EnglishToLatinPage.jsx";
import OptionsPage from "./pages/OptionsPage.jsx";
import LineOptionsPage from "./pages/LineOptionsPage.jsx";
import flashcards from "./data/words.js";
import nouns from "./data/nouns.js";
import verbs from "./data/verbs.js";
import adjectives from "./data/adjectives.js";
import LineNumberOptionsPage from "./pages/LineNumberOptionsPage.jsx";
import flashcardPaths from "./paths/flashcardPaths.js";
import flashcardNounPaths from "./paths/flashcardNounPaths.js";
import flashcardVerbPaths from "./paths/flashcardVerbPaths.js";
import flashcardAdjectivePaths from "./paths/flashcardAdjectivePaths.js";
import optionsPaths from "./paths/optionsPaths.js";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/flashcards", element: <FlashcardPage flashcards={flashcards} /> },
    {
      path: "/flashcards/verbs",
      element: <FlashcardPage flashcards={verbs} />,
    },
    {
      path: "/flashcards/nouns",
      element: <FlashcardPage flashcards={nouns} />,
    },
    {
      path: "/flashcards/adjectives",
      element: <FlashcardPage flashcards={adjectives} />,
    },
    { path: "/signup", element: <SignupPage /> },
    { path: "/customise", element: <CustomisePage /> },
    {
      path: "/flashcards/test",
      element: <FlashcardTestPage flashcards={flashcards} />,
    },
    {
      path: "/flashcards/nouns/test",
      element: <FlashcardTestPage flashcards={nouns} />,
    },
    {
      path: "/flashcards/verbs/test",
      element: <FlashcardTestPage flashcards={verbs} />,
    },
    {
      path: "/flashcards/adjectives/test",
      element: <FlashcardTestPage flashcards={adjectives} />,
    },
    { path: "/revision/test", element: <RevisionTestPage /> },
    { path: "/english", element: <EnglishToLatinPage /> },
    { path: "/options", element: <OptionsPage /> },
    { path: "/lineoptions", element: <LineOptionsPage /> },

    ...flashcardPaths.map(({ path, data }) => ({
      path: path,
      element: <FlashcardPage flashcards={data} />,
    })),

    ...flashcardPaths.map(({ path, data }) => ({
      path: path + "/test",
      element: <FlashcardTestPage flashcards={data} />,
    })),

    ...flashcardNounPaths.map(({ path, data }) => ({
      path: path,
      element: <FlashcardPage flashcards={data} />,
    })),

    ...flashcardNounPaths.map(({ path, data }) => ({
      path: path + "/test",
      element: <FlashcardTestPage flashcards={data} />,
    })),

    ...flashcardVerbPaths.map(({ path, data }) => ({
      path: path,
      element: <FlashcardPage flashcards={data} />,
    })),

    ...flashcardVerbPaths.map(({ path, data }) => ({
      path: path + "/test",
      element: <FlashcardTestPage flashcards={data} />,
    })),

    ...flashcardAdjectivePaths.map(({ path, data }) => ({
      path: path,
      element: <FlashcardPage flashcards={data} />,
    })),

    ...flashcardAdjectivePaths.map(({ path, data }) => ({
      path: path + "/test",
      element: <FlashcardTestPage flashcards={data} />,
    })),

    ...optionsPaths.map(({path}) => ({path: path, element: <LineNumberOptionsPage /> })),
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
