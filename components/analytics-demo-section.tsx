"use client"

import { useState } from "react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const sessionData = [
  { date: "4/1", sessions: 42, users: 35 },
  { date: "4/3", sessions: 58, users: 47 },
  { date: "4/5", sessions: 51, users: 40 },
  { date: "4/7", sessions: 73, users: 61 },
  { date: "4/9", sessions: 65, users: 52 },
  { date: "4/11", sessions: 89, users: 74 },
  { date: "4/13", sessions: 94, users: 78 },
  { date: "4/15", sessions: 82, users: 68 },
  { date: "4/17", sessions: 110, users: 91 },
  { date: "4/19", sessions: 97, users: 80 },
  { date: "4/21", sessions: 125, users: 103 },
  { date: "4/23", sessions: 118, users: 96 },
  { date: "4/25", sessions: 142, users: 117 },
  { date: "4/27", sessions: 138, users: 112 },
  { date: "4/29", sessions: 156, users: 128 },
]

const searchData = [
  { keyword: "福山市 よもぎ蒸し", impressions: 1240, clicks: 186, ctr: "15.0%", position: "3.2" },
  { keyword: "よもぎ蒸し 効果", impressions: 2890, clicks: 145, ctr: "5.0%", position: "8.7" },
  { keyword: "福山 温活 サロン", impressions: 860, clicks: 129, ctr: "15.0%", position: "2.8" },
  { keyword: "沼隈 リラクゼーション", impressions: 420, clicks: 88, ctr: "21.0%", position: "1.5" },
  { keyword: "冷え性 改善 サロン", impressions: 1560, clicks: 62, ctr: "4.0%", position: "12.1" },
]

const topPages = [
  { page: "/", title: "トップページ", views: 1842, avgTime: "1:24" },
  { page: "/menu", title: "メニュー・料金", views: 956, avgTime: "2:38" },
  { page: "/about", title: "サロン紹介", views: 623, avgTime: "1:52" },
  { page: "/blog/yomogi-effect", title: "よもぎ蒸しの効果とは？", views: 487, avgTime: "3:15" },
  { page: "/access", title: "アクセス", views: 412, avgTime: "1:05" },
  { page: "/contact", title: "お問い合わせ", views: 289, avgTime: "2:10" },
]

const eventData = [
  { name: "予約ボタン", count: 156 },
  { name: "電話番号タップ", count: 98 },
  { name: "LINE友だち追加", count: 73 },
  { name: "メニュー詳細表示", count: 234 },
  { name: "アクセスマップ表示", count: 189 },
]

const channelData = [
  { name: "自然検索", value: 42, color: "#10b981" },
  { name: "SNS", value: 28, color: "#6366f1" },
  { name: "直接流入", value: 18, color: "#f59e0b" },
  { name: "GBP", value: 12, color: "#ef4444" },
]

