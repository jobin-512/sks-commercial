import type { Metadata } from "next";
import { Unbounded} from "next/font/google";
import "./globals.css";
import  Header  from "@/app/components/header";
import Footer from "./components/footer";

const unbounded = Unbounded({
  subsets: ['latin'],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={unbounded.className}> 
      <body suppressHydrationWarning>
        <Header/>
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
