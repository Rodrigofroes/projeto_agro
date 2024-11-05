import type { Metadata } from "next";
import '../public/css/adminlte.min.css';
import '../public/plugins/fontawesome-free/css/all.min.css';
import { League_Spartan } from 'next/font/google';

const league = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Agro coleta",
  description: "Sistema de controle de talhões",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="pt-br">
      <body className={league.className}>
        {children}
        <script src="/plugins/jquery/jquery.min.js" />
        <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js" />
        <script src="/js/adminlte.js" />
      </body>
    </html>
  );
}
