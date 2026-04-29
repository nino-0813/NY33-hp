export function FlowDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
      <div className="grid gap-4 md:grid-cols-3 md:items-center">
        <div className="space-y-4">
          <FlowBox title="SNS" subtitle="認知・興味" />
        </div>
        <div className="flex justify-center">
          <FlowBox title="自社サイト" subtitle="信頼・判断" accent />
        </div>
        <div className="space-y-4">
          <FlowBox title="Google検索" subtitle="発見・信頼" />
        </div>
      </div>

      <div className="mt-4 flex justify-center text-gray-500">↓</div>
      <div className="flex justify-center">
        <FlowBox title="LINE" subtitle="予約・リピート" />
      </div>
    </div>
  )
}

function FlowBox({ title, subtitle, accent = false }: { title: string; subtitle: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border px-6 py-4 text-center ${accent ? "border-orange-500/50 bg-white/[0.05]" : "border-white/[0.1] bg-white/[0.05]"}`}>
      <p className="font-bold text-white">{title}</p>
      <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
    </div>
  )
}
