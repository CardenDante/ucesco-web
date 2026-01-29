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
  BookOpen,
  UsersRound,
  Target,
  FolderKanban,
  Newspaper,
  TrendingUp,
  Plane,
  UserPlus,
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

const aboutLinks = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our mission, vision, and values",
    icon: Heart,
  },
  {
    title: "Our History",
    href: "/about/history",
    description: "Discover our journey and the inspiration behind UCESCO Africa",
    icon: BookOpen,
  },
  {
    title: "Our Team",
    href: "/about/team",
    description: "Meet the dedicated people making a difference",
    icon: UsersRound,
  },
  {
    title: "Impact",
    href: "/impact",
    description: "See the difference we're making in communities",
    icon: Target,
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with us for any inquiries",
    icon: CalendarCheck,
  },
];

const getInvolvedLinks = [
  {
    title: "Volunteer",
    href: "/volunteer",
    description: "Join our team and make a direct impact",
    icon: HandHeart,
  },
  {
    title: "Meaningful Travel",
    href: "/meaningful-travel",
    description: "Experience our work firsthand through visits",
    icon: Plane,
  },
  {
    title: "Apply as Medic",
    href: "/apply-medic",
    description: "Join our medical camps as a healthcare professional",
    icon: UserPlus,
  },
];

const storiesLinks = [
  {
    title: "Blog",
    href: "/blog",
    description: "Read updates and insights from our work",
    icon: Newspaper,
  },
  {
    title: "Impact Stories",
    href: "/impact",
    description: "Real stories of lives transformed",
    icon: TrendingUp,
  },
];

const projectsLinks = [
  {
    title: "View Projects",
    href: "/projects",
    description: "Explore our community development projects",
    icon: FolderKanban,
  },
];

