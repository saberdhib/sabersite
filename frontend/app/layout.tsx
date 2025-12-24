import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  title: "Saber Dhib — AI & Data Solution Architect",
  description:
    "AI & Data Solution Architect specialized in AI strategy, GenAI, RAG, and data platforms.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
