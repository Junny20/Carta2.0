import { createContext, useContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.warn(authError.message);
      setUser(null);
      setLoading(false);
      return;
    }

    if (user) {
      const { data: userData, error: fetchError } = await supabase
        .from('users')
        .select('id, email, username, flashcards_read, flashcards_tested')
        .eq('id', user.id)
        .single();

      if (fetchError) {
        console.error('User fetch error:', fetchError.message);
      };

      setUser(userData);
    } else {
        setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    getUserData();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUserData();
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);