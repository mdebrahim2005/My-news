import { Geist, Montserrat, Poppins } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

 export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "News",
  description: "international news ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className= " h-full antialiased"
    >
    <body className={`${poppins.variable} min-h-full flex flex-col`} suppressHydrationWarning
      >
     
      {children}</body>
    </html>
  );
}
