export const metadata = { title: "PromptUnivers", description: "🚀" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr"><body style={{fontFamily:"system-ui, sans-serif"}}>{children}</body></html>
  );
}
