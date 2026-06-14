import Image from "next/image";

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
            </p>
            <div className="flex flx-col items-center gap-4">
              <button>Start for free</button>
              <p>Free forever. No credit card required</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
