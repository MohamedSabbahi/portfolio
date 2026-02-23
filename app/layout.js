import "./globals.css";

export const metadata = {
  title: "Mohamed Sabbahi — Software Engineer | Aspiring Cloud Professional",
  description:
    "Portfolio of Mohamed Sabbahi — Software Engineer | Aspiring Cloud Professional. Full-Stack Developer (PERN), Mobile Dev. Graduating June 2026. Building robust full-stack applications and expanding my expertise in backend architecture.",
  openGraph: {
    title: "Mohamed Sabbahi — Software Engineer | Aspiring Cloud Professional",
    description:
      "Software Engineer | Aspiring Cloud Professional | Mobile & AI | Graduating June 2026",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
