// components/Navbar.js
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed w-full h-12 shadow-md bg-white z-50">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
            <h1 className="font-bold">SCIPI-AI</h1>
          </Link>
          <div className="hidden sm:flex gap-10 ">
            <Link href="/news_overview">
              <h1 className="hover:backdrop-blur-lg hover:bg-red/20 rounded">
                News Overview
              </h1>
            </Link>
            <Link href="/competitor_overview">
              <h1 className="hover:backdrop-blur-lg hover:bg-red/20 rounded">
                Competitor Overview
              </h1>
            </Link>
            <Link href="/hubble_qa">
              <h1 className="hover:backdrop-blur-lg hover:bg-red/20 rounded">
                HubbleQ&A
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
