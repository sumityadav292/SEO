
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sumityadav-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sumit Yadav | Official Website",
    template: "%s | Sumit Yadav",
  },
  description:
    "Official personal website of Sumit Yadav, a web developer focused on React.js, JavaScript and full-stack web projects. Visit the portfolio, projects and professional profiles.",
  applicationName: "Sumit Yadav Official Website",
  authors: [{ name: "Sumit Yadav", url: siteUrl }],
  creator: "Sumit Yadav",
  publisher: "Sumit Yadav",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Sumit Yadav | Official Website",
    description:
      "Explore the official online identity of Sumit Yadav and visit his web development portfolio.",
    siteName: "Sumit Yadav",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Yadav | Official Website",
    description:
      "Official website of Sumit Yadav. Explore web development projects and portfolio.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b16",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#sumit-yadav`,
  name: "Sumit Yadav",
  url: siteUrl,
  description:
    "Web developer focused on React.js, JavaScript and full-stack web projects.",
  jobTitle: "Web Developer",
  knowsAbout: [
    "Web Development",
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://sumityadavportfolio1.netlify.app/",
    "https://github.com/sumityadav292"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
