import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/SessionProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AI Travel Assistant",
  description: "Plan your travels with AI-powered recommendations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <QueryProvider>
          <AuthProvider>
            <Navbar />
            <main className="container mx-auto p-6">{children}</main>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
