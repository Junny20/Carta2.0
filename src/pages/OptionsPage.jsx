import "./css/OptionsPage.css"
import BackButton from "../components/BackButton";
import Button from "../components/GeneralButton";

function OptionsPage() {
    return (
        <div className="optionsPage">
            <Button buttonText="Nouns" path="/flashcards/nouns"/>
            <Button buttonText="Verbs" path="/flashcards/verbs"/>
            <Button buttonText="Adjectives" path="/flashcards/adjectives"/>
            <Button buttonText="All words" path="/flashcards"/>
            <Button buttonText='Customise by line number' path='/lineoptions'/>
            <BackButton />
        </div>
    )
}

export default OptionsPage;