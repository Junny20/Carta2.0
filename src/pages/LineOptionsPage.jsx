import "./css/OptionsPage.css"
import Button from "../components/GeneralButton";

function LineOptionsPage() {
    return (
        <div className="optionsPage">
            <Button buttonText="407-453" path="/flashcards/407to453"/>
            <Button buttonText="454-519" path="/flashcards/454to519"/>
            <Button buttonText="520-540" path="/flashcards/520to540"/>
            <Button buttonText="541-553" path="/flashcards/541to553"/>
            <Button buttonText="554-584" path="/flashcards/554to584"/>
            <Button buttonText="585-607" path="/flashcards/585to607"/>
            <Button buttonText="608-670" path="/flashcards/608to670"/>
            <Button buttonText="671-713" path="/flashcards/671to713"/>
            <Button buttonText="714-731" path="/flashcards/714to731"/>
            <Button buttonText="Go back" path="/options"/>
        </div>
    )
}

export default LineOptionsPage;