import { cn } from "@/lib/utils";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Pontua. Teste</title>
        <meta name="description" content="Esse é um teste para vaga de trabalho como desenvolvedor frontend na equipe da Pontua." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn(
        "min-h-screen font-sans antialiased"
      )}>
        {children}

        <Script
          id="clarity-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "kv43ypz6lq");
            `,
          }}
        />
      </body>
    </html>
  );
}
