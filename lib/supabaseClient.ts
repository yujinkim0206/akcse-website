import { createClient } from "@supabase/supabase-js";
import config from "@/app/config";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};

export const supabase = createClient(supabaseUrl, supabaseKey, options);
