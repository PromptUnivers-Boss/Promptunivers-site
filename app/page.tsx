import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 grid gap-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
        Bienvenue sur <span className="text-cyan-400">Prompt</span>
        <span className="text-orange-400">Univers</span>
      </h1>

      <p className="text-lg text-gray-300">
        Des prompts, des outils et des automatismes pour travailler plus vite — sans
        sacrifier la qualité.
      </p>

      <div className="mt-2">
        <Image
          src="/logos/logo.png"
          alt="Logo PromptUnivers"
          width={160}
          height={160}
          priority
        />
      </div>
    </section>
  );
}

