"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "席のご予約",
    date: "",
    time: "12:00",
    people: "1名",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", type: "席のご予約", date: "", time: "12:00", people: "1名", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fbfaf5]">
      <div className="fixed inset-0 bg-white/50 pointer-events-none z-0"></div>

      {/* ▼ 共通ヘッダー（白文字） */}
      {/* ▼ 共通ヘッダー（白文字） */}
      <header className="absolute top-0 w-full z-50 bg-gradient-to-b from-black/50 to-transparent py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-white drop-shadow-md">
          <Link href="/" className="font-logo text-3xl md:text-4xl tracking-widest hover:opacity-80 transition drop-shadow-md">紬</Link>
          <nav className="flex gap-4 md:gap-8 text-xs md:text-sm tracking-[0.3em] items-center">
            <Link href="/#concept" className="hidden md:block transition border-b border-transparent pb-1 hover:border-white">コンセプト</Link>
            <Link href="/menu" className="transition border-b border-transparent pb-1 hover:border-white">お品書き</Link>
            <Link href="/access" className="transition border-b border-transparent pb-1 hover:border-white">アクセス</Link>
            <Link href="/contact" className="ml-2 md:ml-4 px-4 py-2 md:px-6 md:py-3 tracking-[0.2em] transition duration-300 border border-white bg-white/20 hover:bg-white hover:text-[#2c2620] backdrop-blur-sm">WEB予約</Link>
          </nav>
        </div>
      </header>

      {/* ▼ ヒーロー画像 */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden z-10">
        <Image 
          src="/reserve-image.jpg" 
          alt="ご予約イメージ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <main className="relative z-10 pt-20 pb-24 px-4 md:px-10 max-w-[1000px] mx-auto">
        
        {/* ▼ タイトル（うっすら背景にあった「ご予約」を削除！） */}
        <div className="text-center mb-16 relative">
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl tracking-[0.3em] text-[#2c2620] mb-6">ご予約・お問い合わせ</h2>
                <p className="text-[#5c544a] tracking-[0.2em] leading-loose text-sm md:text-base">
                    当店でのお時間を心地よくお過ごしいただくため、<br className="hidden md:block"/>
                    事前のご予約をおすすめしております。<br/>
                    以下のフォームより、お気軽にお申し付けください。
                </p>
            </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md border border-[#2c2620]/10 p-8 md:p-16 shadow-2xl rounded-sm">
          {status === "success" ? (
            <div className="text-center py-10 space-y-8 animate-fade-in-up">
              <p className="text-5xl">🌿</p>
              <p className="text-[#2c2620] tracking-[0.2em] text-xl">メッセージを承りました。</p>
              <p className="text-[#5c544a] text-sm md:text-base leading-loose tracking-[0.1em]">
                お問い合わせありがとうございます。<br/>
                内容を確認次第、担当者よりご連絡させていただきます。<br/>
                今しばらくお待ちくださいませ。
              </p>
              <div className="pt-8">
                <button onClick={() => setStatus("")} className="inline-block border border-[#8a816c] text-[#2c2620] hover:bg-[#2c2620] hover:text-[#fbfaf5] px-12 py-4 text-sm tracking-[0.3em] transition duration-500">
                  続けて入力する
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative">
              
              {/* ▼ フォーム内にあった「紬」のロゴ文字を削除！ */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
                <div>
                  <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">お名前 <span className="text-[#8a816c] text-xs">*</span></label>
                  <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition font-sans" placeholder="例：山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">メールアドレス <span className="text-[#8a816c] text-xs">*</span></label>
                  <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition font-sans" placeholder="例：mail@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">ご用件 <span className="text-[#8a816c] text-xs">*</span></label>
                <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition appearance-none font-sans relative z-10">
                  <option value="席のご予約">席のご予約</option>
                  <option value="テイクアウト事前注文">テイクアウト事前注文</option>
                  <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
                <div>
                  <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">ご希望日</label>
                  <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition font-sans" />
                </div>
                <div>
                  <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">ご希望時間</label>
                  <select name="time" value={formData.time} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition appearance-none font-sans">
                    <option value="11:00">11:00</option><option value="11:30">11:30</option>
                    <option value="12:00">12:00</option><option value="12:30">12:30</option>
                    <option value="13:00">13:00</option><option value="13:30">13:30</option>
                    <option value="14:00">14:00</option><option value="14:30">14:30</option>
                    <option value="15:00">15:00</option><option value="15:30">15:30</option>
                    <option value="16:00">16:00</option><option value="16:30">16:30</option>
                    <option value="17:00">17:00</option><option value="17:30">17:30</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">ご利用人数</label>
                  <select name="people" value={formData.people} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition appearance-none font-sans">
                    <option value="1名">1名</option><option value="2名">2名</option>
                    <option value="3名">3名</option><option value="4名">4名</option>
                    <option value="5名以上">5名以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#5c544a] tracking-[0.2em] mb-3">メッセージ・アレルギー等</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-white/50 border border-[#d7cfba] p-4 text-[#2c2620] focus:outline-none focus:border-[#8a816c] focus:bg-white transition resize-none font-sans" placeholder="ご要望などがございましたら、ご自由にご記入ください。"></textarea>
              </div>
              
              <button type="submit" disabled={status === "loading"} className={`w-full py-5 text-sm tracking-[0.4em] transition duration-500 shadow-lg mt-4 z-10 relative ${status === "loading" ? "bg-[#d7cfba] text-[#2c2620] cursor-not-allowed" : "bg-[#2c2620] text-[#fbfaf5] hover:bg-[#4a4238] hover:shadow-xl"}`}>
                {status === "loading" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}