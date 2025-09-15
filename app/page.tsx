import Image from "next/image";

export default function Home() {
  return (
    <section className="grid gap-8">
      <h1 className="text-4xl font-extrabold">Boost your productivity ⚡</h1>
      <p className="text-lg text-gray-600">
        PromptUnivers — un univers de possibilités, une solution pour chaque besoin.
      </p>
      <div className="mt-4">
        <Image src="/logos/logo.png" alt="Logo PromptUnivers" width={220} height={220} priority />
      </div>
    </section>
  );
}
