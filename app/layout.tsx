import type { Metadata } from "next";
import './globals.css';

import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Made by Dmytro Farbun"
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}