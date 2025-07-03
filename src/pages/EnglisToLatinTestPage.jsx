import { useState } from "react";
import { useLocation } from "react-router";
import "./css/FlashcardTestPage.css";
import revision from "../data/revision";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";


function EnglishToLatinTestPage(props) {
  const location = useLocation();
  const path = location.pathname;
  const goBack = path.slice(0,-5);
  const data = props.flashcards;

  const [list, setList] = useState(data);
  const [isAnswered, setIsAnswered] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  function handleRandom() {
    setIsAnswered(false);
    setIsCorrect(false);
    setValue("");
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
    const correctAnswer = list[random].word;
    const yourAnswer = value;
    if (correctAnswer.toLowerCase() === yourAnswer.toLowerCase()) {
      setIsCorrect(true);
    }
    setValue("");
  }

  function handleRevision() {
    revision.push(list[random]);
    handleNext();
  }

  return (
    <div className="flashcardTestPage">
      {list.length > 0 ? (
        <button id="flashcardTest">
          {isAnswered
            ? isCorrect
              ? `Correct! \n${list[random].word}`
              : `Incorrect: ${list[random].word}`
            : list[random].answer}
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
      <Button buttonText="Go back" path={goBack}/>
    </div>
  );
}

export default EnglishToLatinTestPage;