const programsCTAs = [
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

const aboutCTAs = [
  {
    name: "Contact Us",
    href: "/contact",
    icon: CalendarCheck,
    description: "Get in touch with our team",
  },
  {
    name: "See Our Impact",
    href: "/impact",
    icon: Target,
    description: "View our achievements",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    icon: HandHeart,
    description: "Join our mission",
  },
];

const projectsCTAs = [
  {
    name: "Support Projects",
    href: "/donate",
    icon: Heart,
    description: "Fund community initiatives",
  },
  {
    name: "Volunteer",
    href: "/volunteer",
    icon: HandHeart,
    description: "Join our projects",
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: CalendarCheck,
    description: "Partner with us",
  },
];

const getInvolvedCTAs = [
  {
    name: "Donate",
    href: "/donate",
    icon: Heart,
    description: "Support our work",
  },
  {
    name: "Sponsor a Child",
    href: "/sponsor",
    icon: GraduationCap,
    description: "Change a life today",
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: CalendarCheck,
    description: "Learn more about opportunities",
  },
];

const storiesCTAs = [
  {
    name: "View Impact",
    href: "/impact",
    icon: Target,
    description: "See our achievements",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    icon: HandHeart,
    description: "Join our mission",
  },
  {
    name: "Donate",
    href: "/donate",
    icon: Heart,
    description: "Support our work",
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
  const aboutActive = pathname.startsWith("/about") || pathname.startsWith("/impact") || pathname === "/contact";
  const projectsActive = pathname.startsWith("/projects");
  const getInvolvedActive = pathname.startsWith("/volunteer") || pathname.startsWith("/meaningful-travel") || pathname.startsWith("/apply-medic");
  const storiesActive = pathname.startsWith("/blog") || pathname === "/impact";

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
              src={isTransparent ? "/white.svg" : "/main-Logo.svg"}
              alt="UCESCO Africa"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <NavItem href="/" label="Home" active={pathname === "/"} transparent={isTransparent} />

            {/* ABOUT DROPDOWN */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto px-2.5 py-2 text-sm font-medium bg-transparent shadow-none",
                      "hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent",
                      "focus:!text-current hover:!text-current data-[state=open]:!text-current",
                      textColor,
                      aboutActive
                        ? isTransparent
                          ? "text-white"
                          : "text-primary"
                        : "",
                      isTransparent
                        ? "hover:!text-white/80 data-[state=open]:!text-white"
                        : "hover:!text-primary data-[state=open]:!text-primary"
                    )}
                  >
                    About
                    {aboutActive && (
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 rounded-full",
                          isTransparent ? "bg-white" : "bg-primary"
                        )}
                      />
                    )}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="w-full p-0 rounded-xl overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {aboutLinks.map((link) => (
                          <NavigationMenuLink asChild key={link.href}>
                            <Link
                              href={link.href}
                              className="group !flex !flex-row items-start gap-3 rounded-xl p-3 hover:bg-slate-50 transition"
                            >
                              <link.icon className="!h-6 !w-6 text-primary flex-shrink-0" strokeWidth={2} />
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900 group-hover:text-primary text-sm mb-1">
                                  {link.title}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      <div className="border-t bg-slate-50 rounded-b-xl">
                        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                          {aboutCTAs.map((cta) => (
                            <Link
                              key={cta.name}
                              href={cta.href}
                              className="flex items-center justify-between gap-4 p-4 hover:bg-slate-100 transition-colors"
                            >
                              <div className="flex gap-3 items-center">
                                <cta.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                                <div>
                                  <div className="font-semibold text-sm">{cta.name}</div>
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
                  <NavigationMenuContent className="w-full p-0 rounded-xl overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                        {programs.map((p) => (
                          <NavigationMenuLink asChild key={p.href}>
                            <Link
                              href={p.href}
                              className="group !flex !flex-row items-start gap-3 rounded-xl p-4 hover:bg-slate-50 transition"
                            >
                              <p.icon className="!h-6 !w-6 text-primary flex-shrink-0" strokeWidth={2} />
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900 group-hover:text-primary text-sm mb-1">
                                  {p.title}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {p.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      <div className="border-t bg-slate-50 rounded-b-xl">
                        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                          {programsCTAs.map((cta) => (
                            <Link
                              key={cta.name}
                              href={cta.href}
                              className="flex items-center justify-between gap-4 p-4 hover:bg-slate-100 transition-colors"
                            >
                              <div className="flex gap-3 items-center">
                                <cta.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                                <div>
                                  <div className="font-semibold text-sm">{cta.name}</div>
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

            {/* PROJECTS DROPDOWN */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto px-2.5 py-2 text-sm font-medium bg-transparent shadow-none",
                      "hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent",
                      "focus:!text-current hover:!text-current data-[state=open]:!text-current",
                      textColor,
                      projectsActive
                        ? isTransparent
                          ? "text-white"
                          : "text-primary"
                        : "",
                      isTransparent
                        ? "hover:!text-white/80 data-[state=open]:!text-white"
                        : "hover:!text-primary data-[state=open]:!text-primary"
                    )}
                  >
                    Projects
                    {projectsActive && (
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 rounded-full",
                          isTransparent ? "bg-white" : "bg-primary"
                        )}
                      />
                    )}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="w-full p-0 rounded-xl overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <div className="p-4 grid grid-cols-1 gap-3">
                        {projectsLinks.map((link) => (
                          <NavigationMenuLink asChild key={link.href}>
                            <Link
                              href={link.href}
                              className="group !flex !flex-row items-start gap-3 rounded-xl p-3 hover:bg-slate-50 transition min-w-[280px]"
                            >
                              <link.icon className="!h-6 !w-6 text-primary flex-shrink-0" strokeWidth={2} />
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900 group-hover:text-primary text-sm mb-1">
                                  {link.title}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      <div className="border-t bg-slate-50 rounded-b-xl">
                        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                          {projectsCTAs.map((cta) => (
                            <Link
                              key={cta.name}
                              href={cta.href}
                              className="flex items-center justify-between gap-4 p-4 hover:bg-slate-100 transition-colors"
                            >
                              <div className="flex gap-3 items-center">
                                <cta.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                                <div>
                                  <div className="font-semibold text-sm">{cta.name}</div>
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

            {/* GET INVOLVED DROPDOWN */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto px-2.5 py-2 text-sm font-medium bg-transparent shadow-none",
                      "hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent",
                      "focus:!text-current hover:!text-current data-[state=open]:!text-current",
                      textColor,
                      getInvolvedActive
                        ? isTransparent
                          ? "text-white"
                          : "text-primary"
                        : "",
                      isTransparent
                        ? "hover:!text-white/80 data-[state=open]:!text-white"
                        : "hover:!text-primary data-[state=open]:!text-primary"
                    )}
                  >
                    Get Involved
                    {getInvolvedActive && (
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 rounded-full",
                          isTransparent ? "bg-white" : "bg-primary"
                        )}
                      />
                    )}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="w-full p-0 rounded-xl overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {getInvolvedLinks.map((link) => (
                          <NavigationMenuLink asChild key={link.href}>
                            <Link
                              href={link.href}
                              className="group !flex !flex-row items-start gap-3 rounded-xl p-3 hover:bg-slate-50 transition"
                            >
                              <link.icon className="!h-6 !w-6 text-primary flex-shrink-0" strokeWidth={2} />
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900 group-hover:text-primary text-sm mb-1">
                                  {link.title}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      <div className="border-t bg-slate-50 rounded-b-xl">
                        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                          {getInvolvedCTAs.map((cta) => (
                            <Link
                              key={cta.name}
                              href={cta.href}
                              className="flex items-center justify-between gap-4 p-4 hover:bg-slate-100 transition-colors"
                            >
                              <div className="flex gap-3 items-center">
                                <cta.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                                <div>
                                  <div className="font-semibold text-sm">{cta.name}</div>
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

            {/* STORIES DROPDOWN */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto px-2.5 py-2 text-sm font-medium bg-transparent shadow-none",
                      "hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent",
                      "focus:!text-current hover:!text-current data-[state=open]:!text-current",
                      textColor,
                      storiesActive
                        ? isTransparent
                          ? "text-white"
                          : "text-primary"
                        : "",
                      isTransparent
                        ? "hover:!text-white/80 data-[state=open]:!text-white"
                        : "hover:!text-primary data-[state=open]:!text-primary"
                    )}
                  >
                    Stories
                    {storiesActive && (
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 rounded-full",
                          isTransparent ? "bg-white" : "bg-primary"
                        )}
                      />
                    )}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="w-full p-0 rounded-xl overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {storiesLinks.map((link) => (
                          <NavigationMenuLink asChild key={link.href}>
                            <Link
                              href={link.href}
                              className="group !flex !flex-row items-start gap-3 rounded-xl p-3 hover:bg-slate-50 transition"
                            >
                              <link.icon className="!h-6 !w-6 text-primary flex-shrink-0" strokeWidth={2} />
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900 group-hover:text-primary text-sm mb-1">
                                  {link.title}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      <div className="border-t bg-slate-50 rounded-b-xl">
                        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                          {storiesCTAs.map((cta) => (
                            <Link
                              key={cta.name}
                              href={cta.href}
                              className="flex items-center justify-between gap-4 p-4 hover:bg-slate-100 transition-colors"
                            >
                              <div className="flex gap-3 items-center">
                                <cta.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                                <div>
                                  <div className="font-semibold text-sm">{cta.name}</div>
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);

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

        {/* About Accordion */}
        <div>
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
          >
            About
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform text-slate-500",
                aboutOpen && "rotate-90"
              )}
            />
          </button>
          {aboutOpen && (
            <div className="ml-4 border-l-2 border-slate-200 pl-2 space-y-1 mt-1">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"
                >
                  <link.icon className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

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

        {/* Projects Accordion */}
        <div>
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
          >
            Projects
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform text-slate-500",
                projectsOpen && "rotate-90"
              )}
            />
          </button>
          {projectsOpen && (
            <div className="ml-4 border-l-2 border-slate-200 pl-2 space-y-1 mt-1">
              {projectsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"
                >
                  <link.icon className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Get Involved Accordion */}
        <div>
          <button
            onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
          >
            Get Involved
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform text-slate-500",
                getInvolvedOpen && "rotate-90"
              )}
            />
          </button>
          {getInvolvedOpen && (
            <div className="ml-4 border-l-2 border-slate-200 pl-2 space-y-1 mt-1">
              {getInvolvedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"
                >
                  <link.icon className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Stories Accordion */}
        <div>
          <button
            onClick={() => setStoriesOpen(!storiesOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-100 font-medium text-slate-900"
          >
            Stories
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform text-slate-500",
                storiesOpen && "rotate-90"
              )}
            />
          </button>
          {storiesOpen && (
            <div className="ml-4 border-l-2 border-slate-200 pl-2 space-y-1 mt-1">
              {storiesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"
                >
                  <link.icon className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
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
