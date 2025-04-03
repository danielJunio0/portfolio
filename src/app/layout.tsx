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
    <html lang="en">
      <body>
        <Background />
        <div className="flex justify-center">
          <NavBar />
          <div className="flex flex-col items-center justify-center pt-36 lg:flex-row max-w-[1140px] gap-8">
            <ProfileContainer />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
