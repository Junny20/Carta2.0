import supabase from "../supabaseClient";

const getUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.warn(error.message);
      return null;
    }

    if (data?.user) {
      return data.user;
    } else {
      console.warn("No user found in data:", data);
      return null;
    }
  } catch (err) {
    console.error("Unexpected error fetching user:", err);
    return null;
  }
};

export default getUser;