"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import type { ServiceItem } from "@/data/services"
import { ga } from "@/lib/gtag"

type ServiceModalProps = {
  service: ServiceItem | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service ? (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm px-4 py-8 md:py-12 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-[#111827] p-6 md:p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: service.accent }}>
                {service.category}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/15 px-2 py-1 text-xs text-slate-300 hover:border-white/30"
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">{service.title}</h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">{service.description}</p>

            <div className="mt-7">
              <p className="text-xs uppercase tracking-widest text-gray-500">含まれる内容</p>
              <ul className="mt-3 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span style={{ color: service.accent }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
                onClick={() => ga.serviceModalContact(service.title)}
              >
                まずは無料で相談する →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
