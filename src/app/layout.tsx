import QueryProvider from "@/app/providers/QueryProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Navbar />
          <main className="container mx-auto p-6">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
