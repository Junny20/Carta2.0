import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import FlashcardPage from "./pages/FlashcardPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LoggedInPage from "./pages/Protected/LoggedInPage.jsx";
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
import englishOptionsPaths from "./paths/englishOptionsPaths.js";
import EnglishToLatinTestPage from "./pages/EnglisToLatinTestPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProfilePage from "./pages/Protected/ProfilePage.jsx";
import UpdatePasswordPage from "./pages/UpdatePasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import UserFlashCardPage from "./pages/Protected/UserFlashcardPage.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/flashcards", element: <FlashcardPage flashcards={flashcards} /> },
    {
      path: "/english/flashcards",
      element: <EnglishToLatinPage flashcards={flashcards} />,
    },
    {
      path: "/english/flashcards/test",
      element: <EnglishToLatinTestPage flashcards={flashcards} />,
    },
    {
      path: "/flashcards/verbs",
      element: <FlashcardPage flashcards={verbs} />,
    },
    {
      path: "/english/verbs",
      element: <EnglishToLatinPage flashcards={verbs} />,
    },
    {
      path: "/english/verbs/test",
      element: <EnglishToLatinTestPage flashcards={verbs} />,
    },
    {
      path: "/flashcards/nouns",
      element: <FlashcardPage flashcards={nouns} />,
    },
    {
      path: "/english/nouns",
      element: <EnglishToLatinPage flashcards={nouns} />,
    },
    {
      path: "/english/nouns/test",
      element: <EnglishToLatinTestPage flashcards={nouns} />,
    },
    {
      path: "/flashcards/adjectives",
      element: <FlashcardPage flashcards={adjectives} />,
    },
    {
      path: "/english/adjectives",
      element: <EnglishToLatinPage flashcards={adjectives} />,
    },
    {
      path: "/english/adjectives/test",
      element: <EnglishToLatinTestPage flashcards={adjectives} />,
    },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/update-password", element: <UpdatePasswordPage /> },
    { path: "/reset-password", element: <ResetPasswordPage /> },
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
    { path: "/options", element: <OptionsPage /> },
    { path: "/english/lineoptions", element: <LineOptionsPage /> },
    { path: "/customise/lineoptions", element: <LineOptionsPage /> },
    { path: "/lineoptions", element: <LineOptionsPage /> },

    ...flashcardPaths.map(({ path, data }) => ({
      path: "/english" + path,
      element: <EnglishToLatinPage flashcards={data} />,
    })),

    ...flashcardPaths.map(({ path, data }) => ({
      path: path,
      element: <FlashcardPage flashcards={data} />,
    })),

    ...flashcardPaths.map(({ path, data }) => ({
      path: path + "/test",
      element: <FlashcardTestPage flashcards={data} />,
    })),

    ...flashcardPaths.map(({ path, data }) => ({
      path: "/english" + path + "/test",
      element: <EnglishToLatinTestPage flashcards={data} />,
    })),

    ...flashcardNounPaths.map(({ path, data }) => ({
      path: "/english" + path,
      element: <EnglishToLatinPage flashcards={data} />,
    })),

    ...flashcardNounPaths.map(({ path, data }) => ({
      path: "/english" + path + "/test",
      element: <EnglishToLatinTestPage flashcards={data} />,
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
      path: "/english" + path,
      element: <EnglishToLatinPage flashcards={data} />,
    })),

    ...flashcardVerbPaths.map(({ path, data }) => ({
      path: "/english" + path + "/test",
      element: <EnglishToLatinTestPage flashcards={data} />,
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
      path: "/english" + path,
      element: <EnglishToLatinPage flashcards={data} />,
    })),

    ...flashcardAdjectivePaths.map(({ path, data }) => ({
      path: "/english" + path + "/test",
      element: <EnglishToLatinTestPage flashcards={data} />,
    })),

    ...flashcardAdjectivePaths.map(({ path, data }) => ({
      path: path,
      element: <FlashcardPage flashcards={data} />,
    })),

    ...flashcardAdjectivePaths.map(({ path, data }) => ({
      path: path + "/test",
      element: <FlashcardTestPage flashcards={data} />,
    })),

    ...optionsPaths.map(({ path }) => ({
      path: path,
      element: <LineNumberOptionsPage />,
    })),

    ...englishOptionsPaths.map(({ path }) => ({
      path: path,
      element: <LineNumberOptionsPage />,
    })),

    {
      element: <ProtectedRoutes />,
      children: [
        { path: "/front", element: <LoggedInPage /> },
        { path: "/profile", element: <ProfilePage /> },
        {
          path: "/user/flashcards",
          element: <UserFlashCardPage flashcards={flashcards} />,
        },
      ],
    },

    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
