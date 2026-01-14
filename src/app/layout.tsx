import type { Metadata } from "next";
import { Bitter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingQuoteButton } from "@/components/layout/FloatingQuoteButton";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upfreights.com"),
  title: {
    default: "UpFreights - International Freight Forwarding from China",
    template: "%s | UpFreights",
  },
  description:
    "Reliable freight forwarding services from China to the world. Sea freight, air freight, door-to-door delivery, and customs clearance. Get a free quote today.",
  authors: [{ name: "UpFreights" }],
  creator: "UpFreights",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upfreights.com",
    siteName: "UpFreights",
    title: "UpFreights - International Freight Forwarding from China",
    description:
      "Reliable freight forwarding services from China to the world. Sea freight, air freight, door-to-door delivery, and customs clearance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UpFreights - International Freight Forwarding from China",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UpFreights - International Freight Forwarding from China",
    description:
      "Reliable freight forwarding services from China to the world.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body
        className={`${bitter.variable} ${jakarta.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingQuoteButton />
      </body>
    </html>
  );
}
