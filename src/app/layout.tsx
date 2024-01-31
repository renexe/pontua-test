import { cn } from "@/lib/utils";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Pontua. Teste</title>
        <meta name="description" content="Esse é um teste para vaga de trabalho como desenvolvedor frontend na equipe da Pontua." />
      </head>
      <body className={cn(
        "min-h-screen font-sans antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}
