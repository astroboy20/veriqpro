import type { Metadata } from "next";
import { Inter, Faustina } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ["latin"] });
const faustina = Faustina({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-faustina",
});

export const metadata: Metadata = {
  title: "Veriqpro",
  description: "Verify your products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={faustina.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
