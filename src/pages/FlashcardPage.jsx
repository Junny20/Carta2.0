import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./css/FlashcardPage.css";
import BackButton from "../components/BackButton";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";
import Verify from "../utils/verify";
import supabase from "../supabaseClient";

function FlashcardPage(props) {
  const location = useLocation();
  const path = location.pathname;
  const data = props.flashcards;

  const [list, setList] = useState(data);
  const [showAnswer, setShowAnswer] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [isActive, setIsActive] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [loggedin, setLoggedIn] = useState(false);
  const [id, setId] = useState(null);

  const updateFlashcardsRead = async () => {
    const { data: flashcardsReadData, error: fetchError } = await supabase
      .from("users")
      .select("flashcards_read")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error(fetchError.message);
      return;
    }

    const flashcardsRead = flashcardsReadData.flashcards_read;

    const { error: updateError } = await supabase
      .from("users")
      .update({ flashcards_read: flashcardsRead + 1 })
      .eq("id", id);

    if (updateError) {
      console.error(updateError.message);
      return;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error.message);
        return;
      } else if (data) {
        setLoggedIn(true);
        setId(data.user?.id);
      }
    };

    getUser();
  }, []);

  function handleAnswer() {
    setShowAnswer((prevAnswer) => !prevAnswer);
    setIsActive((prevValue) => !prevValue);
    setIsRead(true);
  }
  function handleShuffle() {
    setList(data);
    setShowAnswer(false);
    setRandom(Math.floor(Math.random() * data.length));
  }
  function handleNext() {
    setList((prevList) => {
      const newList = prevList.filter((element, index) => index !== random);
      setRandom(Math.floor(Math.random() * newList.length));

      if (showAnswer) setShowAnswer(false);
      if (isActive) setIsActive(false);

      if (loggedin && isRead) {
        updateFlashcardsRead();
        setIsRead(false);
      }

      return newList;
    });
  }

  return (
    <div className="flexbox">
      <Verify />
      <p className="hint fade">Click on card to reveal translation</p>
      {list.length > 0 ? (
        <button
          id="flashcard"
          className={isActive ? "active" : undefined}
          onClick={handleAnswer}
        >
          {showAnswer ? list[random].answer : list[random].word}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle}>
          All words revised. Reshuffle?
        </button>
      )}

      <div className="flexbox3">
        <button onClick={handleNext}>Next</button>
        <Button buttonText="Test yourself" path={`${path}/test`} />
        <CustomiseButton />
      </div>
      <BackButton />
    </div>
  );
}

export default FlashcardPage;
