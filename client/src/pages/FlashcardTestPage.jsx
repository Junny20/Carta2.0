import { useState } from "react";
import "./css/FlashcardPage.css";
import revision from "../data/revision";
import BackButton from "../components/BackButton";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";


function FlashcardTestPage(props) {
  const data = props.flashcards;

  const [list, setList] = useState(data);
  const [isAnswered, setIsAnswered] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  function handleRandom() {
    setIsAnswered(false);
    setIsCorrect(false);
    setRandom(Math.floor(Math.random() * list.length));
  }

  function handleShuffle() {
    setList(data);
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
    const correctAnswer = list[random].answer;
    const yourAnswer = value;
    if (correctAnswer.toLowerCase() === yourAnswer.toLowerCase()) {
      setIsCorrect(true);
      console.log("Correct");
    } else {
      console.log("Incorrect: ", list[random].answer);
    }
    setValue("");
  }

  function handleRevision() {
    revision.push(list[random]);
    handleNext();
  }

  return (
    <div className="flexbox">
      {list.length > 0 ? (
        <button id="flashcard">
          {isAnswered
            ? isCorrect
              ? `Correct! \n${list[random].answer}`
              : `Incorrect: ${list[random].answer}`
            : list[random].word}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle}>
          All words revised. Reshuffle?
        </button>
      )}

      {isAnswered ? (
        <div className="flexbox2">
          <button onClick={handleNext}>Next</button>
          <button onClick={handleRevision}>Add to revision</button>
        </div>
      ) : (
        list.length > 0 && (
          <>
            <input
              id="answer"
              onChange={handleChange}
              type="text"
              name="answer"
              placeholder="Answer..."
              value={value}
            />
            <div className="flexbox2">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleRandom}>Skip</button>
              <CustomiseButton />
            </div>
          </>
        )
      )}
      <BackButton />
    </div>
  );
}

export default FlashcardTestPage;
