"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  //loading to see if authenticated
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <span>Loading...</span>
      </div>
    );
  }

  if (!session) {
    // This should not happen due to middleware, but just in case, to be safe
    return (
      <div className="flex flex-col items-center mt-16">
        <h2 className="text-xl font-semibold mb-4">Not authenticated</h2>
        <Button asChild>
          <a href="/login">Go to Login</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 border rounded shadow bg-background">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">
        <p className="mb-1">
          <span className="font-semibold">Signed in as:</span>
        </p>
        <ul className="ml-4">
          <li>
            <span className="font-mono">{session.user?.email}</span>
          </li>
          {session.user?.name && (
            <li>
              <span className="font-mono">{session.user.name}</span>
            </li>
          )}
        </ul>
      </div>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="User avatar"
          className="rounded-full w-20 h-20 mb-4 border"
        />
      )}
      <Button asChild variant="secondary">
        <a href="/">Go to Home</a>
      </Button>
    </div>
  );
}
