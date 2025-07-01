import "./css/LandingPage.css"
import ContinueButton from "../components/ContinueButton"
import SignupButton from "../components/SignupButton"
import Footer from "../components/Footer"

function LandingPage() {
    return (
        <>
            <div className="landingPage">
                <h1>Carta</h1>
                <h2>Aeneid Vocab made easy.</h2>
                <div className="flexbox2">
                    <ContinueButton />
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default LandingPage