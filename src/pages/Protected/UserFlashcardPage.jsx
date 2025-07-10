import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "../css/FlashcardPage.css";
import CustomiseButton from "../../components/CustomiseButton";
import Button from "../../components/GeneralButton";
import supabase from "../../supabaseClient";

function FlashcardPage(props) {
  const location = useLocation();
  const path = location.pathname;
  const data = props.flashcards;

  const [list, setList] = useState(data);
  const [showAnswer, setShowAnswer] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * list.length));
  const [isActive, setIsActive] = useState(false);
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const {data, error} = await supabase.auth.getUser();
      console.log(data);


      if (error) {
        console.error(error.message);
        return;
      } else {
        const id = data.user.id;
        console.log(id);
        const {data, error} = await supabase.from("users").select().eq("id", id);

        if (error) {
          console.error(error.message)
        } else {
          const username = data[0].username;
          const level = data[0].level;
          console.log(username, level);
          setDetails(`${username}: Level ${level}`);
        }
      }
    }

    getUser();
  }, [])

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
    <>
      <p>{details}</p>
      <div className="flexbox">
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
        <Button buttonText = "Go back" path = "/front" />
      </div>
    </>
  );
}

export default FlashcardPage;
