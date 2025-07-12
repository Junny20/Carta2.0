import "./css/LandingPage.css";
import ContinueButton from "../components/ContinueButton";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import getUser from "../utils/getUser";
import SignoutButton from "../components/SignoutButton";
import Button from "../components/GeneralButton";

function LandingPage() {
  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setLoggedIn(true);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <div className="landingPage">
        <h1>Carta</h1>
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
