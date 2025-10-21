import { inngest, syncUserCreation, syncUserDelete, syncUserUpdation } from "@/config/inngest";
import { serve } from "inngest/next";

// Create an API that serves the listed functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDelete,
  ],
});
