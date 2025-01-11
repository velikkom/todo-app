import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../app/globals.css";

import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Desteklenen ağırlıklar: 400, 500, 700
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Desteklenen ağırlıklar
});

export const metadata = {
  title: "Todo App",
  description: "A simple todo application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
