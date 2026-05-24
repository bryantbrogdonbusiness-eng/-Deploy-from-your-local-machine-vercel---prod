import { TranslationInput, TranslationResult } from "@/types"

export async function translatePhrase(input: TranslationInput): Promise<TranslationResult> {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error || `Request failed: ${response.status}`)
  }

  const result: TranslationResult = await response.json()
  return result
}
