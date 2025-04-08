import { Metadata } from "next";
import Experience from "./experience/page";
import Home from "./home/page";

export const metadata: Metadata = {
  title: 'Sobre mim - Sobre Daniel Barbosa',
  description: 'Saiba um resumo sobre o histórico profissional do desenvolvedor de software Daniel Barbosa de Ribeirão Preto-SP/Brasil',
  openGraph: {
    title: 'Desenvolvedor de software Daniel Barbosa',
    description: 'Daniel tem mais de 6 anos de experiência em desenvolvimento web e mobile.',
    images: ['https://danielbarbosa.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofilepic.3da4e9d8.jpg&w=1200&q=75']
  }
}

export default function Index() {
  return (
    <main className="gap-10 mx-[16px]">
      <Home />
      <Experience />
    </main>
  )
}
