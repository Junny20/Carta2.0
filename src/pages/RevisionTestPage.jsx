import { useState } from "react";
import "./css/FlashcardTestPage.css";
import revision from "../data/revision";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";
import correct from "../assets/correct.wav";
import wrong from "../assets/wrong.mp3";
import { useAuth } from "../authContext";
import Level from "../components/Level";
import getCorrectAnswers from "../utils/getCorrectAnswers";
import updateFlashcardsTested from "../utils/updateFlashcardsTested";

function RevisionTestPage() {
  const { user, setUser, loading } = useAuth();

  const revisionData = revision;
  const [list, setList] = useState(revisionData);
  const [isAnswered, setIsAnswered] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(true);

  const loggedin = !!user;

  const correctSound = new Audio(correct);
  correctSound.volume = 0.2;
  const wrongSound = new Audio(wrong);
  wrongSound.volume = 0.2;

  function handleShuffle() {
    setList(revisionData);
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

    if (loggedin) {
      setUser({
        ...user,
        flashcards_tested: user.flashcards_tested + 1
      })
      updateFlashcardsTested(user.id);
    }

    const yourAnswer = value.trim().toLowerCase();
    const correctAnswer = list[random].answer;
    const finalCorrectWordList = getCorrectAnswers(correctAnswer);

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

  function handleKeyDown(event) {
    if (event.key === "Enter") {
        handleSubmit();
    }
  }

  return (
    <div className="flashcardTestPage">
      {loggedin && <Level name={user.username} flashcardsRead={user.flashcards_read} flashcardsTested={user.flashcards_tested} />}
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
        <button id="done" onClick={handleShuffle} style={{ fontSize: "2rem" }}>
          It seems like you haven't added any words, or you have revised/skipped
          through all words! In the latter case, click to reshuffle!
        </button>
      )}

      {isAnswered ? (
        <div className="flexbox4">
          <button onClick={handleNext}>Next</button>
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
              <button onClick={handleNext}>Skip</button>
              <CustomiseButton />
            </div>
          </>
        )
      )}
      <Button buttonText="Go back" path="/flashcards" />
    </div>
  );
}

export default RevisionTestPage;
