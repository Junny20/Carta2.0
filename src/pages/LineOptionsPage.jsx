import "./css/OptionsPage.css"
import Button from "../components/GeneralButton";

function LineOptionsPage() {
    return (
        <div className="optionsPage">
            <Button buttonText="407-453" path="/options/407to453"/>
            <Button buttonText="454-519" path="/options/454to519"/>
            <Button buttonText="520-540" path="/options/520to540"/>
            <Button buttonText="541-553" path="/options/541to553"/>
            <Button buttonText="554-584" path="/options/554to584"/>
            <Button buttonText="585-607" path="/options/585to607"/>
            <Button buttonText="608-670" path="/options/608to670"/>
            <Button buttonText="671-713" path="/options/671to713"/>
            <Button buttonText="714-731" path="/options/714to731"/>
            <Button buttonText="Go back" path="/options"/>
        </div>
    )
}

export default LineOptionsPage;