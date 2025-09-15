import Image from "next/image";
export default function Home() {
  return (
    <main style={{padding:"2rem"}}>
      <h1>PromptUnivers</h1>
      <p>Site Next.js prêt à déployer.</p>
      <Image src="/Logos/logo.png" alt="logo" width={120} height={120}/>
    </main>
  );
}
