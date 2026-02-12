import Link from "next/link";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* 戻るボタン */}
      <header className="p-4 border-b border-zinc-800">
        <Link href="/" className="text-yellow-400 font-bold hover:underline">
          ← TOPに戻る
        </Link>
      </header>

      <div className="max-w-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-black text-center mb-2">無料カウンセリング予約</h1>
        <p className="text-gray-400 text-center mb-8 text-sm">AIトレーナーがあなたの身体データを分析します。</p>

        {/* フォームエリア：白背景にして「書類」っぽくすることで入力しやすくする */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-700 shadow-2xl">
          <form className="space-y-6">
            
            {/* 名前入力 */}
            <div>
              <label className="block text-sm font-bold text-cyan-400 mb-2">お名前</label>
              <input type="text" placeholder="例：山田 太郎" className="w-full bg-black border border-zinc-600 rounded p-4 text-white focus:border-yellow-400 focus:outline-none transition" />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-sm font-bold text-cyan-400 mb-2">メールアドレス</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-black border border-zinc-600 rounded p-4 text-white focus:border-yellow-400 focus:outline-none transition" />
            </div>

            {/* 日程選択 */}
            <div>
              <label className="block text-sm font-bold text-cyan-400 mb-2">希望日時</label>
              <select className="w-full bg-black border border-zinc-600 rounded p-4 text-white focus:border-yellow-400 focus:outline-none transition">
                <option>選択してください</option>
                <option>2月14日(土) 10:00〜</option>
                <option>2月14日(土) 14:00〜</option>
                <option>2月15日(日) 10:00〜</option>
              </select>
            </div>

            {/* 目標（自由記述） */}
            <div>
              <label className="block text-sm font-bold text-cyan-400 mb-2">目標（任意）</label>
              <textarea placeholder="例：夏までに腹筋を割りたい、-5kg痩せたいなど" rows={3} className="w-full bg-black border border-zinc-600 rounded p-4 text-white focus:border-yellow-400 focus:outline-none transition"></textarea>
            </div>

            {/* 送信ボタン */}
            <button type="button" className="w-full bg-yellow-400 text-black font-black text-xl py-4 rounded hover:bg-white transition shadow-[0_0_20px_rgba(250,204,21,0.5)]">
              予約を確定する
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              ※これはデモサイトです。実際の予約は行われません。
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}