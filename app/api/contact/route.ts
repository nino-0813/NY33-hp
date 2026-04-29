import { NextResponse } from "next/server"

const SPREADSHEET_ID = "1yxZEwV6KXzLfzcjYj-s95Ek1ktuqqe-60Abl616ppBI"

type ContactPayload = {
  companyName: string
  contactName: string
  email: string
  phone: string
  plan: string
  launchTiming: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>
    const payload: ContactPayload = {
      companyName: (body.companyName ?? "").trim(),
      contactName: (body.contactName ?? "").trim(),
      email: (body.email ?? "").trim(),
      phone: (body.phone ?? "").trim(),
      plan: (body.plan ?? "").trim(),
      launchTiming: (body.launchTiming ?? "").trim(),
      message: (body.message ?? "").trim(),
    }

    if (!payload.companyName || !payload.contactName || !payload.email || !payload.plan || !payload.message) {
      return NextResponse.json({ error: "必須項目が未入力です。" }, { status: 400 })
    }

    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "サーバー設定が未完了です（GOOGLE_APPS_SCRIPT_WEBHOOK_URL）。" },
        { status: 500 },
      )
    }

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        spreadsheetId: SPREADSHEET_ID,
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
      cache: "no-store",
    })

    if (!webhookRes.ok) {
      const text = await webhookRes.text()
      return NextResponse.json(
        { error: `スプレッドシート保存に失敗しました: ${text || webhookRes.statusText}` },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "送信データの処理に失敗しました。" }, { status: 500 })
  }
}
