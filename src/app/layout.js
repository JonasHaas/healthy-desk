import localFont from "next/font/local";
import "./globals.css";


const bricolage_grotesque = localFont({
  src: [
    {
      path: '../../public/fonts/BricolageGrotesque-Regular.ttf',
      weight: '400',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../../public/fonts/BricolageGrotesque-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
      display: 'swap'
    }
  ],
});

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
