import Navbar from "../components/Navbar";
export const metadata = { title: "Prompt Univers — EN", description: "Prompt packs and custom services" };
export default function ENLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
