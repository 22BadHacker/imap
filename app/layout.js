
import "./globals.css";
import Head from "next/head";




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
        className={` w-screen overflow-x-hidden bg-[#fff] h-auto    antialiased`}
      >



        <div className="">
          {children}

        </div>
        


      </body>
    </html>
  );
}
