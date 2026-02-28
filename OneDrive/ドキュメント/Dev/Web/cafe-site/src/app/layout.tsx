import type { Metadata } from "next";
import { Hina_Mincho, Yuji_Syuku } from "next/font/google";
import "./globals.css";

const hinaMincho = Hina_Mincho({
  weight: "400",
  preload: false,
  variable: "--font-hina-mincho",
});

const yujiSyuku = Yuji_Syuku({
  weight: "400",
  preload: false,
  variable: "--font-yuji-syuku",
});

export const metadata: Metadata = {
  title: "古民家カフェ 紬 -TSUMUGI- | 都会の喧騒を忘れる隠れ家",
  description: "築100年の古民家で、深呼吸したくなるような木の香りと、四季折々の中庭を眺めながら。こだわりの一杯と空間で、心と体を癒やす特別な時間を。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${hinaMincho.variable} ${yujiSyuku.variable} font-japanese antialiased`}>
        {children}
      </body>
    </html>
  );
}