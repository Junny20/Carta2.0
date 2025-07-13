import { useState } from "react";
import { useLocation } from "react-router";
import "./css/FlashcardPage.css";
import Button from "../components/GeneralButton";
import CustomiseButton from "../components/CustomiseButton";
import Level from "../components/Level";
import { useAuth } from "../authContext";
import updateFlashcardsRead from "../utils/updateFlashcardsRead";

function EnglishToLatinPage(props) {
  const { user, setUser, loading } = useAuth();

  const data = props.flashcards;
  const location = useLocation();
  const path = location.pathname;

  const [list, setList] = useState(data);
  const [showAnswer, setShowAnswer] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [isActive, setIsActive] = useState(false);
  const [isRead, setIsRead] = useState(false);

  const loggedin = !!user;

  function handleAnswer() {
    setShowAnswer((prevAnswer) => !prevAnswer);
    setIsActive(prevValue => !prevValue);
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

        if (setShowAnswer) setShowAnswer(false);
        if (isActive) setIsActive(false);

        if (loggedin && isRead) {
          setUser({
            ...user,
            flashcards_read: user.flashcards_read + 1
          })
          updateFlashcardsRead(user.id);
          setIsRead(false);
        }

        return newList;
    })
  }

  return (
    <div className="flexbox">
      {loggedin && <Level name={user.username} flashcardsRead={user.flashcards_read} flashcardsTested={user.flashcards_tested}/>}
      {list.length > 0 ? (
        <button id="flashcard" className={isActive ? "active" : undefined} onClick={handleAnswer}>
          {showAnswer ? list[random].word : list[random].answer}
        </button>
      ) : (
        <button id="done" onClick={handleShuffle}>
          All words revised! Reshuffle?
        </button>
      )}  
  
      <div className="flexbox4">
        <button
          onClick={handleNext}
        >
          Next
        </button>
        <Button buttonText="Test yourself" path = {`${path}/test`} />
        <CustomiseButton />
      </div>
      <Button buttonText="Go back" path="/english/lineoptions"/>
    </div>
  );
}

export default EnglishToLatinPage;
