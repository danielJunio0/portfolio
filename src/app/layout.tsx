import Image from "next/image";
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
        <div >
          <NavBar />
          <div className="flex justify-center pt-[160px]">
            <ProfileContainer />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
