"use client";

import { SessionProvider } from "next-auth/react";
//importand to wrap the layout.js
export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
