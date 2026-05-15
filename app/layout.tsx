import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdselimreza.vercel.app"),
  title: {
    default: "Md. Selim Reza — Full Stack Developer",
    template: "%s | Md. Selim Reza",
  },
  description:
    "Full Stack Developer from Dhaka, Bangladesh. Building fast, scalable web apps with Next.js, React, Node.js, Express, PostgreSQL, and Prisma. Available for hire.",
  keywords: [
    "Md Selim Reza",
    "Md. Selim Reza",
    "Selim Reza developer",
    "Selim Reza web developer",
    "Md Selim Reza developer",
    "Md Selim Reza web developer",
    "Full Stack Developer Bangladesh",
    "Full Stack Developer Dhaka",
    "Next.js developer Bangladesh",
    "React developer portfolio",
    "Node.js Express PostgreSQL developer",
    "Green University Bangladesh developer",
    "selim2066",
    "msr2066",
    "msr2000",
    "Software Engineer Bangladesh",
    "Md Selim Reza software engineer",
    "Md Selim Reza Backend Developer",
    "graduate of Green University of Bangladesh",
    "Full Stack Developer available for hire",
    "graduate in Computer Science and Engineering","Next.js React Node.js PostgreSQL developer",
  ],
  authors: [{ name: "Md. Selim Reza", url: "https://mdselimreza.vercel.app" }],
  creator: "Md. Selim Reza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdselimreza.vercel.app",
    siteName: "Md. Selim Reza — Portfolio",
    title: "Md. Selim Reza — Full Stack Developer",
    description:
      "Full Stack Developer from Dhaka, Bangladesh. Building fast, scalable web apps with Next.js, React, Node.js, and PostgreSQL.",
    images: [
      {
        url: "/me-prof.jpeg",
        width: 800,
        height: 800,
        alt: "Md. Selim Reza — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Selim Reza — Full Stack Developer",
    description:
      "Full Stack Developer from Dhaka, Bangladesh. Next.js, React, Node.js, PostgreSQL.",
    images: ["/me-prof.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://mdselimreza.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md. Selim Reza",
              url: "https://mdselimreza.vercel.app",
              jobTitle: "Full Stack Developer",
              email: "mdselimreza2066@email.com",
              telephone: "+880 1580-912090",
              worksFor: { "@type": "Organization", name: "Battery Low Interactive" },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Green University of Bangladesh",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "BD",
              },
              sameAs: [
                "https://github.com/selim2000",
                "https://linkedin.com/in/mdselimreza2000/",
                "https://www.facebook.com/mdselimreza2000",
              ],
            }),
          }}
        />
      </head>
      <body className="noise">
        {children}
      </body>
    </html>
  );
}