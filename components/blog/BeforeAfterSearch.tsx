"use client"

import { cn } from "@/lib/utils"

/**
 * ローカルSEO施策のビフォー・アフター検索結果イメージ（モック）
 */
export function BeforeAfterSearch() {
  return (
    <div className="my-10 grid gap-6 md:grid-cols-2">
      <Panel variant="before" title="BEFORE" badgeClass="bg-gray-600/30 text-gray-400 border-gray-600/40">
        <SearchBar query="「○○市 よもぎ蒸し」" dim />
        <LocalPack
          dim
          rows={[
            { rank: 1, text: "競合A", highlight: false },
            { rank: 2, text: "競合B", highlight: false },
            { rank: 3, text: "競合C", highlight: false },
          ]}
        />
        <OrganicList
          dim
          rows={[
            { rank: 1, text: "ポータルサイト", highlight: false },
            { rank: 2, text: "競合サイト", highlight: false },
            { rank: 3, text: "別のポータル", highlight: false },
          ]}
        />
        <p className="mt-3 text-center text-xs font-bold text-red-400/90">
          ❌ あなたのサロン：どこにもいない
        </p>
      </Panel>

      <Panel variant="after" title="AFTER" badgeClass="bg-orange-500/20 text-orange-400 border-orange-500/40">
        <SearchBar query="「○○市 よもぎ蒸し」" />
        <LocalPack
          rows={[
            { rank: 1, text: "★ あなたのサロン", highlight: true },
            { rank: 2, text: "競合A", highlight: false },
            { rank: 3, text: "競合B", highlight: false },
          ]}
        />
        <OrganicList
          rows={[
            { rank: 1, text: "ポータルサイト", highlight: false },
            { rank: 2, text: "★ あなたのサイト", highlight: true },
            { rank: 3, text: "競合サイト", highlight: false },
          ]}
        />
        <p className="mt-3 text-center text-xs font-bold text-orange-400">
          ✅ ローカルパック1位 + 自然検索2位
        </p>
      </Panel>
    </div>
  )
}

function Panel({
  title,
  badgeClass,
  children,
  variant,
}: {
  title: string
  badgeClass: string
  children: React.ReactNode
  variant: "before" | "after"
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 sm:p-5",
        variant === "before" ? "border-white/[0.06] bg-white/[0.02]" : "border-orange-500/25 bg-orange-500/[0.04]",
      )}
    >
      <p className={cn("mb-4 inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest", badgeClass)}>
        {title}
      </p>
      {children}
    </div>
  )
}

function SearchBar({ query, dim }: { query: string; dim?: boolean }) {
  return (
    <div
      className={cn(
        "mb-4 rounded-lg border px-3 py-2 font-mono text-xs",
        dim ? "border-white/[0.06] bg-black/20 text-gray-500" : "border-white/10 bg-black/30 text-gray-300",
      )}
    >
      {query}
    </div>
  )
}

function LocalPack({
  rows,
  dim,
}: {
  rows: { rank: number; text: string; highlight: boolean }[]
  dim?: boolean
}) {
  return (
    <div className={cn("mb-4 rounded-lg border p-3", dim ? "border-white/[0.05] bg-black/15" : "border-white/10 bg-black/25")}>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">🗺️ ローカルパック</p>
      <ul className="space-y-1.5 font-mono text-[11px]">
        {rows.map((r) => (
          <li
            key={r.rank}
            className={cn(
              "flex gap-2 rounded px-2 py-1",
              r.highlight && !dim ? "bg-orange-500/25 text-orange-100 ring-1 ring-orange-500/40" : "text-gray-400",
            )}
          >
            <span className="text-gray-600">{r.rank}.</span>
            <span>{r.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OrganicList({
  rows,
  dim,
}: {
  rows: { rank: number; text: string; highlight: boolean }[]
  dim?: boolean
}) {
  return (
    <div className={cn("rounded-lg border p-3", dim ? "border-white/[0.05] bg-black/15" : "border-white/10 bg-black/25")}>
      <p className="mb-2 font-mono text-[10px] text-gray-500">自然検索</p>
      <ul className="space-y-1.5 font-mono text-[11px]">
        {rows.map((r) => (
          <li
            key={r.rank}
            className={cn(
              "flex gap-2 rounded px-2 py-1",
              r.highlight && !dim ? "bg-orange-500/20 text-orange-100 ring-1 ring-orange-500/35" : "text-gray-400",
            )}
          >
            <span className="text-gray-600">{r.rank}位:</span>
            <span>{r.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
