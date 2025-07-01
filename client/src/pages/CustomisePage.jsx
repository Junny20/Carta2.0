import Button from "../components/GeneralButton";
import "./css/CustomisePage.css";


function CustomisePage() {
    return (
        <>
            <div className="customisePage">
                <h1>Options:</h1>
                <div className="customisePageGrid">
                    <Button buttonText='Verbs' path='/flashcards/verbs'/>
                    <Button buttonText='Revise' path='/revision/test'/>
                    <Button buttonText='Nouns' path='/flashcards/nouns'/>
                    <Button buttonText='English to Latin' path='/english'/>
                    <Button buttonText='Adjectives' path='/flashcards/adjectives'/>
                    <Button buttonText='Customise by line number' path='/lineoptions'/>
                </div>
                <div id="back">   
                    <Button buttonText='Go back' path='/flashcards'/>
                </div>
            </div>
        </>
        
    )
}

export default CustomisePage;