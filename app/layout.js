import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Social from './component/Social'
import Nav from "./component/NavBar";
import Footer from "./component/Footer";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "𝗜𝗠𝗔𝗣 — Institut des Métiers Appliqués Privé",
  description: 'Formations professionnelles en design graphique, développement web, comptabilité, bureautique, et plus. Apprenez, créez, innovez à IMAP.',
  keywords: ['IMAP', 'Institut des Métiers Appliqués', 'école privée', 'formation professionnelle', 'design', 'développement web'],
  authors: [{ name: 'Institut IMAP', url: 'https://ima-privee.vercel.app' }],
  creator: 'Institut IMAP',
  openGraph: {
    title: 'IMAP – Institut des Métiers Appliqués Privée',
    description: 'Rejoignez IMAP et développez vos compétences en design, web, audiovisuel, et plus. Des formations certifiantes à la portée de tous.',
    url: 'https://ima-privee.vercel.app',
    siteName: 'IMAP',
    images: [
      {
        url: 'https://ima-privee.vercel.app/icon.svg', // Customize this
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
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
