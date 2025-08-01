import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Thet Htet Soe',
  description: 'Thet Htet Soe is a software engineer specializing in web and mobile development.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Thet Htet Soe',
    description: 'Software engineer building modern web and mobile apps.',
    url: 'https://portfolio-czb5.vercel.app',
    siteName: 'Thet Htet Soe',
    images: [
      {
        url: 'https://portfolio-czb5.vercel.app/dev-ed-wa.png',
        width: 1200,
        height: 630,
        alt: 'Thet Htet Soe Portfolio',
      },
    ],
    type: 'website',
  },
  verification: {
    google: '3k7-OFM_AoqIS--hAmjpohuHZiFRBSVu-qROlfKPrig', // <- put your actual verification code here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://portfolio-czb5.vercel.app" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
