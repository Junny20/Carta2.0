import supabase from "../supabaseClient";

const getUserDetails = async (id) => {
    const { data: userData, error: fetchError } = await supabase
          .from("users")
          .select()
          .eq("id", id)
          .single();

        if (fetchError) {
          console.error(fetchError.message);
          return null;
        } else {
          return {username: userData.username, flashcardsRead: userData.flashcards_read, flashcardsTested: userData.flashcards_tested}
        }
}

export default getUserDetails;
