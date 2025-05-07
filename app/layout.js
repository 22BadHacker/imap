import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Social from './component/Social'
import Nav from "./component/NavBar";
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
        className={`${geistSans.variable} w-screen overflow-x-hidden bg-[#fff] h-auto    ${geistMono.variable} antialiased`}
      >



        <div className="">
          {children}

        </div>
        


      </body>
    </html>
  );
}
