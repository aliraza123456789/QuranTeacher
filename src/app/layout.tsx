import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Quran Teacher - Learn Quran Online",
  description: "Learn Quran online with qualified teachers. Book your free trial today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
