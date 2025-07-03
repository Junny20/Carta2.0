import "./css/OptionsPage.css"
import Button from "../components/GeneralButton";
import { useLocation } from "react-router";

function LineOptionsPage() {
    const location = useLocation();
    const path = location.pathname;
    const customisePage = path.slice(0, 10) === "/customise";

    if (path === "/english/lineoptions") {
        return (
            <div className="optionsPageGrid">
                <Button buttonText="Nouns" path="/english/nouns"/>
                <Button buttonText="407-453" path="/english/options/407to453"/>
                <Button buttonText="Verbs" path="/english/verbs"/>
                <Button buttonText="454-519" path="/english/options/454to519"/>
                <Button buttonText="Adjectives" path="/english/adjectives"/>
                <Button buttonText="520-540" path="/english/options/520to540"/>
                <Button buttonText="All words" path="/english/flashcards"/>
                <Button buttonText="541-553" path="/english/options/541to553"/>
                <Button buttonText="554-584" path="/english/options/554to584"/>
                <Button buttonText="585-607" path="/english/options/585to607"/>
                <Button buttonText="608-670" path="/english/options/608to670"/>
                <Button buttonText="671-713" path="/english/options/671to713"/>
                <Button buttonText="714-731" path="/english/options/714to731"/>
                <Button buttonText="Go back" path="/customise"/>
            </div>
        )
    } else {
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
                <Button buttonText="Go back" path={customisePage ? "/customise": "/options"}/>
            </div>
        )
    }
}

export default LineOptionsPage;