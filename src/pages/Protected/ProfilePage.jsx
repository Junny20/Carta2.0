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
        .eq("id", id);

      if (error) {
        console.error(error.message);
      } else {
        const userData = data[0];

        setProfile({
          username: userData.username,
          email: userData.email,
          level: userData.level,
          flashcards_read: userData.flashcards_read,
          flashcards_tested: userData.flashcards_tested,
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
    <>
      <h1>Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Username: {profile.username}</p>
      <p>Level: {profile.level}</p>
      <p>Flashcards Read: {profile.flashcards_read}</p>
      <p>Flashcards Tested: {profile.flashcards_tested}</p>
      <Button buttonText="Back to menu" path="/front"/>
      <SignoutButton />
    </>
  );
}

export default ProfilePage;
