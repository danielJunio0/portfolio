import Image from "next/image";
import "./globals.css";
import Background from "../components/background/background";
import NavBar from "../components/Navbar/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div >
          <NavBar />
          {children}
        </div>
      </body>
          {/* <Background /> */}
    </html>
  );
}
