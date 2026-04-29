export function ComparisonTable() {
  const rows = [
    ["月間予約数", "30件", "30件"],
    ["1件あたり手数料", "約3,000円", "0円"],
    ["月間手数料合計", "約90,000円", "0円"],
    ["年間コスト", "約1,080,000円", "0円"],
    ["サイト制作費(初期)", "−", "250,000〜"],
  ]

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.03]">
      <table className="min-w-full text-sm">
        <thead className="bg-white/[0.05]">
          <tr>
            <th className="px-4 py-3 text-left text-gray-400">項目</th>
            <th className="px-4 py-3 text-left text-red-400">ホットペッパー経由</th>
            <th className="px-4 py-3 text-left text-orange-400">自社サイト経由</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-white/[0.06]">
              <td className="px-4 py-3 text-gray-300">{row[0]}</td>
              <td className="px-4 py-3 text-gray-300">{row[1]}</td>
              <td className="px-4 py-3 text-gray-300">{row[2]}</td>
            </tr>
          ))}
          <tr className="border-t border-white/[0.06] bg-orange-500/10">
            <td className="px-4 py-3 font-bold text-white">差額（年間）</td>
            <td className="px-4 py-3 text-gray-400"></td>
            <td className="px-4 py-3 font-bold text-orange-300">+830,000円の利益</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
