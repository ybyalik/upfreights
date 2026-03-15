import type { Metadata } from "next";
import { Bitter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import "./globals.css";

// Optimized font loading - reduced from 8 files to 4 files (50% reduction)
// Only load weights actually used: regular (400) and semibold (600)
const bitter = Bitter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
  fallback: ["Georgia", "serif"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
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
        <meta name="google-site-verification" content="ehqAjXNa7uK2k_ZM6UkL29os0rjavxgD4mqEpLXQwlo" />
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CBNKQW3M71"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CBNKQW3M71');
          `}
        </Script>
      </head>
      <body
        className={`${bitter.variable} ${jakarta.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
