// ~/promptunivers-site/app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-3">
        <Image
          src="/logo/logo.png"
          alt="Prompt Univers"
          width={48}
          height={48}
          className="h-12 w-auto"
        />
        <span className="text-2xl font-bold text-cyan-400">
          Prompt<span className="text-orange-500">⚡</span>Univers
        </span>
      </div>
      <nav className="flex gap-6">
        <Link href="/fr/packs" className="hover:text-cyan-400">
          Packs
        </Link>
        <Link href="/fr/about" className="hover:text-orange-500">
          À propos
        </Link>
        <Link href="/fr/contact" className="hover:text-cyan-400">
          Contact
        </Link>
      </nav>
    </header>
  );
}

