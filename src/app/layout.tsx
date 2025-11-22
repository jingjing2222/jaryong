import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const shilla = localFont({
  src: [
    {
      path: "./fonts/Shilla_CultureM-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Shilla_CultureB-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shilla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "조자룡의 이야기",
  description: "삼국지 연의 속 조자룡의 일생을 따라가는 인터랙티브 스토리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${shilla.variable} ${shilla.className}`}>
      <body>{children}</body>
    </html>
  );
}
