import Button from "../components/GeneralButton";
import "./css/CustomisePage.css";


function CustomisePage() {
    return (
        <>
            <div className="customisePage">
                <h1>Options:</h1>
                <Button buttonText='Verbs only' path='/flashcards/verbs'/>
                <Button buttonText='Nouns only' path='/flashcards/nouns'/>
                <Button buttonText='Adjectives only' path='/flashcards/adjectives'/>
                <Button buttonText='Revise' path='/revision/test'/>
                <Button buttonText='English to Latin' path='/english'/>
                <Button buttonText='Customise by line number' path='/options'/>
                <Button buttonText='Go back' path='/flashcards'/>
            </div>
            
        </>
        
    )
}

export default CustomisePage;