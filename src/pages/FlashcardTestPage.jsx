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
  const goBack = path.slice(0,-5);
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
    const yourAnswer = value.trim().toLowerCase();
    const correctAnswer = list[random].answer;
    const correctWordList = correctAnswer.split(",").map(element => element.trim().toLowerCase());
    
    const finalCorrectWordList = correctWordList.map(element => {
      if (element.includes("(") && element.includes(")")) {
        const index = element.indexOf("(");
        return element.slice(0, index).trim();
      } else {
        return (element)
      }
    })

    console.log(finalCorrectWordList);
    const isCorrectAnswer = finalCorrectWordList.some(element => element === yourAnswer);
    
    if (isCorrectAnswer) {
      setIsCorrect(true);
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

  return (
    <div className="flashcardTestPage">
      {list.length > 0 ? (
        <button id="flashcardTest">
          {isAnswered
            ? isCorrect
              ? list[random].answer
              : list[random].answer
            : list[random].word}
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

export default FlashcardTestPage;
