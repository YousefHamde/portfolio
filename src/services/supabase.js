import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://czzuxeaofvncljsplixd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6enV4ZWFvZnZuY2xqc3BsaXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MDkwNTIsImV4cCI6MjA3Njk4NTA1Mn0.LqvZOJyJqafXPrCNF5vZLJYgWHcLOjl92ZXI9HJaTy4";
 const supabase = createClient(supabaseUrl, supabaseKey);

 export default supabase