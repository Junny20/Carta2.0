import "../css/LandingPage.css";
import ContinueButton from "../../components/ContinueButton";
import SignoutButton from "../../components/SignoutButton";
import Footer from "../../components/Footer";
import Button from "../../components/GeneralButton";

function LandingPage() {
    return (
        <>
            <div className="landingPage">
                <h1>Carta</h1>
                <h2>Aeneid Vocab made easy.</h2>
                <div className="flexbox2">
                    <Button buttonText="Continue" path="/user/flashcards"/>
                    <Button buttonText="Profile" path="/profile"/>
                    <SignoutButton />
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default LandingPage