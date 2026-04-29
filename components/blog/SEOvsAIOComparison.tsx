/**
 * SEO vs AIO の比較表（ComparisonTable と同系スタイル）
 */
export function SEOvsAIOComparison() {
  const rows: [string, string, string][] = [
    ["目的", "検索結果で上位表示", "AIの回答で引用される"],
    ["対象", "Google検索エンジン", "ChatGPT / Gemini / AI Overview"],
    ["評価基準", "キーワード・被リンクなど", "E-E-A-T・構造化データ・一次情報"],
    ["成果指標", "検索順位・CTR", "AI引用率・指名検索数"],
    ["効果の持続性", "アルゴリズム変動あり", "コンテンツの質で比較的安定"],
  ]

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.03]">
      <table className="min-w-full text-sm">
        <thead className="bg-white/[0.05]">
          <tr>
            <th className="px-4 py-3 text-left text-gray-400">項目</th>
            <th className="px-4 py-3 text-left text-blue-400">SEO対策</th>
            <th className="px-4 py-3 text-left text-orange-400">AIO対策</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, seo, aio]) => (
            <tr key={label} className="border-t border-white/[0.06]">
              <td className="px-4 py-3 font-medium text-gray-300">{label}</td>
              <td className="px-4 py-3 text-gray-300">{seo}</td>
              <td className="px-4 py-3 text-gray-300">{aio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
