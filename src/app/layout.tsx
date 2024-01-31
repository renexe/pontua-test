import { Inter } from "next/font/google";
import { Epilogue } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
})

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
