import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    message: String(form.get("message") || "")
  };
  // Pour l’instant on log — on branchera un provider email/Make plus tard.
  console.log("CONTACT_FORM", payload);
  return NextResponse.json({ ok: true });
}
