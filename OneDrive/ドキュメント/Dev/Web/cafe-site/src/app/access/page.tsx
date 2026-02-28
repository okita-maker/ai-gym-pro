import Link from "next/link";
import Image from "next/image"; // 👈 追加

export default function Access() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fbfaf5]">
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
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl tracking-[0.3em] text-[#2c2620] mb-6">アクセス</h2>
          <p className="text-[#5c544a] tracking-[0.2em] leading-loose text-sm md:text-base">
            日常を離れた隠れ家へ。<br />
            迷わずお越しいただけるよう、ご案内いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* ▼ マップボタンエリア（背景に hero-image.jpg を設定！） */}
          <div className="relative w-full h-[400px] md:h-[600px] shadow-xl flex flex-col items-center justify-center p-8 text-center overflow-hidden">
            {/* 背景画像 */}
            <Image 
              src="/hero-image.jpg"
              alt="鎌倉駅周辺"
              fill
              className="object-cover"
            />
            {/* 画像を少し暗くして文字を見やすくするベール */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 text-white tracking-widest leading-loose mb-8">
              <p className="mb-4 text-2xl drop-shadow-lg">鎌倉駅 周辺マップ</p>
              {/* 不要なテキストは削除しました！ */}
            </div>
            
            {/* ボタンも白ベースに変えてオシャレに！ */}
            <a 
              href="https://maps.app.goo.gl/3Rbfo2kcwKRHqqYH7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 inline-block bg-[#fbfaf5] text-[#2c2620] hover:bg-[#d7cfba] px-10 py-4 text-sm tracking-[0.2em] transition duration-300 shadow-xl font-sans"
            >
              Googleマップで開く
            </a>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-[#2c2620]/5">
            <h3 className="text-3xl tracking-[0.3em] text-[#2c2620] mb-10 border-b border-[#2c2620]/10 pb-6">
              店舗情報
            </h3>

            <dl className="space-y-8 text-[#5c544a] tracking-[0.15em] text-sm md:text-base leading-loose font-sans">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                <dt className="text-[#8a816c] font-japanese text-lg">店名</dt>
                <dd className="md:col-span-2">古民家カフェ 紬 -TSUMUGI-</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-t border-[#d7cfba]/30 pt-8">
                <dt className="text-[#8a816c] font-japanese text-lg">住所</dt>
                <dd className="md:col-span-2">
                  〒248-0012<br />
                  神奈川県鎌倉市御成町 1-1-15<br />
                  <span className="text-xs text-[#8a816c] mt-2 inline-block">※鎌倉駅から徒歩15分、神社の裏手になります。</span>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-t border-[#d7cfba]/30 pt-8">
                <dt className="text-[#8a816c] font-japanese text-lg">営業時間</dt>
                <dd className="md:col-span-2">
                  11:00 ～ 18:00<br />
                  <span className="text-xs text-[#8a816c]">（ランチL.O. 14:00 / カフェL.O. 17:30）</span>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-t border-[#d7cfba]/30 pt-8">
                <dt className="text-[#8a816c] font-japanese text-lg">定休日</dt>
                <dd className="md:col-span-2">毎週 水曜日・木曜日</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-t border-[#d7cfba]/30 pt-8">
                <dt className="text-[#8a816c] font-japanese text-lg">駐車場</dt>
                <dd className="md:col-span-2">
                  専用駐車場 4台完備<br />
                  <span className="text-xs text-[#8a816c]">※満車の場合は近隣のコインパーキングをご利用ください。駐車券提示でドリンク1杯サービスいたします。</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}