import { useState } from "react";
import "./css/FlashcardTestPage.css";
import revision from "../data/revision";
import CustomiseButton from "../components/CustomiseButton";
import Button from "../components/GeneralButton";


function RevisionTestPage() {
  const revisionData = revision;

  const [list, setList] = useState(revisionData);
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

  return (
    <div className="flexbox">
      {list.length > 0 ? (
        <button id="flashcardTest">
          {isAnswered
            ? isCorrect
              ? `Correct! \n${list[random].answer}`
              : `Incorrect: ${list[random].answer}`
            : list[random].word}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle} style={{fontSize: "2rem"}}>
          It seems like you haven't added any words, or you have revised all words!
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
      <Button buttonText='Go back' path='/flashcards'/>
    </div>
  );
}

export default RevisionTestPage;