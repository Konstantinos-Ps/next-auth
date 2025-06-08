"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleEmailSignIn(e) {
    e.preventDefault();
    setLoading(true);
    await signIn("email", { email, callbackUrl: "/dashboard" });
    setLoading(false);
  }

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 border rounded shadow">
      <form onSubmit={handleEmailSignIn} className="flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Sending magic link..." : "Sign in with Email"}
        </Button>
      </form>
      <div className="mt-6 flex flex-col gap-2">
        <Button
          variant="outline"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          Sign in with GitHub
        </Button>
        <Button
          variant="outline"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
