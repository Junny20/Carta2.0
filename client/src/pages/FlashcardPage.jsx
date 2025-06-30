import BackButton from "../components/BackButton";
import CustomiseButton from "../components/CustomiseButton";
import { useState } from "react";
import "./css/FlashcardPage.css";

function FlashcardPage() {
    const data = [{word: "dominus", answer: "master"}, {word: "faber", answer: "craftsman"}];

    const [list, setList] = useState(data);

    const [showAnswer, setShowAnswer] = useState(false);

    const [random, setRandom] = useState(0);
    
    function handleRandom() {
        setRandom(Math.floor(Math.random() * data.length));
    }

    function handleAnswer() {
        setShowAnswer((prevValue) => {
            return (!prevValue)});
    }
 
    return (
        <div className="flexbox">
            <h1>Flashcards</h1>
            <button id="flashcard" onClick={handleAnswer}>{showAnswer ? data[random].answer : data[random].word}</button>
            <div className="flexbox2">
                <button onClick={handleRandom}>Next</button>
                <CustomiseButton />
            </div>
            <BackButton />
        </div>
    )
}

export default FlashcardPage;