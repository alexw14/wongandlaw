import type { Metadata } from 'next';
import './globals.css';
import Headers from '@/components/Headers';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wong & Partners',
  description: 'Your trusted partner in legal services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
