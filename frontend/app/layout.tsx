import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/Footer";

export const metadata = {
  title: "Saber Dhib — AI & Data Solution Architect",
  description:
    "AI & Data Solution Architect specialized in AI strategy, GenAI, RAG, and data platforms.",
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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
