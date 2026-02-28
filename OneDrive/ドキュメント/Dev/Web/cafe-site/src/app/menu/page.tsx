import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fbfaf5]">
      
      {/* 背景の和紙テクスチャ */}
      <div className="fixed inset-0 bg-white/50 pointer-events-none z-0"></div>

     {/* ▼ 共通ヘッダー（墨色文字） */}
      <header className="absolute top-0 w-full z-50 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-[#2c2620]">
          <Link href="/" className="font-logo text-3xl md:text-4xl tracking-widest hover:text-[#8a816c] transition">紬</Link>
          <nav className="flex gap-4 md:gap-8 text-xs md:text-sm tracking-[0.3em] items-center">
            <Link href="/#concept" className="hidden md:block transition border-b border-transparent pb-1 hover:border-[#2c2620]">コンセプト</Link>
            <Link href="/menu" className="transition border-b border-transparent pb-1 hover:border-[#2c2620]">お品書き</Link>
            <Link href="/access" className="transition border-b border-transparent pb-1 hover:border-[#2c2620]">アクセス</Link>
            <Link href="/contact" className="ml-2 md:ml-4 px-4 py-2 md:px-6 md:py-3 tracking-[0.2em] transition duration-300 border border-[#2c2620] hover:bg-[#2c2620] hover:text-[#fbfaf5]">WEB予約</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-32 px-6 md:px-10 max-w-[1200px] mx-auto">
        
        {/* タイトル */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl tracking-[0.3em] text-[#2c2620] mb-6">お品書き</h2>
          <p className="text-[#5c544a] tracking-[0.2em] leading-loose text-sm md:text-base">
            その日、その季節のいちばん美味しいものを。<br />
            ひとくちごとに、心がほどけるような時間をお届けします。
          </p>
        </div>

        {/* ▼ メニュー①：高単価な食事メニュー（ペルソナ②に刺さる） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <div className="relative w-full h-[350px] md:h-[500px] shadow-2xl border-8 border-white">
            <Image 
              src="/menu-food-new.jpg" // 👈 ご用意いただくお食事の画像
              alt="季節の古民家御膳"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-3xl tracking-[0.2em] text-[#2c2620] mb-2">季節の古民家御膳</h3>
            <p className="font-sans text-[#8a816c] tracking-[0.2em] mb-8">¥ 2,500 <span className="text-xs">(税込)</span></p>
            <p className="text-[#5c544a] text-sm md:text-base leading-[2.5] tracking-[0.2em]">
              地元の契約農家から毎朝届く、採れたての無農薬野菜をふんだんに使用。<br />
              素材本来の甘みや旨みを最大限に引き出すため、丁寧に出汁を取り、少しずつたくさんの種類を味わえるよう小鉢に彩りました。<br />
              心も体も喜ぶ、当店自慢の特別な御膳です。
            </p>
          </div>
        </div>

        {/* ▼ メニュー②：スイーツと珈琲（ペルソナ①に刺さる） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <div className="order-2 md:order-1 text-left md:text-right">
            <h3 className="text-3xl tracking-[0.2em] text-[#2c2620] mb-2">濃茶のテリーヌと<br className="md:hidden"/>自家焙煎珈琲</h3>
            <p className="font-sans text-[#8a816c] tracking-[0.2em] mb-8">¥ 1,200 <span className="text-xs">(税込)</span></p>
            <p className="text-[#5c544a] text-sm md:text-base leading-[2.5] tracking-[0.2em]">
              京都・宇治の厳選されたお抹茶を贅沢に練り込んだ、口どけなめらかな濃厚テリーヌ。<br />
              一口食べれば、深い緑の香りが広がります。<br />
              甘さを抑えたスイーツにぴったり合うようブレンドされた、こだわりの自家焙煎珈琲とともにお召し上がりください。
            </p>
          </div>
          <div className="order-1 md:order-2 relative w-full h-[350px] md:h-[500px] shadow-2xl border-8 border-white">
            <Image 
              src="/menu-sweets-new.jpg" // 👈 ご用意いただくスイーツの画像
              alt="濃茶のテリーヌ"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 予約への導線 */}
        <div className="text-center pt-16 border-t border-[#2c2620]/10">
          <p className="text-[#5c544a] tracking-[0.2em] mb-8">お席の確保・テイクアウトのご注文はこちら</p>
          <Link href="/contact" className="inline-block border border-[#2c2620] text-[#2c2620] hover:bg-[#2c2620] hover:text-[#fbfaf5] px-16 py-5 text-sm tracking-[0.4em] transition duration-500 shadow-md">
            ご予約へ進む
          </Link>
        </div>

      </main>
    </div>
  );
}