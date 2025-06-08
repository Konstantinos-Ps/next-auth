import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

// You can remove or comment out providers you don't want to use.
// Add your environment variables in .env.local for clientId/clientSecret.

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER || "",
      from: process.env.EMAIL_FROM || "",
    }),
    // Add more providers here as needed
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      // You can add custom session properties here
      // session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // You can persist custom claims here
      return token;
    },
  },
  pages: {
    signIn: "/login",
    // error: "/auth/error", // Uncomment if you want a custom error page
  },
  // debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
