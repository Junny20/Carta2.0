import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://hylsfifdfzskofjvbmwx.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bHNmaWZkZnpza29manZibXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2Mjk3NzQsImV4cCI6MjA2NzIwNTc3NH0.EsXVsr2R72wtVheECSIyd4iF5_MK66Dbccra0Tl49Zw"

const client = createClient(supabaseURL, supabaseAnonKey);
    
export default client;