const metrics = [
  { label: "セッション数", value: "2,847", change: "+32.4%", up: true, sub: "先月比" },
  { label: "ユーザー数", value: "2,156", change: "+28.7%", up: true, sub: "先月比" },
  { label: "予約ボタンCTR", value: "5.5%", change: "+1.2pt", up: true, sub: "先月比" },
  { label: "平均滞在時間", value: "2:04", change: "+0:18", up: true, sub: "先月比" },
]

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border border-white/10 bg-slate-800 px-3 py-2 shadow-lg">
      <p className="text-[11px] text-slate-400">{label}</p>
      {payload.map((p, i) => (
        <p key={`${p.name}-${i}`} className="mt-1 text-xs font-semibold" style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  )
}

export function AnalyticsDemoSection() {
  const [tab, setTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "search", label: "検索パフォーマンス" },
    { id: "events", label: "イベント計測" },
  ]

  return (
    <section id="analytics-demo" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30">
      <div className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">06 / Analytics Demo</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">解析ダッシュボード（デモ）</h2>
        <p className="mt-5 max-w-3xl font-mono text-sm text-muted-foreground leading-relaxed">
          GA4とSearch Consoleを導入すると、どんな数値が見えるのかをイメージできるデモです。
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-sm">
        <div className="border-b border-white/10 p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-500">DEMO DASHBOARD</p>
              <h3 className="mt-1 text-lg font-bold text-slate-100">アクセス解析レポート</h3>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300">
              期間: 2026/04/01 - 2026/04/29
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-md px-4 py-2 font-mono text-xs transition-colors ${
                  tab === t.id ? "bg-emerald-600 text-white" : "bg-transparent text-slate-500 hover:text-slate-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 md:p-6">
          {tab === "overview" && (
            <>
              <div className="mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-500">{m.label}</p>
                    <p className="mt-2 text-3xl font-black text-slate-100">{m.value}</p>
                    <p className="mt-1 text-xs text-emerald-400">
                      {m.up ? "↑" : "↓"} {m.change} <span className="text-slate-500">{m.sub}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="mb-3 text-sm font-semibold text-slate-200">セッション数の推移</h4>
                <div className="overflow-x-auto">
                  <div className="min-w-[560px]">
                    <ResponsiveContainer width="100%" height={260}>
                      <AreaChart data={sessionData}>
                        <defs>
                          <linearGradient id="sessionFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="userFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                        <XAxis
                          dataKey="date"
                          tick={{ fill: "#64748b", fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          interval="preserveStartEnd"
                          minTickGap={18}
                        />
                        <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="sessions"
                          name="セッション"
                          stroke="#10b981"
                          fill="url(#sessionFill)"
                          dot={false}
                        />
                        <Area type="monotone" dataKey="users" name="ユーザー" stroke="#6366f1" fill="url(#userFill)" dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-3 text-sm font-semibold text-slate-200">よく見られているページ</h4>
                  {topPages.map((p, i) => (
                    <div key={p.page} className={`flex items-center justify-between py-2 ${i < topPages.length - 1 ? "border-b border-white/5" : ""}`}>
                      <div>
                        <p className="text-sm text-slate-300">{p.title}</p>
                        <p className="text-[11px] text-slate-500">{p.page}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-100">{p.views.toLocaleString()}</p>
                        <p className="text-[11px] text-slate-500">平均 {p.avgTime}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-3 text-sm font-semibold text-slate-200">流入チャネル</h4>
                  {channelData.map((ch) => (
                    <div key={ch.name} className="mb-4">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-300">{ch.name}</span>
                        <span style={{ color: ch.color }}>{ch.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded bg-white/10">
                        <div className="h-full rounded" style={{ width: `${ch.value}%`, backgroundColor: ch.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {tab === "search" && (
            <>
              <div className="mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { label: "合計クリック数", value: "610", change: "+45.2%" },
                  { label: "合計表示回数", value: "6,970", change: "+38.1%" },
                  { label: "平均CTR", value: "8.8%", change: "+2.1pt" },
                  { label: "平均掲載順位", value: "5.7", change: "-2.3" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-500">{m.label}</p>
                    <p className="mt-2 text-3xl font-black text-slate-100">{m.value}</p>
                    <p className="mt-1 text-xs text-emerald-400">↑ {m.change}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      {["検索キーワード", "表示回数", "クリック数", "CTR", "平均順位"].map((h) => (
                        <th key={h} className={`px-3 py-3 text-[11px] text-slate-500 ${h === "検索キーワード" ? "text-left" : "text-right"}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {searchData.map((row) => (
                      <tr key={row.keyword} className="border-b border-white/5 last:border-b-0">
                        <td className="px-3 py-3 text-sm text-slate-300">{row.keyword}</td>
                        <td className="px-3 py-3 text-right text-sm text-slate-400">{row.impressions.toLocaleString()}</td>
                        <td className="px-3 py-3 text-right text-sm font-bold text-indigo-400">{row.clicks}</td>
                        <td className="px-3 py-3 text-right text-sm text-slate-400">{row.ctr}</td>
                        <td className="px-3 py-3 text-right text-sm text-slate-300">{row.position}位</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {tab === "events" && (
            <>
              <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="mb-2 text-sm font-semibold text-slate-200">ユーザーアクション計測</h4>
                <p className="mb-4 text-xs leading-relaxed text-slate-500">
                  どの導線が押されているかを可視化し、改善の優先順位を明確化できます。
                </p>
                <div className="overflow-x-auto">
                  <div className="min-w-[520px]">
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={eventData} margin={{ bottom: 12 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                        <XAxis
                          dataKey="name"
                          tick={{ fill: "#94a3b8", fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          interval={0}
                          angle={-20}
                          textAnchor="end"
                          height={52}
                        />
                        <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="count" name="クリック数" fill="#10b981" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mt-5 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-center font-mono text-xs text-slate-500">
            ※ デモ用サンプルです。GA4・Search Console設定後は、実データで同様の可視化が可能です。
          </div>
        </div>
      </div>
    </section>
  )
}
