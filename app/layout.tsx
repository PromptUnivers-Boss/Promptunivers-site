
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Prompt Univers",
  description: "Un univers de possibilités, une solution pour chaque besoin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
