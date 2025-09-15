import Navbar from "../components/Navbar";
export const metadata = { title: "Prompt Univers — FR", description: "Packs de prompts et services sur mesure" };
export default function FRLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
