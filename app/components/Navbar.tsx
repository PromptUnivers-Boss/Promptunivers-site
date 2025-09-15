'use client';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logos/logo.png" alt="PromptUnivers" width={40} height={40} priority />
          <span className="font-bold text-xl">PromptUnivers</span>
        </Link>
        <ul className="flex items-center gap-5 text-sm">
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/pricing" className="hover:underline">Tarifs</Link></li>
          <li><Link href="/contact" className="px-3 py-1 rounded bg-black text-white hover:opacity-90">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
