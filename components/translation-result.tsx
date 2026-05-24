"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { TranslationResult } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Copy, CheckCircle, Info, MapPin, MessageSquare, Mic, Globe } from "lucide-react"
import { useState } from "react"

interface TranslationResultProps {
  result: TranslationResult
  phrase: string
  targetLang: string
  region: string
  tone: string
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-white/50 transition-colors text-gray-400 hover:text-violet-600"
      title="Copy"
    >
      {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 } as never,
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 } as never,
  },
}

export function TranslationResultPanel({ result, phrase, region, tone }: TranslationResultProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Demo badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <Badge className="bg-violet-100 text-violet-700 border-violet-200 text-xs font-medium">
          ✨ Demo Translation
        </Badge>
        <Badge variant="outline" className="text-xs text-gray-500 border-gray-200">
          {region} · {tone}
        </Badge>
      </motion.div>

      {/* 1. Main Translation */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-5 text-white shadow-lg shadow-violet-200"
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-2">
              🎯 Main Translation
            </p>
            <p className="text-3xl font-bold leading-tight">{result.mainTranslation}</p>
            <p className="text-sm opacity-70 mt-2 italic">&ldquo;{phrase}&rdquo;</p>
          </div>
          <CopyButton text={result.mainTranslation} />
        </div>
      </motion.div>

      {/* 2. Alternate Versions */}
      <motion.div variants={itemVariants}>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
          🔄 Alternate Versions
        </p>
        <div className="grid grid-cols-1 gap-2">
          {result.alternateVersions.map((alt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm hover:border-violet-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{alt.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-800">{alt.text}</p>
                  <p className="text-xs text-gray-400">{alt.label}</p>
                </div>
              </div>
              <CopyButton text={alt.text} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={itemVariants}>
        <Tabs defaultValue="culture" className="w-full">
          <TabsList className="w-full grid grid-cols-3 h-auto p-1 bg-gray-100 rounded-xl">
            <TabsTrigger value="culture" className="rounded-lg text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Info className="h-3 w-3 mr-1" />Culture
            </TabsTrigger>
            <TabsTrigger value="pronunciation" className="rounded-lg text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Mic className="h-3 w-3 mr-1" />Say It
            </TabsTrigger>
            <TabsTrigger value="examples" className="rounded-lg text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <MessageSquare className="h-3 w-3 mr-1" />Examples
            </TabsTrigger>
          </TabsList>

          {/* Culture Tab */}
          <TabsContent value="culture" className="mt-4 space-y-3">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">📖 Meaning</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.culturalNotes.meaning}</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">🌍 Context</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.culturalNotes.context}</p>
            </div>
            {result.culturalNotes.warning && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">⚠️ Watch Out</p>
                  <p className="text-sm text-amber-800 leading-relaxed">{result.culturalNotes.warning}</p>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                <p className="text-xs font-bold text-green-700 mb-1">✅ When to use</p>
                <p className="text-sm text-gray-700">{result.culturalNotes.whenToUse}</p>
              </div>
              {result.culturalNotes.whenNotToUse && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                  <p className="text-xs font-bold text-red-700 mb-1">🚫 When NOT to use</p>
                  <p className="text-sm text-gray-700">{result.culturalNotes.whenNotToUse}</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Pronunciation Tab */}
          <TabsContent value="pronunciation" className="mt-4 space-y-3">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">🗣️ Say It Like This</p>
              <p className="text-4xl font-bold text-indigo-700 font-mono tracking-wide leading-tight">
                {result.pronunciation.phonetic}
              </p>
              <p className="text-xs text-gray-500 mt-3">Phonetic guide for English speakers</p>
            </div>
            {result.pronunciation.tip && (
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <p className="text-xs font-bold text-yellow-700 uppercase tracking-wider mb-1">Pro Tip</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{result.pronunciation.tip}</p>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="mt-4 space-y-2">
            {result.exampleSentences.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-violet-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-violet-100 text-violet-600 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-800 leading-relaxed">{ex.sentence}</p>
                </div>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Regional Comparison */}
      <AnimatePresence>
        {result.regionalComparison && result.regionalComparison.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3 flex items-center gap-2">
              <Globe className="h-4 w-4 text-white" />
              <p className="text-xs font-bold text-white uppercase tracking-widest">🗺️ Regional Comparison</p>
            </div>
            <div className="divide-y divide-gray-50">
              {result.regionalComparison.map((variant, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span className="text-sm text-gray-500">{variant.region}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">{variant.translation}</span>
                    <CopyButton text={variant.translation} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
