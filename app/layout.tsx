import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { ThemeProvider } from '@/components/ThemeContext';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import Preloader from '@/components/Preloader';

export const metadata: Metadata = {
  title: 'Tejas K | Full-Stack Developer & MCA Candidate',
  description:
    'Professional portfolio of Tejas K, Master of Computer Applications (MCA) candidate at Christ University. Full-Stack Developer specializing in Java, Spring Boot, React, Next.js, and Cloud Computing.',
  keywords: [
    'Tejas K',
    'Full-Stack Developer',
    'MCA Candidate',
    'Christ University',
    'Java',
    'Spring Boot',
    'React',
    'Next.js',
    'Software Engineer Internship',
  ],
  authors: [{ name: 'Tejas K' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="charcoal">
      <body className="antialiased selection:bg-zinc-700 selection:text-white flex flex-col min-h-screen relative">
        <ThemeProvider>
          <Preloader />
          <BackgroundCanvas />
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow z-10 relative">{children}</main>
          <Footer />
          <ThemeSwitcher />
          <InteractiveTerminal />
        </ThemeProvider>
      </body>
    </html>
  );
}