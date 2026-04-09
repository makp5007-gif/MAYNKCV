import type {Metadata} from 'next';
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Mayank Parmar | Performance Marketing Specialist',
  description: 'Performance Marketing Specialist driving predictable revenue. 5+ years scaling ROI-focused campaigns across UAE & GCC.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mayankparmar.com/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://mayankparmar.com/',
    title: 'Mayank Parmar | Performance Marketing Specialist',
    description: 'Performance Marketing Specialist driving predictable revenue. 5+ years scaling ROI-focused campaigns across UAE & GCC.',
    images: ['https://mayankparmar.com/og-image.png'],
    siteName: 'Mayank Parmar',
  },
  twitter: {
    card: 'summary',
    title: 'Mayank Parmar | Performance Marketing Specialist',
    description: 'Performance Marketing Specialist driving predictable revenue. 5+ years scaling ROI-focused campaigns across UAE & GCC.',
    images: ['https://mayankparmar.com/og-image.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mayank Parmar",
              "url": "https://mayankparmar.com/",
              "description": "Performance Marketing Specialist driving predictable revenue."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mayank Parmar",
              "url": "https://mayankparmar.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mayankparmar.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans antialiased selection:bg-white/20" suppressHydrationWarning>
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0' }}>
          Mayank Parmar - Performance Marketing Specialist in Dubai, UAE
        </h1>
        {children}
      </body>
    </html>
  );
}
