import { NextResponse } from "next/server";

// ─── Rate Limiter ────────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 20;   // requests per window
const RATE_WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT_MAX) return true;
  record.count++;
  return false;
}

// Cleanup stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of rateLimitMap) {
    if (now > val.resetAt) rateLimitMap.delete(key);
  }
}, 300_000);

// ─── Character Styles ────────────────────────────────────────────────────────
interface CharacterStyle {
  prefixes: string[];
  suffixes: string[];
}

const CHARACTER_STYLES: Record<string, CharacterStyle> = {
  Bryant: {
    prefixes: ["Aight so — ", "No cap, ", "Lowkey, ", "Real talk: ", "Bruh, "],
    suffixes: [" ...you feel me?", " — it's giving.", " fr fr.", " no cap.", ""],
  },
  Raj: {
    prefixes: ["To be precise, ", "Technically speaking, ", "In essence, ", ""],
    suffixes: [" — quite right.", " Indeed.", " — that's accurate.", ""],
  },
  Maria: {
    prefixes: ["¡Ay! ", "Mira, ", "Ooh, ", "Como dicen, ", ""],
    suffixes: [" ¡Qué cosa!", " — ¿ves?", " ...it's beautiful, no?", " ¡Dale!", ""],
  },
  Hatice: {
    prefixes: ["Okay but, ", "Let me tell you — ", "Trust me, ", "Listen, ", ""],
    suffixes: [" ...period.", " End of story.", " — and that's final.", " Tamam?", ""],
  },
  Mei: {
    prefixes: ["Actually, ", "To be accurate, ", "Precisely — ", "Correctly stated: ", ""],
    suffixes: [" ...culturally speaking.", " — with nuance.", " ...in proper context.", " — this is accurate.", ""],
  },
};

function applyCharacterStyle(text: string, characterName: string): string {
  const style = CHARACTER_STYLES[characterName];
  if (!style) return text;
  const prefix = style.prefixes[Math.floor(Math.random() * style.prefixes.length)];
  const suffix = style.suffixes[Math.floor(Math.random() * style.suffixes.length)];
  let result = text;
  if (prefix) result = prefix + result.charAt(0).toLowerCase() + result.slice(1);
  if (suffix) result = result.replace(/[.!?]+$/, "") + suffix;
  return result;
}

// ─── Translation Helpers ─────────────────────────────────────────────────────
async function fetchTranslation(
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<string> {
  if (sourceLang === targetLang) return text;
  try {
    const langpair = `${sourceLang}|${targetLang}`;
    const url = `https://api.mymemory.translated.web/get?q=${encodeURIComponent(
      text
    )}&langpair=${encodeURIComponent(langpair)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const data = await res.json();
    if (
      data.responseStatus === 200 &&
      data.responseData?.translatedText &&
      data.responseData.translatedText.toLowerCase() !== text.toLowerCase()
    ) {
      return data.responseData.translatedText;
    }
  } catch (err) {
    console.error("Translation API error:", err);
  }
  return text;
}

async function fetchToneVariant(
  text: string,
  sourceLang: string,
  targetLang: string,
  instruction: string
): Promise<string> {
  try {
    const modified = `${instruction}: ${text}`;
    const langpair = `${sourceLang}|${targetLang}`;
    const url = `https://api.mymemory.translated.web/get?q=${encodeURIComponent(
      modified
    )}&langpair=${encodeURIComponent(langpair)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    const data = await res.json();
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      let result: string = data.responseData.translatedText;
      const colon = result.indexOf(": ");
      if (colon > 0 && colon < 40) result = result.slice(colon + 2);
      return result;
    }
  } catch {
    // fallback handled by caller
  }
  return "";
}

