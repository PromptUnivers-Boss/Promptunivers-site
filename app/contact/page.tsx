'use client';
import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle"|"sending"|"ok"|"err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setState(res.ok ? "ok" : "err");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section className="grid gap-6 max-w-xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={onSubmit} className="grid gap-3">
        <input name="name" placeholder="Nom" className="border p-2 rounded" required />
        <input name="email" type="email" placeholder="Email" className="border p-2 rounded" required />
        <textarea name="message" placeholder="Votre message…" className="border p-2 rounded h-32" required />
        <button disabled={state==="sending"} className="rounded bg-black text-white px-4 py-2">
          {state==="sending" ? "Envoi…" : "Envoyer"}
        </button>
        {state==="ok" && <p className="text-green-600 text-sm">Message envoyé ✅</p>}
        {state==="err" && <p className="text-red-600 text-sm">Erreur d’envoi ❌</p>}
      </form>
      <p className="text-xs text-gray-500">Les automatisations (e-mail/CRM) seront branchées ensuite.</p>
    </section>
  );
}
