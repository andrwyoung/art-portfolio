import type { Metadata } from "next";
import { Caveat_Brush, Figtree, Recursive } from "next/font/google";
import "./globals.css";

const logoFont = Caveat_Brush({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

const headerFont = Recursive({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Andrew Yong Illustrator",
  description:
    "Andrew Yong art portfolio for travel, food editorial and advertising illustration",

  metadataBase: new URL("https://andrewyong.art"),

  keywords: [
    "illustrator",
    "editorial artist",
    "food editorial illustration",
    "travel art",
    "Andrew Yong art",
    "Andrew Yong national parks",
    "Andrew Yong illustration",
    "No AI art",
    "digital painting",
    "national park posters",
    "food drawings",
  ],

  authors: [{ name: "Andrew Yong" }],
  creator: "Andrew Yong",

  openGraph: {
    title: "Andrew Yong Illustration",
    description:
      "Andrew Yong art portfolio for travel, food editorial and advertising illustration",
    url: "https://andrewyong.art",
    siteName: "Andrew Yong Illustration",
    images: [
      {
        url: "/og-image.jpg", // ideal: 1200x630
        width: 1480,
        height: 893,
        alt: "Andrew Yong illustration portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${logoFont.variable} ${headerFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
