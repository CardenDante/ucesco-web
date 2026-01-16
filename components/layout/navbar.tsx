"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Free Medical Camps & Healthcare",
    href: "/programs/medical-camps",
    description: "Providing free healthcare services to underserved communities",
  },
  {
    title: "Women Empowerment & Microbusiness",
    href: "/programs/women-empowerment",
    description: "Supporting women through skills training and economic empowerment",
  },
  {
    title: "Education & Child Support",
    href: "/programs/education",
    description: "ECD, scholarships, and educational support programs",
  },
  {
    title: "Youth Sports, Skills & Talent",
    href: "/programs/youth-development",
    description: "Nurturing young talent through sports and skills development",
  },
  {
    title: "Food Security & Livelihood",
    href: "/programs/food-security",
    description: "Sustainable agriculture and livelihood programs",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-300x236.png"
            alt="UCESCO Africa"
            width={50}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-primary">UCESCO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>

          {/* Programs Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {programs.map((program) => (
                      <li key={program.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={program.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {program.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {program.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/sponsor"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sponsor a Child
          </Link>
          <Link
            href="/volunteer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Volunteer
          </Link>
          <Link
            href="/meaningful-travel"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Meaningful Travel
          </Link>
          <Link
            href="/impact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Impact
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>

          <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Programs */}
              <div className="space-y-2">
                <div className="text-sm font-medium">Programs</div>
                <div className="ml-4 space-y-2">
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/sponsor"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sponsor a Child
              </Link>
              <Link
                href="/volunteer"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volunteer
              </Link>
              <Link
                href="/meaningful-travel"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meaningful Travel
              </Link>
              <Link
                href="/impact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Button asChild className="bg-secondary hover:bg-secondary/90 w-full mt-4">
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                  Donate
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
