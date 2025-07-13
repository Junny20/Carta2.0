import "../css/ProfilePage.css";
import Button from "../../components/GeneralButton";
import SignoutButton from "../../components/SignoutButton";
import { useAuth } from "../../authContext";

function ProfilePage() {
  const { user, loading } = useAuth();
  let level = 0;

  if (loading) {
    return (
      <p style={{ color: "#0c7569", fontWeight: 500, fontSize: "32px" }}>
        Loading...
      </p>
    );
  } else {
    const totalXp = user.flashcards_read * 5 + user.flashcards_tested * 10;
    const baseXp = 100;
    const getXpNeeded = (lvl) => Math.floor(baseXp * Math.pow(lvl, 1.2));
    while (totalXp >= getXpNeeded(level + 1)) {
      level += 1;
    }
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Level: {level}</p>
      <p>Flashcards Read: {user.flashcards_read}</p>
      <p>Flashcards Tested: {user.flashcards_tested}</p>
      <div className="profile-buttons">
        <Button buttonText="Menu" path="/" />
        <Button buttonText="Options" path="/options" />
        <SignoutButton />
      </div>
    </div>
  );
}

export default ProfilePage;
