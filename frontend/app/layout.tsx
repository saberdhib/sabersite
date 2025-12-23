import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
