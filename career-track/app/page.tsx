"use client";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Organize Applications"); //organize, hired, boards
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

        {/*Hero Images Section*/}
        <section className="border-t bg-whitepy-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex justify-center gap-2 mb-8">
                <Button onClick={() => setActiveTab("organize")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Organize Applications</Button>
                <Button onClick={() => setActiveTab("hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Get Hired</Button>
                <Button onClick={() => setActiveTab("boards")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Manage Boards</Button>
              </div>
              <div className="relative mx-auto overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && <Image src="/hero-images/hero1.png" alt="Organize Applications" width={1200} height={800} className="mx-auto"/>}
                {activeTab === "hired" && <Image src="/hero-images/hero2.png" alt="Get Hired" width={1200} height={800} className="mx-auto"/>}
                {activeTab === "boards" && <Image src="/hero-images/hero3.png" alt="Manage Boards" width={1200} height={800} className="mx-auto"/>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
// useState is imported from React at the top of the file


