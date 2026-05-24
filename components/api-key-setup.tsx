"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { setApiKey } from "@/lib/ai-translator"
import { Key, ExternalLink, ChevronRight } from "lucide-react"

interface ApiKeySetupProps {
  onKeySet: () => void
}

export function ApiKeySetup({ onKeySet }: ApiKeySetupProps) {
  const [key, setKey] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    const trimmed = key.trim()
    if (!trimmed || !trimmed.startsWith("AIza")) {
      setError("That doesn't look like a valid Gemini API key. It should start with 'AIza'.")
      return
    }
    setLoading(true)
    setError("")

    // Quick validation test
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${trimmed}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: "Hi" }] }] }),
        }
      )
      if (!res.ok) {
        setError("API key was rejected by Google. Double-check and try again.")
        setLoading(false)
        return
      }
    } catch {
      setError("Could not validate the key. Check your internet connection.")
      setLoading(false)
      return
    }

    setApiKey(trimmed)
    setLoading(false)
    onKeySet()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl border-2 border-violet-200 p-6 space-y-5"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
          <Key className="h-5 w-5 text-violet-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-base">One-time setup required</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            LinguaSlang uses Google Gemini AI for real translations. A free API key is required — takes 2 minutes to get.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        {[
          { step: "1", text: "Go to Google AI Studio", link: "https://aistudio.google.com/app/apikey", linkText: "aistudio.google.com" },
          { step: "2", text: "Sign in with your Google account and click \"Get API Key\"" },
          { step: "3", text: "Create a new key → Copy it → Paste below" },
        ].map(({ step, text, link, linkText }) => (
          <div key={step} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-violet-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {step}
            </span>
            <p className="text-sm text-gray-600">
              {text}{" "}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  {linkText} <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Paste your Gemini API key here (AIza...)"
          value={key}
          onChange={(e) => { setKey(e.target.value); setError("") }}
          className="border-2 border-violet-200 focus:border-violet-500 rounded-xl h-11 font-mono text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <p className="text-xs text-gray-400">
          🔒 Your key is saved only in your browser — never sent to our servers.
          It's 100% free (15 translations/minute, 1,500/day).
        </p>
      </div>

      <Button
        onClick={handleSave}
        disabled={!key.trim() || loading}
        className="w-full h-11 font-bold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl"
      >
        {loading ? (
          <span className="flex items-center gap-2"><span className="animate-spin">⚡</span> Validating...</span>
        ) : (
          <span className="flex items-center gap-2">Activate LinguaSlang <ChevronRight className="h-4 w-4" /></span>
        )}
      </Button>
    </motion.div>
  )
}
