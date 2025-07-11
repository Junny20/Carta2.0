import { useState } from "react";
import { useLocation } from "react-router";
import "./css/FlashcardPage.css";
import BackButton from "../components/BackButton";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";
import Verify from "../utils/verify";

function FlashcardPage(props) {
  const location = useLocation();
  const path = location.pathname;
  const data = props.flashcards;

  const [list, setList] = useState(data);
  const [showAnswer, setShowAnswer] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [isActive, setIsActive] = useState(false);

  function handleAnswer() {
    setShowAnswer(prevAnswer => !prevAnswer);
    setIsActive(prevValue => !prevValue);
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
        return newList;
    })
  }

  return (
    <div className="flexbox">
      <Verify />
      <p className="hint fade">Click on card to reveal translation</p>
      {list.length > 0 ? (
        <button id="flashcard" className={isActive ? "active" : undefined} onClick={handleAnswer}>
          {showAnswer ? list[random].answer : list[random].word}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle}>
          All words revised. Reshuffle?
        </button>
      )}  

      <div className="flexbox3">
        <button
          onClick={handleNext}
        >
          Next
        </button>
        <Button buttonText="Test yourself" path = {`${path}/test`} />
        <CustomiseButton />
      </div>
      <BackButton />
    </div>
  );
}

export default FlashcardPage;
