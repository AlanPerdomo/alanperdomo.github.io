import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Alan Perdomo | Portfólio',
  description: 'Portfólio pessoal de Alan Perdomo',
  keywords: 'Desenvolvimento, Alan Perdomo, Portfólio, Tecnologia',
  authors: [{ name: 'Alan Perdomo' }],
  creator: 'Alan Perdomo',
  openGraph: {
    title: 'Alan Perdomo | Portfólio',
    description: 'Portfólio pessoal de Alan Perdomo',
    url: 'https://alanperdomo.github.io',
    siteName: 'Alan Perdomo | Portfólio',
    locale: 'pt-BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen bg-light-bg text-black dark:bg-dark-bg dark:text-white transition-colors duration-300">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
