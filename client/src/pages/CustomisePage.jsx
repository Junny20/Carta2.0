import Button from "../components/GeneralButton";

function CustomisePage() {
    return (
        <div>
            <h1>Options:</h1>
            <Button buttonText='Verbs only' path='/flashcards'/>
            <Button buttonText='Nouns only' path='/flashcards'/>
            <Button buttonText='Adjectives only' path='/flashcards'/>
            <Button buttonText='Test mode' path='/flashcards/test'/>
        </div>
        
    )
}

export default CustomisePage;