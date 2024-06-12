import "./globals.css";
import { bricolage_grotesque } from './fonts'

export const metadata = {
  title: "I Remind Your Lazy Ass to Stand Up!",
  description: "Created by Jonas Haas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bricolage_grotesque.className}>
      <body>{children}</body>
    </html>
  );
}