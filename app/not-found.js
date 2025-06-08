import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen fill-foreground">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-foreground mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button variant="default">Go Back to Home</Button>
      </Link>
    </div>
  );
}
