import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Seymour | Portfolio",
  description: "Powered by Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
