import { useState } from "react";
import { useLocation } from "react-router";
import "./css/FlashcardTestPage.css";
import revision from "../data/revision";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";
import correct from "../assets/correct.wav";
import wrong from "../assets/wrong.mp3";

function FlashcardTestPage(props) {
  const location = useLocation();
  const path = location.pathname;
  const goBack = path.slice(0, -5);
  const data = props.flashcards;

  const correctSound = new Audio(correct);
  correctSound.volume = 0.2;
  const wrongSound = new Audio(wrong);
  wrongSound.volume = 0.2;

  const [list, setList] = useState(data);
  const [isAnswered, setIsAnswered] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(true);

  function handleRandom() {
    setIsAnswered(false);
    setIsCorrect(false);
    setValue("");
    setRandom(Math.floor(Math.random() * list.length));
  }

  function handleShuffle() {
    setList(data);
    setTotal(0);
    setRight(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setRandom(Math.floor(Math.random() * data.length));
  }

  function handleNext() {
    setList((prevList) => {
      const newList = prevList.filter((element, index) => index !== random);
      setRandom(Math.floor(Math.random() * newList.length));
      setIsAnswered(false);
      setIsCorrect(false);
      return newList;
    });
  }

  function handleChange(event) {
    const answer = event.target.value;
    setValue(answer);
  }

  function handleSubmit() {
    setIsAnswered(true);
    setTotal((prevValue) => prevValue + 1);

    const yourAnswer = value.trim().toLowerCase();
    const correctAnswer = list[random].answer;
    const correctWordList = correctAnswer
      .split(",")
      .map((element) => element.trim().toLowerCase());

    const finalCorrectWordList = correctWordList.map((element) => {
      if (element.includes("(") && element.includes(")")) {
        const index = element.indexOf("(");
        return element.slice(0, index).trim();
      } else {
        return element;
      }
    });

    console.log(finalCorrectWordList);
    const isCorrectAnswer = finalCorrectWordList.some(
      (element) => element === yourAnswer
    );

    if (isCorrectAnswer) {
      setIsCorrect(true);
      setRight((prevValue) => prevValue + 1);
      correctSound.play();
    } else {
      setIsCorrect(false);
      wrongSound.play();
    }

    setValue("");
  }

  function handleRevision() {
    revision.push(list[random]);
    handleNext();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
        handleSubmit();
    }
  }

  return (
    <div className="flashcardTestPage">
      <h2 className={show ? "scoreRevealed": "scoreNotRevealed"}
        onClick={() => setShow((prevValue) => !prevValue)}
      >
        {show ? "Click to show score" : `Score: ${right}/${total}`}
      </h2>
      {list.length > 0 ? (
        <button
          id="flashcardTest"
          className={isAnswered ? (isCorrect ? "right" : "wrong") : undefined}
        >
          {isAnswered ? list[random].answer : list[random].word}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle}>
          All words revised. Reshuffle?
        </button>
      )}

      {isAnswered ? (
        <div className="flexbox4">
          <button onClick={handleNext}>Next</button>
          <button onClick={handleRevision}>Add to revision</button>
        </div>
      ) : (
        list.length > 0 && (
          <>
            <input
              id="answer"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              type="text"
              name="answer"
              placeholder="Answer..."
              value={value}
            />
            <div className="flexbox4">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleRandom}>Skip</button>
              <CustomiseButton />
            </div>
          </>
        )
      )}
      <Button buttonText="Go back" path={goBack} />
    </div>
  );
}

export default FlashcardTestPage;
