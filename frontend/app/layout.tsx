import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "My App",
  description: "My project",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
