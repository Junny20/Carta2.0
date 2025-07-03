import { useLocation } from "react-router";
import "./css/OptionsPage.css"
import Button from "../components/GeneralButton";

function LineNumberOptionsPage() {
    const location = useLocation();
    const path = location.pathname;
    const lines = path.slice(-8);

    if (path.slice(0, 8) === "/english") {
        return (
            <div className="optionsPage">
                <Button buttonText="Nouns" path={`/english/flashcards/${lines}/nouns`}/>
                <Button buttonText="Verbs" path={`/english/flashcards/${lines}/verbs`}/>
                <Button buttonText="Adjectives" path={`/english/flashcards/${lines}/adjectives`}/>
                <Button buttonText="All words" path={`/english/flashcards/${lines}`}/>
            </div>
        )
    } else {
        return (
            <div className="optionsPage">
                <Button buttonText="Nouns" path={`/flashcards/${lines}/nouns`}/>
                <Button buttonText="Verbs" path={`/flashcards/${lines}/verbs`}/>
                <Button buttonText="Adjectives" path={`/flashcards/${lines}/adjectives`}/>
                <Button buttonText="All words" path={`/flashcards/${lines}`}/>
            </div>
        )
    }
}

export default LineNumberOptionsPage;