import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Top Lining Wholesale Shop in Ambala | Haryana Textile Agency",
    template: "%s | Haryana Textile Agency",
  },
  description:
    "Haryana Textile Agency is a trusted lining fabric wholesaler in Ambala since 1995. Authorised dealer of Vimal Poplin, Pagri Rubia, Full Voile & all matching textile products. Wholesale cloth shop in Ambala, Haryana.",
  keywords: [
    "top lining wholesale shop in ambala",
    "lining wholesaler in ambala",
    "lining fabric wholesale ambala",
    "textile wholesaler in ambala",
    "wholesale cloth shop in ambala",
    "vimal poplin authorised dealer ambala",
    "pagri rubia wholesale",
    "full voile wholesaler haryana",
  ],
  authors: [{ name: "Haryana Textile Agency" }],
  creator: "Haryana Textile Agency",
  publisher: "Haryana Textile Agency",

  openGraph: {
    title: "Top Lining Wholesale Shop in Ambala | Haryana Textile Agency",
    description:
      "Wholesale lining fabric shop in Ambala since 1995. Authorised dealer of Vimal Poplin, Pagri Rubia, Full Voile & matching textile products.",
    type: "website",
    locale: "en_IN",
    siteName: "Haryana Textile Agency",
  },

  alternates: {
    canonical: "https://www.haryanatextileagency.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
