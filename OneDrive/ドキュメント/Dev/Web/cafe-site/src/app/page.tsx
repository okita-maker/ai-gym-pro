"use client"; 

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fbfaf5]">
      
      {/* ▼ 追従ヘッダー */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 pointer-events-auto ${isScrolled ? "bg-[#fbfaf5]/95 backdrop-blur-md shadow-md py-4" : "bg-gradient-to-b from-black/50 to-transparent py-6"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* ▼ 丸枠を外し、文字を大きくして料亭のような高級感のあるロゴに！ */}
          <Link href="/" className={`font-logo text-3xl md:text-4xl tracking-widest transition-opacity duration-500 ${isScrolled ? "opacity-100 text-[#2c2620]" : "opacity-0 pointer-events-none"}`}>
            紬
          </Link>

          <nav className={`flex gap-4 md:gap-8 text-xs md:text-sm tracking-[0.3em] items-center transition-colors duration-500 ${isScrolled ? "text-[#2c2620]" : "text-white"}`}>
            {/* ▼ / を消して href="#concept" にすることで、トップページ内で確実にスクロールします！ */}
            <a href="#concept" className={`hidden md:block transition border-b border-transparent pb-1 ${isScrolled ? "hover:border-[#2c2620]" : "hover:text-[#d7cfba] hover:border-[#d7cfba]"}`}>コンセプト</a>
            <Link href="/menu" className={`transition border-b border-transparent pb-1 ${isScrolled ? "hover:border-[#2c2620]" : "hover:text-[#d7cfba] hover:border-[#d7cfba]"}`}>お品書き</Link>
            <Link href="/access" className={`transition border-b border-transparent pb-1 ${isScrolled ? "hover:border-[#2c2620]" : "hover:text-[#d7cfba] hover:border-[#d7cfba]"}`}>アクセス</Link>
            
            <Link href="/contact" className={`ml-2 md:ml-4 px-4 py-2 md:px-6 md:py-3 tracking-[0.2em] transition duration-300 border ${isScrolled ? "border-[#2c2620] bg-[#2c2620] text-[#fbfaf5] hover:bg-transparent hover:text-[#2c2620]" : "border-white bg-white/20 hover:bg-white hover:text-[#2c2620] backdrop-blur-sm"}`}>
              WEB予約
            </Link>
          </nav>
        </div>
      </header>

      {/* ▼ ヒーローエリア */}
      <section className="relative w-screen h-screen overflow-hidden z-10">
        <Image 
          src="/hero-image.jpg"
          alt="古民家カフェ 紬"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-0 left-0 w-full pt-32 pb-16 px-10 md:pb-20 md:px-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <div className="relative inline-block border-2 border-[#8a816c] rounded-full p-6 md:p-8 mb-6 drop-shadow-lg">
                <h2 className="text-6xl md:text-8xl tracking-[0.2em]">紬</h2>
            </div>
            <p className="text-2xl md:text-3xl tracking-[0.4em] text-white/90 mb-4 drop-shadow-md">TSUMUGI</p>
            <p className="tracking-[0.4em] text-sm md:text-lg leading-loose drop-shadow-lg max-w-2xl">
              花とカフェのある日々。<br />
              時を忘れる、日常の隠れ家。
            </p>
          </div>
        </div>
      </section>

      {/* ▼ ストーリー＆動画エリア */}
      <section id="concept" className="py-32 px-10 md:px-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 lg:pr-10">
            <div className="flex items-center gap-6 mb-12 border-b border-[#2c2620]/10 pb-4">
              <span className="text-4xl text-[#8a816c]/60">壱</span>
              <h3 className="text-2xl tracking-[0.4em] text-[#2c2620]">物語</h3>
            </div>
            <p className="text-3xl tracking-[0.2em] mb-10 text-[#2c2620] leading-relaxed">
              都会の喧騒から、少しだけ離れて。
            </p>
            <div className="space-y-6 text-base md:text-lg leading-loose tracking-[0.2em] text-[#5c544a]">
              <p>深呼吸したくなるような木の香りと、四季折々の表情を見せる中庭。</p>
              <p>「いまの気持ち」を、こだわりの一杯と空間に込めてお届けします。</p>
            </div>
          </div>

          <div className="relative h-[60vh] md:h-[70vh] w-full shadow-xl order-1 lg:order-2 border-8 border-white bg-white">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/cafe-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ▼ 空間エリア */}
      <section className="py-32 px-6 md:px-10 relative bg-white/50 border-y border-[#2c2620]/5 z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 relative h-[600px] md:h-[700px] w-full">
            <div className="absolute top-0 right-0 w-4/5 h-[450px] shadow-lg border-8 border-white">
              <Image src="/concept-image.jpg" alt="カフェの空間" fill className="object-cover" />
            </div>
            <div className="absolute bottom-10 left-0 w-3/5 h-[350px] shadow-2xl border-8 border-white">
              <Image src="/concept-image2.jpg" alt="こだわりのコーヒー" fill className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-5 text-left lg:pl-10">
            <div className="flex items-center gap-6 mb-10 border-b border-[#2c2620]/10 pb-4">
              <span className="text-4xl text-[#8a816c]/60">弐</span>
              <h3 className="text-2xl tracking-[0.4em] text-[#2c2620]">空間</h3>
            </div>
            <p className="text-3xl tracking-[0.2em] mb-10 text-[#2c2620] leading-relaxed">
              心と体を癒やす、<br />特別な時間をご用意して。
            </p>
            <p className="text-base md:text-lg leading-loose tracking-[0.2em] text-[#5c544a]">
              築100年の歴史を持つ柱や梁はそのままに。<br />
              どこか懐かしく、そして新しい。<br />
              大切な人との語らいや、一人で読書に耽る午後。<br />
              あなただけの時間をお過ごしください。
            </p>
          </div>
        </div>
      </section>

      {/* ▼ 予約への導線（背景画像でドラマチックに強調！） */}
      <section className="relative py-40 px-6 text-center z-10 flex flex-col items-center justify-center overflow-hidden">
        {/* 背景画像と暗いベール */}
        <div className="absolute inset-0 z-0">
          <Image src="/reserve-image.jpg" alt="ご予約" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl tracking-[0.3em] mb-16 text-white drop-shadow-lg">ご予約・お問い合わせ</h3>
          
          <Link href="/contact" className="inline-block group relative">
            <div className="absolute inset-0 bg-[#fbfaf5] scale-100 group-hover:scale-105 transition duration-500 shadow-xl"></div>
            <div className="relative z-10 text-[#2c2620] px-16 py-6 md:px-20 md:py-6 text-sm tracking-[0.4em] flex items-center gap-4">
              WEB予約はこちら 
              <span className="group-hover:translate-x-2 transition duration-500">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ▼ フッター（コピーライトを消し、実用的な住所と電話番号に！） */}
      <footer className="py-16 text-center text-[#5c544a] text-sm tracking-widest border-t border-[#2c2620]/10 z-10 relative bg-white/50">
        <h4 className="mb-6 text-xl md:text-2xl font-japanese text-[#2c2620] tracking-[0.2em]">古民家カフェ 紬 -TSUMUGI-</h4>
        <div className="space-y-3 font-sans text-xs md:text-sm tracking-[0.15em]">
          <p>〒248-0012 神奈川県鎌倉市御成町 1-1-15</p>
          <p>TEL: 0467-00-0000</p>
        </div>
      </footer>
    </div>
  );
}