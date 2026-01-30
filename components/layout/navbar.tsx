"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShinyButton } from "../shiny-button";
import { useScroll } from "@/components/use-scroll";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);

  const navLinks = [
    { name: "Siapa Kami", href: "#" },
    { name: "Pakej Kelas", href: "#" },
    { name: "Kelebihan MyNgaji", href: "#" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 mx-auto w-full border-b border-transparent transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]", {
        "bg-[#082b2f]/80 backdrop-blur-md shadow-sm dark:bg-black/50 border-white/30 dark:border-gray-800 md:top-4 md:max-w-7xl md:rounded-full md:border": scrolled && !open,
        "bg-white dark:bg-black h-full": open,
        "bg-transparent": !scrolled && !open,
      })}
    >
      <nav
        className={cn("flex h-20 w-full items-center justify-between px-6 md:h-20 md:transition-all md:ease-out", {
          "md:px-6": scrolled,
        })}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="relative h-10 w-40 block">
            <Image src="/assets/logo1.png" alt="Tasqif Logo" fill className="object-contain object-left" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors font-medium text-[15px] hover:scale-105">
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#">
            <ShinyButton className={cn("inline-flex items-center gap-2 px-6 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]", scrolled ? "!rounded-full" : "!rounded-xl")}>
              Daftar Kelas Percubaan
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </ShinyButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-800" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <MenuToggleIcon open={open} className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn("fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden bg-white dark:bg-black md:hidden", open ? "block" : "hidden")}>
        <div className="flex h-full w-full flex-col p-6 animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xl font-medium text-slate-800 hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            ))}

            <div className="mt-4">
              <Link href="#" onClick={() => setOpen(false)}>
                <ShinyButton className="w-full justify-center rounded-full py-4 text-base">
                  Daftar Kelas Percubaan
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </ShinyButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
