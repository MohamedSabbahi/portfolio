import "./globals.css";

export const metadata = {
  title: "Mohamed Sabbahi — Full-Stack Developer",
  description:
    "Portfolio of Mohamed Sabbahi — Full Stack Developer (PERN), Mobile Dev, Cloud & AI Enthusiast. Computer Engineering student building clean, impactful software.",
  openGraph: {
    title: "Mohamed Sabbahi — Full-Stack Developer",
    description:
      "Full Stack Developer (PERN) | Mobile Dev | Cloud & AI Enthusiast",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
