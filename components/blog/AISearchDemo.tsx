"use client"

/**
 * ChatGPT風の会話UIで「紹介される／されない」のイメージを並べて表示
 */
export function AISearchDemo() {
  return (
    <div className="my-10">
      <div className="grid gap-6 md:grid-cols-2">
        <DemoPanel
          variant="positive"
          title="パターンA：引用される例"
          userMessage="福山市でおすすめのエステサロンを教えて"
          aiLead="福山市には以下のサロンがおすすめです。"
          salonLine="○○サロン — 温活・よもぎ蒸しが人気。"
          highlight="あなたのサロンがここに載る"
        />
        <DemoPanel
          variant="negative"
          title="パターンB：載らない例"
          userMessage="福山市でおすすめのエステサロンを教えて"
          aiLead="一般的な選び方としては、口コミや..."
          salonLine="（特定サロン名が挙がらない／一般論のみ）"
          highlight="情報が足りず紹介されないことも"
        />
      </div>
      <p className="mt-4 text-center text-sm font-bold text-orange-400">
        ⚠️ ここに載るかどうかが、今後の集客を左右します
      </p>
    </div>
  )
}

function DemoPanel({
  variant,
  title,
  userMessage,
  aiLead,
  salonLine,
  highlight,
}: {
  variant: "positive" | "negative"
  title: string
  userMessage: string
  aiLead: string
  salonLine: string
  highlight: string
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-5">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-orange-500/90">{title}</p>
      <div className="space-y-3 font-mono text-xs leading-relaxed text-gray-300">
        <div className="flex justify-end">
          <div className="max-w-[88%] rounded-2xl rounded-br-md bg-orange-500/20 px-3 py-2.5 text-left text-gray-200">
            <span className="mr-1.5 inline-block text-[10px] text-gray-500">👤</span>
            {userMessage}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white/[0.05] px-3 py-2.5">
            <span className="mr-1.5 inline-block text-[10px] text-gray-500">🤖</span>
            <p>{aiLead}</p>
            <p className="mt-2 border-l-2 border-orange-500/50 pl-2 text-gray-200">{salonLine}</p>
            <p
              className={`mt-3 text-[11px] font-bold ${
                variant === "positive" ? "text-orange-400" : "text-amber-500/90"
              }`}
            >
              ⚠️ {highlight}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
