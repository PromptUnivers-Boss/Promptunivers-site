export default function Services() {
  const items = [
    { title: "Ateliers prompt engineering", desc: "Formation et coaching adaptés à votre équipe." },
    { title: "Automatisations", desc: "Workflows no-code/low-code et intégrations API." },
    { title: "Sites & agents IA", desc: "Prototypage et mise en production rapide." },
  ];
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((s) => (
          <li key={s.title} className="rounded-xl border p-4">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
