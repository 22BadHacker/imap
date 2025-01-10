import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Social from './component/Social'
import Nav from "./component/Nav";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#e4ebf5] relative ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[1450px]  px-5 px pt-[13px] mx-auto w-full h-auto">

          <header>
              <Nav />
          </header>


        </div>
        {children}
        <Social />
      </body>
    </html>
  );
}
