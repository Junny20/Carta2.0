import supabase from "../supabaseClient"

const updateFlashcardsRead = async (id) => {
    const { data: flashcardsReadData, error: fetchError } = await supabase
      .from("users")
      .select("flashcards_read")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error(fetchError.message);
      return;
    }

    const flashcardsRead = flashcardsReadData.flashcards_read;

    const { error: updateError } = await supabase
      .from("users")
      .update({ flashcards_read: flashcardsRead + 1 })
      .eq("id", id);

    if (updateError) {
      console.error(updateError.message);
      return;
    }
  };

export default updateFlashcardsRead;
