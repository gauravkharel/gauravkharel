import type { Metadata } from "next";
import "./globals.css";
import MotionWrapper from "./motion-wrapper";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Minimal Next.js starter with Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}
