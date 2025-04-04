import "./globals.css";
import Background from "../components/background/background";
import NavBar from "../components/Navbar/navbar";
import ProfileContainer from "@/components/ProfileContainer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen items-center flex justify-start relative pt-[140px]">
          <Background />
          <NavBar />
          <div className="items-center flex flex-row gap-2 h-min justify-center w-full">
            <div className="items-start gap-[20px]  max-w-[1140px] flex flex-col lg:flex-row">
              <ProfileContainer />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
