"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Menu,
  Heart,
  Stethoscope,
  Users,
  GraduationCap,
  Trophy,
  Sprout,
  ArrowRight,
  HandHeart,
  CalendarCheck,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const programs = [
  {
    title: "Free Medical Camps",
    href: "/programs/medical-camps",
    description:
      "Providing essential healthcare services to underserved communities.",
    icon: Stethoscope,
  },
  {
    title: "Women Empowerment",
    href: "/programs/women-empowerment",
    description:
      "Supporting women through skills training and economic micro-loans.",
    icon: Users,
  },
  {
    title: "Education Support",
    href: "/programs/education",
    description: "ECD centers, scholarships, and educational material support.",
    icon: GraduationCap,
  },
  {
    title: "Youth Development",
    href: "/programs/youth-development",
    description:
      "Nurturing young talent through sports and skills acquisition.",
    icon: Trophy,
  },
  {
    title: "Food Security",
    href: "/programs/food-security",
    description:
      "Sustainable agriculture and community farming initiatives.",
    icon: Sprout,
  },
];

const callsToAction = [
  {
    name: "Join as Volunteer",
    href: "/volunteer",
    icon: HandHeart,
    description: "Make a difference in communities",
  },
  {
    name: "Book a Visit",
    href: "/contact",
    icon: CalendarCheck,
    description: "Experience our work firsthand",
  },
  {
    name: "All Programs",
    href: "/programs",
    icon: ArrowRight,
    description: "Explore our complete impact",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  NAVBAR                                    */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const programsActive = pathname.startsWith("/programs");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? "text-white" : "text-slate-900";

  return (
    <header className="fixed inset-x-0 top-4 z-[60] px-4">
      {/* FLOATING CONTAINER */}
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-2xl transition-all duration-300",
          isTransparent
            ? "bg-black/20 backdrop-blur-md lg:bg-white/10 lg:ring-1 lg:ring-white/20 lg:shadow-lg lg:shadow-black/10 lg:backdrop-blur-xl"
            : "bg-white/90 ring-1 ring-black/10 shadow-lg shadow-black/10 backdrop-blur-xl"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* LOGO */}
          <Link href="/" className="relative h-12 w-[110px] shrink-0">
            <Image
              src="/main-Logo.svg"
              alt="UCESCO Africa"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <NavItem href="/" label="Home" active={pathname === "/"} transparent={isTransparent} />
            <NavItem href="/about" label="About" active={pathname === "/about"} transparent={isTransparent} />

            {/* PROGRAMS – NO HOVER BG */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto px-2.5 py-2 text-sm font-medium bg-transparent shadow-none",
                      "hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent",
                      "focus:!text-current hover:!text-current data-[state=open]:!text-current",
                      textColor,
                      programsActive
                        ? isTransparent
                          ? "text-white"
                          : "text-primary"
                        : "",
                      isTransparent
                        ? "hover:!text-white/80 data-[state=open]:!text-white"
                        : "hover:!text-primary data-[state=open]:!text-primary"
                    )}
                  >
                    Programs
                    {programsActive && (
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 rounded-full",
                          isTransparent ? "bg-white" : "bg-primary"
                        )}
                      />
                    )}
                  </NavigationMenuTrigger>

                  {/* MEGA MENU */}
                  <NavigationMenuContent className="w-full p-0">
                    <div className="bg-white">
                      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {programs.map((p) => (
                          <NavigationMenuLink asChild key={p.href}>
                            <Link
                              href={p.href}
                              className="group flex gap-4 rounded-xl p-5 hover:bg-slate-50 transition"
                            >
                              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-slate-100">
                                <p.icon className="h-6 w-6 text-slate-600 group-hover:text-primary" />
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900 group-hover:text-primary">
                                  {p.title}
                                </div>
                                <p className="text-sm text-slate-600 mt-1">
                                  {p.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      <div className="border-t bg-slate-50">
                        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                          {callsToAction.map((cta) => (
                            <Link
                              key={cta.name}
                              href={cta.href}
                              className="flex items-center justify-between gap-4 p-4 hover:bg-slate-100"
                            >
                              <div className="flex gap-3 items-center">
                                <cta.icon className="h-5 w-5 text-slate-400" />
                                <div>
                                  <div className="font-semibold">{cta.name}</div>
                                  <div className="text-xs text-slate-600">
                                    {cta.description}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="h-4 w-4 text-slate-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavItem href="/volunteer" label="Volunteer" active={pathname === "/volunteer"} transparent={isTransparent} />
            <NavItem href="/meaningful-travel" label="Meaningful Travel" active={pathname === "/meaningful-travel"} transparent={isTransparent} />
            <NavItem href="/impact" label="Impact" active={pathname === "/impact"} transparent={isTransparent} />
            <NavItem href="/blog" label="Blog" active={pathname === "/blog"} transparent={isTransparent} />
            <NavItem href="/contact" label="Contact" active={pathname === "/contact"} transparent={isTransparent} />
          </nav>

          {/* CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "font-medium text-sm",
                "h-9 px-4 rounded-lg",
                "ring-1 ring-inset",
                isTransparent
                  ? "text-white ring-white/30 bg-white/10 hover:bg-white/15"
                  : "text-slate-700 ring-slate-200 bg-white hover:bg-slate-50"
              )}
            >
              <Link href="/sponsor">Sponsor a Child</Link>
            </Button>
            <Button asChild size="sm" className="bg-primary text-white h-9 px-4 rounded-lg">
              <Link href="/donate" className="flex gap-2 items-center">
                <Heart className="h-3.5 w-3.5 fill-current" /> Donate
              </Link>
            </Button>
          </div>

          {/* MOBILE */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-xl",
                  isTransparent
                    ? "text-white bg-white/20 hover:bg-white/30"
                    : "text-slate-900 hover:bg-slate-100"
                )}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 [&>button]:hidden">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <MobileMenu close={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 HELPERS                                    */
/* -------------------------------------------------------------------------- */

function NavItem({
  href,
  label,
  active,
  transparent,
}: {
  href: string;
  label: string;
  active: boolean;
  transparent: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-2.5 py-2 text-sm font-medium relative transition-colors whitespace-nowrap",
        transparent ? "text-white" : "text-slate-700",
        transparent ? "hover:text-white/80" : "hover:text-primary",
        active
          ? transparent
            ? "text-white"
            : "text-primary"
          : ""
      )}
    >
      {label}
      {active && (
        <span
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-3/4 rounded-full",
            transparent ? "bg-white" : "bg-primary"
          )}
        />
      )}
    </Link>
  );
}

function MobileMenu({ close }: { close: () => void }) {
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Header with Logo and Close */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
        <Link href="/" onClick={close} className="relative h-10 w-[100px]">
          <Image
            src="/main-Logo.svg"
            alt="UCESCO Africa"
            fill
            className="object-contain"
          />
        </Link>
        <button
          onClick={close}
          className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          About
        </Link>

        {/* Programs Accordion */}
        <div>
          <button
            onClick={() => setProgramsOpen(!programsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
          >
            Programs
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform text-slate-500",
                programsOpen && "rotate-90"
              )}
            />
          </button>
          {programsOpen && (
            <div className="ml-4 border-l-2 border-slate-200 pl-2 space-y-1 mt-1">
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={close}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"
                >
                  <p.icon className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{p.title}</span>
                </Link>
              ))}
              <Link
                href="/programs"
                onClick={close}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-primary font-medium"
              >
                <ArrowRight className="h-4 w-4" />
                <span className="text-sm">View All Programs</span>
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/volunteer"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          Volunteer
        </Link>
        <Link
          href="/meaningful-travel"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          Meaningful Travel
        </Link>
        <Link
          href="/impact"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          Impact
        </Link>
        <Link
          href="/blog"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          onClick={close}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile CTA Buttons */}
      <div className="border-t border-slate-200 px-4 pt-4 pb-6 space-y-3">
        <Button asChild variant="outline" className="w-full h-12">
          <Link href="/sponsor" onClick={close}>
            Sponsor a Child
          </Link>
        </Button>
        <Button asChild className="w-full h-12 bg-primary">
          <Link href="/donate" onClick={close} className="flex gap-2 items-center justify-center">
            <Heart className="h-4 w-4 fill-current" /> Donate Now
          </Link>
        </Button>
      </div>
    </div>
  );
}
