"use client";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <span className="text-sm text-muted-foreground">Signed in as {session.user.email}</span>
        <Button variant="secondary" className="ml-2" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <span className="text-sm text-muted-foreground">Not signed in</span>
      <Button variant="default" className="ml-2" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};
export default LoginButton;
