"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TranslationForm } from "@/components/translation-form"
import { TranslationResultPanel } from "@/components/translation-result"
import { translatePhrase } from "@/lib/real-translator"
import { TranslationInput, TranslationResult } from "@/types"
import { AdSlot } from "@/components/ad-slot"

export default function Home() {
  const [result, setResult] = useState<TranslationResult | null>(null)
  const [lastInput, setLastInput] = useState<TranslationInput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  const handleTranslate = async (input: TranslationInput) => {
    setIsLoading(true)
    setResult(null)
    setApiError(null)
    try {
      const translation = await translatePhrase(input)
      setResult(translation)
      setLastInput(input)
    } catch (err: unknown) {
      setApiError("Translation failed. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">

      {/* ── Hero Header ───────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
          <div className="absolute top-12 right-1/3 w-40 h-40 bg-violet-400/20 rounded-full blur-2xl" />
        </div>
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-8 left-[8%] text-3xl opacity-60 float">🌍</span>
          <span className="absolute top-16 right-[10%] text-2xl opacity-50 float2">💬</span>
          <span className="absolute bottom-10 left-[15%] text-2xl opacity-40 float3">🔥</span>
          <span className="absolute bottom-6 right-[20%] text-3xl opacity-50 float">✨</span>
          <span className="absolute top-6 left-1/2 text-xl opacity-30 float2">🗺️</span>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-14 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="sparkle">⚡</span>
              <span>Cultural Context · Real Slang · Regional Flavor</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
              Lingua<span className="text-fuchsia-300">Slang</span>
            </h1>
            <p className="text-lg md:text-xl text-violet-100 max-w-2xl mx-auto leading-relaxed">
              Translate how <em>real people</em> talk — not just words, but vibe, culture,
              and the secret meanings your textbook never taught you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-8 mt-8 text-sm text-violet-200"
          >
            {[
              { icon: "🌐", label: "12 Languages" },
              { icon: "🗺️", label: "40+ Regions" },
              { icon: "🎭", label: "6 Tones" },
              { icon: "📖", label: "Cultural Notes" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-1.5">
                <span>{stat.icon}</span>
                <span className="font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ── Ad Slot 1: Below Header (Leaderboard) ─────────────────── */}
      <div className="max-w-5xl mx-auto px-4 pt-5">
        <AdSlot
          slotId="5557922939"
          format="horizontal"
          label="Advertisement"
          className="mb-2"
        />
      </div>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-violet-100/50 border border-violet-100/50 p-6 lg:sticky lg:top-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                  ✍️
                </div>
                <h2 className="text-lg font-bold text-gray-800">What do you want to say?</h2>
              </div>
              {apiError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-600">{apiError}</p>
                </div>
              )}
              <TranslationForm onTranslate={handleTranslate} isLoading={isLoading} />
            </div>

            {/* Ad Slot 2: Below Form (Rectangle / Square) */}
            <AdSlot
              slotId="4687237541"
              format="rectangle"
              label="Sponsored"
              className="hidden lg:block"
            />
          </motion.div>

          {/* Right: Results */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-violet-100/50 border border-violet-100/50 p-10 flex flex-col items-center justify-center gap-4"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-3xl">
                      🌍
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-violet-300 border-t-violet-600 animate-spin" />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-800 font-semibold">Consulting the streets...</p>
                    <p className="text-gray-400 text-sm mt-1">Gathering cultural context & slang</p>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {result && !isLoading && lastInput && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-violet-100/50 border border-violet-100/50 p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm">
                        🎯
                      </div>
                      <h2 className="text-lg font-bold text-gray-800">Your Translation</h2>
                    </div>
                    <TranslationResultPanel
                      result={result}
                      phrase={lastInput.phrase}
                      targetLang={lastInput.targetLang}
                      region={lastInput.region}
                      tone={lastInput.tone}
                    />
                  </div>

                  {/* Ad Slot 3: After Results (In-Article) */}
                  <AdSlot
                    slotId="1287048587"
                    format="auto"
                    label="Advertisement"
                    className="mt-4"
                  />
                </motion.div>
              )}

              {!result && !isLoading && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-violet-200 p-10 flex flex-col items-center justify-center gap-4 text-center min-h-[400px]"
                >
                  <div className="text-6xl float">💬</div>
                  <div>
                    <p className="text-gray-600 font-semibold text-lg">Your translation will appear here</p>
                    <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto">
                      Fill in the form and hit <strong>Translate with Context</strong> to get cultural notes,
                      pronunciation guides, and real-world examples.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4 w-full max-w-xs">
                    {[
                      { emoji: "🎯", label: "Main Translation" },
                      { emoji: "📖", label: "Cultural Notes" },
                      { emoji: "🗣️", label: "Pronunciation" },
                    ].map((feat) => (
                      <div key={feat.label} className="bg-white/80 rounded-xl p-3 border border-violet-100 flex flex-col items-center gap-1">
                        <span className="text-xl">{feat.emoji}</span>
                        <span className="text-xs text-gray-500 font-medium text-center leading-tight">{feat.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Feature Cards ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { emoji: "🔥", title: "Real Slang", desc: "Not the textbook stuff. Actual street-level language." },
            { emoji: "⚠️", title: "Safety Warnings", desc: "Know when a phrase could cause offence or confusion." },
            { emoji: "🗺️", title: "Regional Maps", desc: "See how Spain, Mexico, and Argentina say it differently." },
            { emoji: "🎭", title: "6 Tone Modes", desc: "From romantic to professional to hilariously funny." },
          ].map((feat) => (
            <div
              key={feat.title}
              className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl p-4 hover:shadow-md hover:border-violet-100 transition-all"
            >
              <div className="text-2xl mb-2">{feat.emoji}</div>
              <p className="font-bold text-gray-800 text-sm mb-1">{feat.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Ad Slot 4: Bottom of Page (Leaderboard) ───────────── */}
        <AdSlot
          slotId="4467368395"
          format="horizontal"
          label="Advertisement"
          className="mt-10"
        />
      </main>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="text-center py-10 px-4 text-gray-400 text-sm border-t border-violet-100 mt-4">
        <p>
          Made with 💜 for language lovers everywhere ·{" "}
          <span className="text-violet-500 font-medium">LinguaSlang</span>
        </p>
        <p className="mt-2 text-xs text-gray-400 font-medium">
          © {new Date().getFullYear()} LinguaSlang. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-300 max-w-md mx-auto">
          All content, design, and functionality are the original work of LinguaSlang
          and are protected by copyright law. Unauthorized reproduction or distribution
          is prohibited.
        </p>
        <p className="mt-2 text-xs text-gray-300">
          <a href="mailto:admin@linguaslang.com" className="hover:text-violet-400 transition-colors">admin@linguaslang.com</a>
          {" · "}
          <a href="/privacy" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
          {" · "}
          <a href="/terms" className="hover:text-violet-400 transition-colors">Terms of Use</a>
        </p>
      </footer>
    </div>
  )
}
