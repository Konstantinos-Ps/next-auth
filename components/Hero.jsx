import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Build Modern Web Apps Fast
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A Next.js starter template with NextAuth.js, Tailwind CSS, and
              ShadCN UI. Get up and running quickly with authentication and a
              beautiful design.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/your-github-repo" target="_blank">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
