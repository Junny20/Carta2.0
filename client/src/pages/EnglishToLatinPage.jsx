import { useState } from "react";
import "./css/FlashcardPage.css";
import flashcards from "../data/words";
import BackButton from "../components/BackButton";
import CustomiseButton from "../components/CustomiseButton";

function EnglishToLatinPage() {
  const data = flashcards;
  const [list, setList] = useState(data);
  const [showAnswer, setShowAnswer] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  function handleAnswer() {
    setShowAnswer((prevAnswer) => !prevAnswer);
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
        if (setShowAnswer) setShowAnswer(false);
        return newList;
    })
  }

  return (
    <div className="flexbox">
      {list.length > 0 ? (
        <button id="flashcard" onClick={handleAnswer}>
          {showAnswer ? list[random].word : list[random].answer}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle}>
          All words revised. Reshuffle?
        </button>
      )}  

      <div className="flexbox2">
        <button
          onClick={handleNext}
        >
          Next
        </button>
        <CustomiseButton />
      </div>
      <BackButton />
    </div>
  );
}

export default EnglishToLatinPage;
