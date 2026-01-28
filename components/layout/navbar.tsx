import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { ShinyButton } from "../shiny-button";

export function Navbar() {
  const navLinks = [
    { name: "Siapa Kami", href: "#" },
    { name: "Pakej Kelas", href: "#" },
    { name: "Kelebihan MyNgaji", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/assets/logo1.png" alt="Tasqif Logo" width={150} height={40} className="object-contain" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
            {link.name}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link href="#">
          <ShinyButton className="inline-flex items-center gap-2 rounded-full">
            Daftar Kelas Percubaan
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </ShinyButton>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-600">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
