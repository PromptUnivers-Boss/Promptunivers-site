export const metadata = { title: "Prompt Univers", description: "a universe of possibilities" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{margin:0, fontFamily:"Inter, system-ui, sans-serif"}}>{children}</body>
    </html>
  );
}
