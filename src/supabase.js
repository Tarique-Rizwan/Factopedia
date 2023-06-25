import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lrujbgpvihspaofpytjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxydWpiZ3B2aWhzcGFvZnB5dGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NDk3NDEsImV4cCI6MTk5OTUyNTc0MX0.PuSvYlw5KrcwUW6PayfNY9X1UAEr63ZV5tRxXHgU6lY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
