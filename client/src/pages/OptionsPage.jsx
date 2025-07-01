import "./css/OptionsPage.css"
import Button from "../components/GeneralButton"

function OptionsPage() {

    return (
        <div className="flexbox">
            <Button buttonText='Learn' path='/flashcards'/>
            <Button buttonText='Test yourself' path='/flashcards/test'/>
        </div>
    )
}

export default OptionsPage;