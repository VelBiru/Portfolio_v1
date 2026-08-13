import type { Metadata } from "next";
import { Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aville Malintad - Portfolio",
  description: "Graphic & UI/UX Designer and Interactive Web Application Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${poppins.variable} dark scroll-smooth`}
    >
      <body className="bg-[#0B0D0E] text-white font-body antialiased min-h-screen selection:bg-[#00E599] selection:text-black">
        {children}
      </body>
    </html>
  );
}

