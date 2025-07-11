import { createContext, useState, useEffect } from "react";
import supabase from "./supabaseClient";

const userContext = createContext(null);

export default userContext;