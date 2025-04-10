import "./globals.css";
import Background from "../components/Background/background";
import NavBar from "../components/Navbar/navbar";
import ProfileContainer from "@/components/ProfileContainer";
import { Outfit } from "next/font/google"

const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR" className={outfit.className}>
      <body>
        <div className="min-h-screen items-center flex justify-start relative pt-[140px]">
          <Background />
          <NavBar />
          <div className="items-center flex flex-row gap-2 h-min justify-center w-full">
            <div className="items-start gap-[20px]  max-w-[1140px] flex flex-col lg:flex-row px-[30px]">
              <ProfileContainer />
              <div>
                {children}
                <p className="py-5 text-center">{`© ${new Date().getFullYear()} Daniel Barbosa - Analytics by Firebase :)`}</p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </body>
    </html>
  );
}
