import { createBrowserClient } from "@supabase/ssr";

// Client Component client, to access Supabase from Client Components,
// which runs in the browser
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
