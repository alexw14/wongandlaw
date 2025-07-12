import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import Headers from '@/components/Headers';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wong & Partners',
  description: 'Your trusted partner in legal services.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Headers />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
