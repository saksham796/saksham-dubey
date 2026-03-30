import type { Metadata } from "next";
import "./globals.css";
import "./App.css";

export const metadata: Metadata = {
  title: "Saksham Dubey | Full Stack Developer Portfolio",
  description: "Explore the portfolio of Saksham Dubey, a Full Stack Developer with 4+ years of experience in React, Next.js, Node.js, and modern web technologies. Building scalable, high-performance web applications.",
  keywords: ["Saksham Dubey", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "Web Development", "Node.js Developer", "NestJS", "Cloudflare Developers"],
  authors: [{ name: "Saksham Dubey" }],
  creator: "Saksham Dubey",
  openGraph: {
    title: "Saksham Dubey | Full Stack Developer",
    description: "Personal portfolio of Saksham Dubey, showcasing projects and expertise in full stack development.",
    url: "https://sakshampy.in",
    siteName: "Saksham Dubey Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saksham Dubey Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Dubey | Full Stack Developer",
    description: "Explore the portfolio of Saksham Dubey, a Full Stack Developer building scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saksham Dubey",
    url: "https://sakshampy.in",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/saksham801",
      "https://linkedin.com/in/saksham-dubey-0451892a2",
    ],
    description: "Full Stack Developer with 4+ years of experience building scalable web applications.",
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sakshampy.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
