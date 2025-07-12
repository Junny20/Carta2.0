import supabase from "../supabaseClient";

const updateFlashcardsTested = async (id) => {
    const {data: flashcardsTestedData, error: fetchError} = await supabase.from("users").select("flashcards_tested").eq("id", id).single();
    
    if (fetchError) {
      console.error(fetchError.message);
      return;
    }

    const flashcardsTested = flashcardsTestedData.flashcards_tested;

    const { error: updateError } = await supabase.from("users").update({flashcards_tested: flashcardsTested + 1}).eq("id", id);

    if (updateError) {
      console.error(updateError.message);
      return;
    }
  }

export default updateFlashcardsTested;