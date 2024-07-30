import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
// import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woman from Outer Space",
  description: "Follow us on a journey about a woman not from this earth but decided to grace us with her presence as the queen she is",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}