
# NextAuth Starter Template

A modern Next.js starter template featuring authentication with NextAuth.js, protected routes, and a beautiful UI powered by ShadCN components.

## Overview

This template provides a solid foundation for building Next.js applications with integrated authentication. It leverages NextAuth.js for flexible authentication strategies and incorporates ShadCN UI components for a clean and responsive user interface.

## Getting Started

1.  **Clone the repository:**

    ```bash
    /dev/null/command.sh
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**

    ```bash
    /dev/null/command.sh
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env.local` file in the root of the project and add the following, replacing the example values with your own:

    ```local next-auth/.env.local
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    EMAIL_SERVER=your_email_server
    EMAIL_FROM=your_email_from_address

    NEXTAUTH_URL=http://localhost:3000 # Your application's URL
    NEXTAUTH_SECRET=your_nextauth_secret # Generate a strong secret
    ```

    *   You can generate a strong secret for `NEXTAUTH_SECRET` using a tool like `openssl rand -base64 32` in your terminal.
    *   The `NEXTAUTH_URL` should be the URL where your application is hosted (e.g., `http://localhost:3000` for local development).
    *   Obtain API keys for GitHub and Google from their respective developer consoles and add them to the file if you plan to use those providers.
    *   Configure the `EMAIL_SERVER` and `EMAIL_FROM` details if you intend to use the passwordless (magic link) sign-in method.

4.  **Run the development server:**

    ```bash
    /dev/null/command.sh
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

*   **Multiple Authentication Providers:** Pre-configured for Sign in with GitHub, Google, and Email (magic link). Easily extendable to support more providers.
*   **Protected Routes:** Implements Next.js Middleware to protect routes, ensuring only authenticated users can access specific pages (e.g., `/dashboard`).
*   **Session Management:** Handles user session creation and management.
*   **Clean UI:** Utilizes ShadCN UI components for a modern and consistent look and feel.
*   **Responsive Header:** Includes a header component that displays the user's authentication status and provides a dropdown menu when signed in.

## Project Structure

The project follows a standard Next.js application structure with key authentication-related files organized as follows:

```next-auth/architecture
/app
 ├── layout.jsx                 // Root layout: wraps app with <SessionProvider>
/app/api
 └── auth
     └── [...nextauth]
         └── route.js           // NextAuth API handler for OAuth + Email providers
/app/page.jsx                   // Public landing/home page
/app/login/page.jsx             // Login page, can use LoginButton.jsx component
/app/dashboard/page.jsx         // Protected dashboard page, user-only access

/components
 ├── ui
 │   ├── button.jsx             // Reusable ShadCN styled Button component
 │   ├── input.jsx              // Reusable ShadCN styled Input field component
 │         dropdown-menu.jsx      //Reusable ShadCN styled dropdown menu component
      providers/SessionProvider   // needed to wrap layout.js
       LoginButton.jsx        // Login/logout button with auth logic (uses next-auth hooks)
 └── Header.jsx                 // Header with navigation + <LoginButton /> integrated

/libs
 ├── auth.js                   // Helper for server-side auth (getServerSession wrapper)
       utils.js                  //initialiazied from ShadCN
/middleware.js                 // Middleware for protecting routes (e.g. /dashboard, /profile)
/.env.local                   // Environment variables for OAuth keys, mail server, NEXTAUTH_URL, etc.
/next.config.js               // Next.js config (if customized)
/package.json                 // Project dependencies (next, react, next-auth, shadcn, etc.)
/README.md                    // Docs: setup instructions, environment vars, architecture explained
