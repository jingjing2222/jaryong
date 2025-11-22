import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKr.className}>
        {children}
      </body>
    </html>
  );
}
