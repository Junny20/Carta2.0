import BackButton from "../components/BackButton";
import Button from "../components/GeneralButton";


function CustomisePage() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Options:</h1>
            <Button buttonText='Verbs only' path='/flashcards/verbs'/>
            <Button buttonText='Nouns only' path='/flashcards/nouns'/>
            <Button buttonText='Adjectives only' path='/flashcards/adjectives'/>
            <Button buttonText='Revise mode' path='/revision/test'/>
            <Button buttonText='English to Latin' path='/english'/>
            <BackButton />
        </div>
        
    )
}

export default CustomisePage;