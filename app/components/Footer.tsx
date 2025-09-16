export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-black/40 text-gray-300">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          © {year} PromptUnivers · Tous droits réservés
        </p>
        <nav className="flex gap-5 text-sm">
          <a href="/mentions" className="hover:text-white">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-white">Confidentialité</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

