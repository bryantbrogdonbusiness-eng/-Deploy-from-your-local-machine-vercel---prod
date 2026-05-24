import { TranslationInput, TranslationResult } from "@/types"

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

export function getApiKey(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("linguaslang_gemini_key")
}

export function setApiKey(key: string): void {
  localStorage.setItem("linguaslang_gemini_key", key.trim())
}

export function clearApiKey(): void {
  localStorage.removeItem("linguaslang_gemini_key")
}

export async function translateWithAI(input: TranslationInput): Promise<TranslationResult> {
  const apiKey = getApiKey()
  if (!apiKey) throw new Error("NO_API_KEY")

  const toneDescriptions: Record<string, string> = {
    casual: "casual everyday conversation",
    formal: "formal or professional settings",
    slang: "street slang and youth culture",
    funny: "humorous or playful conversation",
    romantic: "romantic or flirtatious conversation",
    professional: "business and professional communication",
  }

  const prompt = `You are an expert linguist and cultural translator specializing in slang, regional dialects, and informal language.

Translate the following phrase and provide rich cultural context:

PHRASE: "${input.phrase}"
SOURCE LANGUAGE: ${input.sourceLang}
TARGET LANGUAGE: ${input.targetLang}
REGION/VARIANT: ${input.region}
TONE: ${toneDescriptions[input.tone] || "casual"}
COMPARE REGIONS: ${input.compareRegions ? "yes" : "no"}

Respond with ONLY valid JSON in exactly this format (no markdown, no explanation):
{
  "mainTranslation": "the most natural ${input.region} translation for ${toneDescriptions[input.tone]}",
  "alternateVersions": [
    { "text": "slightly more formal alternative", "label": "More formal", "emoji": "👔" },
    { "text": "casual/slang alternative", "label": "Street version", "emoji": "🔥" },
    { "text": "texting/short version", "label": "Texting style", "emoji": "📱" }
  ],
  "culturalNotes": {
    "meaning": "explain what this phrase means culturally and literally, 2-3 sentences",
    "context": "when and how locals actually use this, social context, 2-3 sentences",
    "warning": "any cultural pitfalls, taboos, or misuse warnings (null if none)",
    "whenToUse": "specific situations where this is appropriate",
    "whenNotToUse": "situations to avoid using this"
  },
  "pronunciation": {
    "phonetic": "phonetic spelling in capital letters for English speakers",
    "tip": "a friendly tip on how to pronounce it naturally, 1-2 sentences"
  },
  "exampleSentences": [
    { "sentence": "natural example sentence using the translation in context" },
    { "sentence": "another natural example in a different situation" },
    { "sentence": "a third example showing different usage" }
  ],
  "regionalComparison": ${input.compareRegions ? `[
    { "region": "region name with flag emoji", "translation": "how this phrase is said there", "flag": "flag emoji" },
    { "region": "another region", "translation": "their version", "flag": "flag emoji" },
    { "region": "third region", "translation": "their version", "flag": "flag emoji" },
    { "region": "fourth region", "translation": "their version", "flag": "flag emoji" }
  ]` : "null"}
}`

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    if (response.status === 400 && err?.error?.message?.includes("API_KEY")) {
      throw new Error("INVALID_API_KEY")
    }
    if (response.status === 429) {
      throw new Error("RATE_LIMIT")
    }
    throw new Error(`API_ERROR: ${response.status}`)
  }

  const data = await response.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

  if (!text) throw new Error("EMPTY_RESPONSE")

  // Strip markdown code fences if Gemini wraps in ```json
  const cleaned = text.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim()
  const parsed: TranslationResult = JSON.parse(cleaned)
  return parsed
}
