import Image from "next/image";
import Link from "next/link";

export default function GymPage() {
  return (
    // text-white: 黒背景に白文字は一番コントラストが高く、「強い印象」を与える
    // leading-tight: 行間をギュッと詰めることで、のんびりさせず「情報量」を感じさせる
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black leading-tight">

      {/* ▼ 緊急告知バー（画面の一番上で点滅して注意を引く！） */}
      <div className="bg-yellow-400 text-black text-center py-1 font-black text-sm animate-pulse tracking-widest">
        ⚠️ 残り3枠！入会金無料キャンペーン実施中 ⚠️
      </div>

      {/* ▼ ヘッダー（あえて背景を濃くして、中身を強調） */}
      <header className="sticky top-0 z-50 bg-black/90 border-b-2 border-yellow-400">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* italic: 斜体にすると「スピード感」が出る */}
          <h1 className="text-3xl font-black italic tracking-tighter text-white transform -skew-x-12">
            FUTURE <span className="text-yellow-400">FIT</span>
          </h1>
          {/* shadow: 影をつけるとボタンが飛び出して見え、押したくなる */}
          <Link href="/booking">
            <button className="bg-yellow-400 text-black font-black px-4 py-2 rounded border-2 border-white hover:bg-white hover:border-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none">
              予約する ▶
            </button>
          </Link>
        </div>
      </header>

      {/* ▼ ヒーローエリア（隙間をなくして画面いっぱいに！） */}
      <section className="relative border-b-4 border-yellow-400">
        {/* 画像を暗くして文字を目立たせる */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* 背景画像（publicフォルダの画像） */}
        <Image
          src="/hero-image.jpg"
          alt="Gym Hero"
          fill
          className="object-cover z-0"
          priority
        />
        
        {/* 文字エリア：真ん中にドカンと置く */}
        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          {/* バッジ風のデザインで「特別感」を出す */}
          <span className="inline-block bg-cyan-500 text-black font-black px-3 py-1 mb-4 transform -rotate-2 border-2 border-white text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            AI × サイバーパンク
          </span>
          
          {/* 巨大文字：あえて改行して視線を縦に誘導 */}
          <h2 className="text-6xl md:text-8xl font-black mb-2 text-white drop-shadow-[0_5px_0_rgba(0,0,0,1)]">
            人類の<br/>
            <span className="text-yellow-400">限界突破。</span>
          </h2>
          
          <p className="text-xl font-bold bg-black/70 inline-block px-4 py-2 mb-8 border border-white/30">
            あなたのDNAを解析し、最短ルートで最強の体へ。
          </p>

          {/* CTAボタン：一番目立つ色（黄色）×黒文字は「警告色」で本能に訴える */}
          <div className="flex justify-center">
            <Link href="/booking" className="w-full md:w-auto">
              <button className="w-full bg-yellow-400 text-black text-2xl font-black py-4 px-12 border-4 border-black hover:bg-white hover:text-black transition transform hover:scale-105 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                無料体験を予約する ＞
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ▼ 権威性エリア（狭い間隔で並べて「実績の多さ」を感じさせる） */}
      <section className="bg-zinc-900 py-6 border-b border-white/20">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-2 text-center divide-x divide-white/20">
          <div>
            <p className="text-xs text-gray-400 font-bold">満足度</p>
            <p className="text-3xl font-black text-yellow-400 italic">No.1</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold">継続率</p>
            <p className="text-3xl font-black text-cyan-400 italic">98%</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold">減量実績</p>
            <p className="text-3xl font-black text-pink-500 italic">-15kg</p>
          </div>
        </div>
      </section>

      {/* ▼ メリット（カード型にして情報を整理） */}
      <section className="py-12 px-4 container mx-auto bg-black">
        <h3 className="text-4xl font-black text-center mb-8 uppercase italic">
          <span className="border-b-4 border-yellow-400">Why Future Fit?</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* box-decoration: 枠線で囲むことで「お得なパック」のように見せる */}
          {[
            { title: "⚡ AI完全管理", desc: "重さも回数もAIが指示。脳死で従うだけで筋肉がつきます。" },
            { title: "🥗 食事解析", desc: "写真を撮るだけ。足りない栄養素をAIが3秒でアドバイス。" },
            { title: "💤 24Hサポート", desc: "深夜3時の不安もAIトレーナーが即レスで解消します。" },
            { title: "🧬 DNA検査", desc: "生まれ持った体質を知り、無駄な努力をゼロにします。" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 p-6 border-l-8 border-yellow-400 hover:bg-zinc-800 transition">
              <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ▼ 口コミ（吹き出しデザインで「リアル感」を出す） */}
      <section className="py-12 bg-white text-black px-4 relative overflow-hidden">
        {/* 背景に巨大な文字を置いて賑やかし */}
        <div className="absolute top-0 left-0 text-9xl font-black text-gray-100 opacity-50 select-none z-0">VOICE</div>
        
        <div className="container mx-auto relative z-10">
          <h3 className="text-3xl font-black text-center mb-8 border-4 border-black inline-block px-4 py-1 bg-yellow-400 transform -rotate-1 mx-auto block w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            利用者の声
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white p-6 border-4 border-black relative shadow-[8px_8px_0px_0px_rgba(200,200,200,1)]">
              <p className="font-bold text-lg mb-4">「AIの言う通りにしたら、人生で初めて腹筋が割れました！」</p>
              <div className="flex items-center gap-3 border-t border-gray-700 pt-3">
                <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
                   <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
                </div>
                <span className="text-sm font-bold text-yellow-400">K.T様 (30代男性)</span>
              </div>
            </div>
            <div className="bg-black text-white p-6 border-4 border-black relative shadow-[8px_8px_0px_0px_rgba(200,200,200,1)]">
              <p className="font-bold text-lg mb-4">「トレーナーに見られるのが恥ずかしかったけど、AIなら気楽！」</p>
              <div className="flex items-center gap-3 border-t border-gray-700 pt-3">
                 <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
                   <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
                </div>
                <span className="text-sm font-bold text-yellow-400">A.S様 (20代女性)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ▼ 最後のCTA（一番大事なクロージング） */}
      <section className="py-20 px-4 bg-yellow-400 text-black text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase leading-none">
          Change Your Life.
        </h2>
        <p className="font-bold text-xl mb-8">まずは無料カウンセリングから。</p>
        <Link href="/booking">
          <button className="bg-black text-white text-2xl font-black py-4 px-12 rounded-full border-4 border-white hover:scale-105 transition shadow-[0_10px_20px_rgba(0,0,0,0.3)] animate-bounce">
            今すぐ予約する！！
          </button>
        </Link>
      </section>

      {/* ▼ Dify埋め込み */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.difyChatbotConfig = {
              token: 'dSq1z7wyLXTEyS7j'
            }
          `
        }}
      />
      <script src="https://udify.app/embed.min.js" id="dify-chatbot-embed" defer></script>
    </div>
  );
}