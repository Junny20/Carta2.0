import "../css/ProfilePage.css";
import { useState, useEffect } from "react";
import supabase from "../../supabaseClient";
import Button from "../../components/GeneralButton";
import SignoutButton from "../../components/SignoutButton";

function ProfilePage() {
  const [profile, setProfile] = useState({
    username: "Loading...",
    email: "Loading...",
    level: "Loading...",
    flashcards_read: "Loading...",
    flashcards_tested: "Loading...",
  });

  useEffect(() => {
    const fetchData = async (id) => {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", id)
        .single()

      if (error) {
        console.error(error.message);
      } else {
        const baseXp = 100;
        const totalXp = data.flashcards_read * 5 + data.flashcards_tested * 10;
        let userLevel = 0;

        const getXpNeeded = lvl => Math.floor(baseXp * Math.pow(lvl, 1.2));

        while (totalXp >= getXpNeeded(userLevel + 1)) {
          userLevel += 1;
        }

        setProfile({
          username: data.username,
          email: data.email,
          level: userLevel,
          flashcards_read: data.flashcards_read,
          flashcards_tested: data.flashcards_tested,
        });
      }
    };

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const id = data.user.id;

      if (id) {
        fetchData(id);
      }
    };

    getUser();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Username: {profile.username}</p>
      <p>Level: {profile.level}</p>
      <p>Flashcards Read: {profile.flashcards_read}</p>
      <p>Flashcards Tested: {profile.flashcards_tested}</p>
      <div className="profile-buttons">
        <Button buttonText="Menu" path="/"/>
        <Button buttonText="Options" path="/options"/>
        <SignoutButton />
      </div>
    </div>
  );
}

export default ProfilePage;
