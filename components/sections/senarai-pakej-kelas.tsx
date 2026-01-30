"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, BookOpen, Star, User, Users, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import ScrollFloat from "@/components/scroll-float";

// Helper Interface for Data
interface PackageItem {
  id: string;
  title: string;
  points: string[];
  bg: string;
  accent: string;
  titleColor: string;
  buttonBorder: string;
  colSpan: string;
  imagePos: "circle-left" | "circle-right" | "featured-right" | "bottom-icon" | "featured-left";
  icon?: React.ElementType;
}

const packages: PackageItem[] = [
  {
    id: "kids-mengaji",
    title: "Kelas Mengaji Kanak-kanak",
    points: ["Eksklusif one-to-one", "Waktu kelas yang fleksibel", "Menerima pelajar seawal 6 tahun", "Sesi pembelajaran yang interaktif"],
    bg: "bg-white",
    accent: "text-orange-900",
    titleColor: "text-amber-500",
    buttonBorder: "border-orange-200 text-orange-900 hover:bg-orange-100",
    colSpan: "col-span-1",
    imagePos: "circle-left", // Icon Left
    icon: User,
  },
  {
    id: "kids-arab",
    title: "Kelas Bahasa Arab Kanak-kanak",
    points: ["Eksklusif one-to-one", "Waktu kelas yang fleksibel", "Nota & latihan disediakan", "Sesi pembelajaran yang interaktif"],
    bg: "bg-primary",
    accent: "text-cyan-900",
    titleColor: "text-cyan-600",
    buttonBorder: "border-cyan-200 text-cyan-900 hover:bg-cyan-100",
    colSpan: "col-span-1",
    imagePos: "circle-right", // Icon Right
    icon: BookOpen,
  },
  {
    id: "hafazan",
    title: "Kelas Hafazan al-Quran",
    points: ["Kelas secara one-to-one", "Dibimbing oleh asatizah hafiz/hafizah", "Terbuka kepada kanak-kanak & dewasa yang ingin memulakan hafalan al-Quran atau mengulang bacaan bersama asatizah bertauliah"],
    bg: "bg-white",
    accent: "text-emerald-900",
    titleColor: "text-emerald-600",
    buttonBorder: "border-emerald-200 text-emerald-900 hover:bg-emerald-100",
    colSpan: "col-span-1 md:col-span-2",
    imagePos: "featured-right", // Large Icon Right
    icon: Star,
  },
  {
    id: "kafa",
    title: "Kelas Agama & Fardu Ain (KAFA)",
    points: ["Eksklusif one-to-one", "Waktu kelas yang fleksibel", "Nota & latihan disediakan", "Sesi pembelajaran yang interaktif"],
    bg: "bg-primary",
    accent: "text-orange-900",
    titleColor: "text-amber-500",
    buttonBorder: "border-orange-200 text-orange-900 hover:bg-orange-100",
    colSpan: "col-span-1",
    imagePos: "bottom-icon", // Icon Bottom Right
    icon: CheckCircle2,
  },
  {
    id: "adult-mengaji",
    title: "Kelas Mengaji Dewasa",
    points: ["Kelas secara one-to-one", "Dibimbing oleh asatizah yang bertauliah & berpengetahuan", "Pendedahan ilmu asas tajwid", "Slide & nota disediakan"],
    bg: "bg-white",
    accent: "text-cyan-900",
    titleColor: "text-cyan-600",
    buttonBorder: "border-cyan-200 text-cyan-900 hover:bg-cyan-100",
    colSpan: "col-span-1",
    imagePos: "bottom-icon", // Icon Bottom Right
    icon: Users,
  },
  {
    id: "adult-arab",
    title: "Kelas Bahasa Arab Dewasa",
    points: ["Kelas secara one-to-one", "Terbahagi kepada dua kategori iaitu Bahasa Arab alQuran & Bahasa Arab Komunikasi", "Waktu kelas yang fleksibel", "Nota & latihan disediakan"],
    bg: "bg-primary",
    accent: "text-orange-900",
    titleColor: "text-amber-500",
    buttonBorder: "border-orange-200 text-orange-900 hover:bg-orange-100",
    colSpan: "col-span-1 md:col-span-2",
    imagePos: "featured-left", // Icon Left
    icon: BookOpen,
  },
];

export const SenaraiPakejKelas = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 mb-16 text-center">
          <ScrollFloat containerClassName="!my-0" textClassName="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-primary">Senarai </span>
            <span className="text-secondary">Pakej Kelas.</span>
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {[packages[0], packages[3]].map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Column 2 (Offset Top) */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:mt-16">
            {[packages[1], packages[4]].map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {[packages[2], packages[5]].map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PackageCard = ({ pkg }: { pkg: PackageItem }) => {
  const Icon = pkg.icon || BookOpen;

  const isPrimary = pkg.bg.includes("bg-primary") || pkg.bg.includes("bg-[#2F5148]");

  // Styles based on card background
  const titleColor = isPrimary ? "text-white" : "text-slate-900";
  const descColor = isPrimary ? "text-white/80" : pkg.accent;
  const iconColor = isPrimary ? "text-white" : pkg.accent;


  // If white card: Primary colored button with white text (ensures visibility)
  const buttonClasses = isPrimary ? "bg-white text-primary hover:bg-slate-100" : "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg";

  return (
    <div className={clsx("group relative rounded-[2.5rem] p-8 pb-10 flex flex-col items-center text-center transition-all duration-300", pkg.bg, "shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]")}>
      <div className={clsx("mb-6", iconColor)}>
        <Icon className="w-10 h-10 stroke-[1.2]" />
      </div>

      <h3 className={clsx("text-xl font-semibold mb-1", titleColor)}>{pkg.title}</h3>

      {/* Divider / Spacer if needed, or just margin */}
      <div className="w-full my-5 px-4">
        <div className="flex flex-col gap-2">
          {pkg.points.map((point, idx) => (
            <p key={idx} className={clsx("text-sm font-medium leading-relaxed opacity-80", isPrimary ? "text-white/80" : pkg.accent)}>
              {point}
            </p>
          ))}
        </div>
      </div>

      <button className={clsx("mt-auto w-10 h-10 rounded-full flex items-center justify-center transition-colors", buttonClasses)}>
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  );
};
