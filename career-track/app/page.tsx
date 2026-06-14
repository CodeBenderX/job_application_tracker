import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">{/*Hero Section*/}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job applications.
            </h1>
            <p className="text-muted-foreground">
              Capture, organize, and track your job applications in one place. Stay on top of your job search with our intuitive and user-friendly application tracker. Never miss a deadline or follow-up again!
            </p><br />
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium bg-blue-400 hover:bg-blue-500 text-white">
                  Start for free <ArrowRight className="ml-2"/>
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forever. No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
