import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { ProfessionSwitcher } from '@/components/profession-switcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammed HAJI - Portfolio',
  description: 'Software Engineer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <div className="w-full">
            <ProfessionSwitcher />
            <main className="w-full">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}