// ─── Labels & Notes ──────────────────────────────────────────────────────────
const TONE_TAGS: Record<string, string> = {
  formal: "🎩", casual: "💬", slang: "🔥", humorous: "😄",
};
const TONE_LABELS: Record<string, string> = {
  formal: "Formal Register", casual: "Natural / Casual",
  slang: "Street / Slang", humorous: "Playful / Humorous",
};
const TONE_NOTES: Record<string, string> = {
  formal: "Professional register — suitable for business, official, or academic contexts",
  casual: "Conversational and natural — how most speakers would phrase this day-to-day",
  slang: "Informal, colloquial — regional street language and current slang expressions",
  humorous: "Light and playful — with a comedic or casual twist appropriate to the region",
};
const DIALECT_NOTES: Record<string, string> = {
  nyc: "NYC dialect: direct, fast-paced — 'mad', 'no cap', 'bussin', 'it's giving'",
  southern: "Southern US: warm, drawn-out — 'y'all', 'fixin' to', 'bless your heart'",
  california: "West Coast / Cali: chill and vibey — 'hella', 'stoked', 'lowkey'",
  british: "British English: understated wit — 'quite', 'brilliant', 'bloody', 'cheers'",
  australian: "Australian: self-deprecating warmth — 'arvo', 'no worries mate', 'reckon'",
  mexican: "Mexican Spanish: rich slang — 'chido/a', 'güey', 'no manches', 'órale'",
  castilian: "Castilian Spanish: distinct vosotros, crisp pronunciation, Peninsular idioms",
  caribbean: "Caribbean Spanish: rhythmic, fast cadence — musical phrasing",
  argentine: "Argentine Spanish: 'che', 'vos', lunfardo slang — Rioplatense flavor",
  mandarin: "Standard Mandarin: Simplified Chinese, mainland PRC norms, 普通话",
  cantonese: "Cantonese: Traditional characters, Hong Kong regional expressions",
  parisian: "Parisian French: sophisticated — verlan slang, 'quoi', 'genre' fillers",
  quebecois: "Québécois: distinct accent, joual dialect, rich regional colloquialisms",
  brazil: "Brazilian Portuguese: warm, musical — 'cara', gírias (street slang)",
  european: "European Portuguese: clipped vowels, formal constructs, Lisbon register",
  egyptian: "Egyptian Arabic: most widely understood dialect — 'ya salam', 'habibi'",
  levantine: "Levantine Arabic: Syrian/Lebanese — melodic, warm, softer sounds",
  gulf: "Gulf Arabic: formal register, Khaleeji expressions",
  istanbul: "Istanbul Turkish: modern, urban — standard educated register",
  anatolian: "Anatolian Turkish: warmer, more traditional regional idioms",
  mumbai: "Mumbai Hindi: fast, mixed with English — 'yaar', 'bhai', Bambaiya style",
  delhi: "Delhi Hindi: crisp, assertive — standard Khariboli, capital-city register",
  seoul: "Seoul Korean: standard 표준어, modern urban usage",
  bavarian: "Bavarian German: warm dialect — distinct vowel shifts, 'oida'",
  austrian: "Austrian German: Viennese register, distinct from German standard",
  roman: "Roman Italian: Central Italian vowels, Roman slang — 'mortacci', 'bello'",
  sicilian: "Sicilian: heavily accented, Arabic-influenced sounds, distinct idioms",
};

// ─── Route Handler ───────────────────────────────────────────────────────────
export async function POST(req: Request) {
  // Rate limiting
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      {
        status: 429,
        headers: {
          "Retry-After": "60",
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
        },
      }
    );
  }

  try {
    const { text, sourceLang, targetLang, tone, dialect, signShopMode } =
      await req.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    // Sanitize input
    const sanitizedText = text.trim().slice(0, 500);
    const src = sourceLang || "en";
    const tgt = targetLang || "es";

    // Fetch base + tone variant translations
    const [literal, toneVariantRaw] = await Promise.all([
      fetchTranslation(sanitizedText, src, tgt),
      tone === "formal"
        ? fetchToneVariant(sanitizedText, src, tgt, "Formally say")
        : tone === "slang"
        ? fetchToneVariant(sanitizedText, src, tgt, "Informally say")
        : Promise.resolve(""),
    ]);

    const toneOutput =
      toneVariantRaw && toneVariantRaw !== literal ? toneVariantRaw : literal;

    const dialectNote = DIALECT_NOTES[dialect] || "";
    const dialectLabel =
      dialect !== "general" && dialect !== "standard"
        ? `${dialect.charAt(0).toUpperCase() + dialect.slice(1)} Style`
        : "Regional";

    const translations = [
      {
        label: "Literal",
        output: literal,
        tag: "📖",
        note: "Direct translation — word for word from source",
      },
      {
        label: TONE_LABELS[tone] || "Natural",
        output: toneOutput,
        tag: TONE_TAGS[tone] || "💬",
        note: TONE_NOTES[tone] || "",
      },
      {
        label: dialectLabel,
        output: literal,
        tag: "🗺️",
        note: dialectNote || "Standard regional expression for this language",
      },
    ];

    // Character translations (Sign Shop mode)
    const characterTranslations: Record<string, string> = {};
    if (signShopMode) {
      for (const char of ["Bryant", "Raj", "Maria", "Hatice", "Mei"]) {
        characterTranslations[char] = applyCharacterStyle(literal, char);
      }
    }

    return NextResponse.json({ translations, characterTranslations });
  } catch (error) {
    console.error("Translate route error:", error);
    return NextResponse.json(
      { error: "Translation failed. Please try again." },
      { status: 500 }
    );
  }
}
