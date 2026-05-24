import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

const toneDescriptions: Record<string, string> = {
  casual:       "casual everyday conversation between friends",
  formal:       "formal or professional settings",
  slang:        "street slang and youth culture",
  funny:        "humorous or playful conversation",
  romantic:     "romantic or flirtatious conversation",
  professional: "business and professional communication",
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "API not configured" }, { status: 500 })
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const body = await req.json()
    const { phrase, sourceLang, targetLang, region, tone, compareRegions } = body

    if (!phrase || !targetLang) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const prompt = `You are an expert linguist specializing in slang, regional dialects, and informal language across cultures.

Translate this phrase with full cultural and slang context:

PHRASE: "${phrase}"
FROM: ${sourceLang}
TO: ${targetLang}
REGION: ${region}
TONE: ${toneDescriptions[tone] || "casual everyday conversation"}
COMPARE REGIONS: ${compareRegions ? "yes" : "no"}

Rules:
- Main translation should be how locals in ${region} ACTUALLY say this — authentic slang, not textbook
- Alternate versions should reflect genuinely different tonal registers
- Cultural notes should be insightful and specific to this phrase
- Pronunciation tip should be practical for an English speaker
- Example sentences should feel natural and contemporary
- If compareRegions is yes, show how 4 different regions express this same idea

Respond with ONLY valid JSON — no markdown, no explanation, nothing else:
{
  "mainTranslation": "most authentic ${region} translation for ${toneDescriptions[tone] || "casual"} tone",
  "alternateVersions": [
    { "text": "more formal version", "label": "More formal", "emoji": "👔" },
    { "text": "slang/street version", "label": "Street version", "emoji": "🔥" },
    { "text": "texting shorthand", "label": "Texting style", "emoji": "📱" }
  ],
  "culturalNotes": {
    "meaning": "what this phrase means culturally — literal vs actual meaning, 2-3 sentences",
    "context": "when and how locals actually use this, social dynamics, 2-3 sentences",
    "warning": "cultural pitfalls or taboos with this phrase, or null if none",
    "whenToUse": "specific appropriate situations",
    "whenNotToUse": "situations to avoid"
  },
  "pronunciation": {
    "phonetic": "PHONETIC SPELLING IN CAPS for English speakers",
    "tip": "practical pronunciation tip, 1-2 sentences"
  },
  "exampleSentences": [
    { "sentence": "natural example using the translation" },
    { "sentence": "different situation example" },
    { "sentence": "third usage example" }
  ],
  "regionalComparison": ${compareRegions ? `[
    { "region": "region + flag emoji", "translation": "how they say it there", "flag": "🏳️" },
    { "region": "region + flag emoji", "translation": "how they say it there", "flag": "🏳️" },
    { "region": "region + flag emoji", "translation": "how they say it there", "flag": "🏳️" },
    { "region": "region + flag emoji", "translation": "how they say it there", "flag": "🏳️" }
  ]` : "null"}
}`

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 1200,
      response_format: { type: "json_object" },
    })

    const text = response.choices[0]?.message?.content
    if (!text) throw new Error("Empty response from AI")

    const result = JSON.parse(text)
    return NextResponse.json(result)

  } catch (err: unknown) {
    console.error("Translation error:", err)
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
