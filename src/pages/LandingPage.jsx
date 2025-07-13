import "./css/LandingPage.css";
import ContinueButton from "../components/ContinueButton";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";
import Footer from "../components/Footer";
import SignoutButton from "../components/SignoutButton";
import Button from "../components/GeneralButton";
import { useAuth } from "../authContext";

function LandingPage() {
  const { user, loading } = useAuth();

  const loggedin = !!user;

  if (loading) {return <p>Loading...</p>}

  return (
    <>
      <div className="landingPage">
        <h1 id="title">Carta</h1>
        <h2>Aeneid Vocab made easy.</h2>
        <div className="flexbox2">
          {loggedin ? (
            <>
              <Button buttonText="Continue" path="/options" />
              <Button buttonText="Profile" path="/profile" />
              <SignoutButton />
            </>
          ) : (
            <>
              <ContinueButton />
              <SignupButton />
              <LoginButton />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
