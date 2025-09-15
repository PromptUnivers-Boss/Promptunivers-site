export default function Pricing() {
  const plans = [
    { name: "Starter", price: "Gratuit", perks: ["Site de base", "Support communautaire"] },
    { name: "Pro", price: "199 $", perks: ["Automatisations clés", "Support prioritaire"] },
    { name: "Business", price: "Sur devis", perks: ["Intégrations avancées", "SLA & support dédié"] },
  ];
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-bold">Tarifs</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border p-5">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="text-2xl font-bold my-2">{p.price}</div>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              {p.perks.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
