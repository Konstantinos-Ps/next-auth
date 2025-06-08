import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

/**
 * Wrapper for getServerSession to use in server components, API routes, or middleware.
 * Usage: const session = await getAuthSession();
 */
export function getAuthSession(req, res) {
  // For API routes: pass req, res. For server components: call without arguments.
  return getServerSession(req, res, authOptions);
}