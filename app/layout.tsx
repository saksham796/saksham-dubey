import type { Metadata } from "next";
import "./globals.css";
import "./App.css";

export const metadata: Metadata = {
  title: "Saksham Dubey | Portfolio",
  description: "Personal portfolio of Saksham Dubey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
