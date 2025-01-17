import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Social from './component/Social'
import Nav from "./component/Nav";
import Footer from "./component/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "𝗜𝗠𝗔𝗣 | Institut des Métiers Appliqués Privée",
  description: "IMAP.ma",
};

// e4ebf5

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} w-full bg-[#fff] h-auto    z-[1] relative ${geistMono.variable} antialiased`}
      >

        
        <div className="w-full">

          <header className="max-w-[1450px]  z-20  px-5  py-[13px] mx-auto w-full h-auto">
              <Nav />

          </header>
        </div>

        
        
        <div className="">
          {children}

        </div>
        <Social />

        <section className="relative  w-full h-auto ">
              <Footer />
        </section>
          

      </body>
    </html>
  );
}
