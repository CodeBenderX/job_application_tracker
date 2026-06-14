import {Briefcase, Ghost} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto h-16 px-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
            <Briefcase className="inline-block mr-2" />
            CareerTrack
          </Link>
          <div className="text-sm text-gray-500">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-700 hover:text-black">Log in</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-primary hover:bg-primary/90">Start for free</Button>
            </Link>
          </div>
      </div>
    </nav>
  );
}
