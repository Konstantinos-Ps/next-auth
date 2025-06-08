"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import LoginButton from "@/components/LoginButton";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="w-full px-6 py-4 border-b bg-background flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:underline-offset-4"
        >
          NextAuth Starter
        </Link>
        <nav className="hidden sm:flex gap-3 ml-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4"
          >
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || session.user.email}
                    className="w-8 h-8 rounded-full border"
                  />
                )}
                <span className="hidden sm:inline">
                  {session.user.name || session.user.email}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LoginButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
};

export default Header;
