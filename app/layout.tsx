import type { Metadata } from "next";

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
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}