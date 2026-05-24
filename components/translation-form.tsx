"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { languages, regionsByLanguage, tones } from "@/lib/languages"
import { TranslationInput } from "@/types"
import { Globe, Zap } from "lucide-react"

interface TranslationFormProps {
  onTranslate: (input: TranslationInput) => void
  isLoading: boolean
}

export function TranslationForm({ onTranslate, isLoading }: TranslationFormProps) {
  const [phrase, setPhrase] = useState("What's up?")
  const [sourceLang, setSourceLang] = useState("en")
  const [targetLang, setTargetLang] = useState("es")
  const [region, setRegion] = useState("Mexican")
  const [tone, setTone] = useState("casual")
  const [compareRegions, setCompareRegions] = useState(false)

  useEffect(() => {
    const regions = regionsByLanguage[targetLang]
    if (regions && regions.length > 0) {
      setRegion(regions[0])
    }
  }, [targetLang])

  const handleSubmit = () => {
    if (!phrase.trim()) return
    onTranslate({ phrase, sourceLang, targetLang, region, tone, compareRegions })
  }

  const regions = regionsByLanguage[targetLang] || []

  return (
    <div className="space-y-6">
      {/* Phrase Input */}
      <div className="space-y-2">
        <Label htmlFor="phrase" className="text-sm font-semibold text-gray-700">
          ✍️ Your Phrase
        </Label>
        <Textarea
          id="phrase"
          placeholder={`e.g. "What's up?", "No way!", "Let's go!"`}
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className="min-h-[80px] resize-none text-base border-2 border-violet-100 focus:border-violet-400 rounded-xl transition-all placeholder:text-gray-400"
          maxLength={300}
        />
        <p className="text-xs text-gray-400 text-right">{phrase.length}/300</p>
      </div>

      {/* Language Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-gray-700">🌐 From</Label>
          <Select value={sourceLang} onValueChange={setSourceLang}>
            <SelectTrigger className="border-2 border-violet-100 focus:border-violet-400 rounded-xl h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-gray-700">🎯 To</Label>
          <Select value={targetLang} onValueChange={setTargetLang}>
            <SelectTrigger className="border-2 border-violet-100 focus:border-violet-400 rounded-xl h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Region */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold text-gray-700">📍 Region / Variant</Label>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="border-2 border-violet-100 focus:border-violet-400 rounded-xl h-11">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {regions.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tone Selector */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-gray-700">🎭 Tone</Label>
        <div className="grid grid-cols-3 gap-2">
          {tones.map((t) => (
            <motion.button
              key={t.value}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTone(t.value)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-1 rounded-xl border-2 text-xs font-medium transition-all cursor-pointer",
                tone === t.value
                  ? "border-violet-500 bg-violet-50 text-violet-700 shadow-sm"
                  : "border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50/50"
              )}
            >
              <span className="text-xl">{t.emoji}</span>
              <span>{t.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Compare Regions Toggle */}
      <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl border border-violet-100">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-violet-500" />
          <div>
            <p className="text-sm font-semibold text-gray-700">Compare Regions</p>
            <p className="text-xs text-gray-500">See how 3–5 regions say this phrase</p>
          </div>
        </div>
        <Switch
          checked={compareRegions}
          onCheckedChange={setCompareRegions}
          className="data-[state=checked]:bg-violet-600"
        />
      </div>

      {/* Submit Button */}
      <motion.div whileTap={{ scale: 0.98 }}>
        <Button
          onClick={handleSubmit}
          disabled={!phrase.trim() || isLoading}
          className="w-full h-12 text-base font-bold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-violet-200 transition-all"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⚡</span> Translating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Translate with Context
            </span>
          )}
        </Button>
      </motion.div>
    </div>
  )
}
