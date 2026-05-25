import { NextResponse } from "next/server";

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
    prefixes: [
      "To be precise, ",
      "Technically speaking, ",
      "In essence, ",
      "",
    ],
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
    prefixes: [
      "Actually, ",
      "To be accurate, ",
      "Precisely — ",
      "Correctly stated: ",
      "",
    ],
    suffixes: [
      " ...culturally speaking.",
      " — with nuance.",
      " ...in proper context.",
      " — this is accurate.",
      "",
    ],
  },
};

function applyCharacterStyle(text: string, characterName: string): string {
  const style = CHARACTER_STYLES[characterName];
  if (!style) return text;
  const prefix = style.prefixes[Math.floor(Math.random() * style.prefixes.length)];
  const suffix = style.suffixes[Math.floor(Math.random() * style.suffixes.length)];
  let result = text;
  if (prefix) {
    result = prefix + result.charAt(0).toLowerCase() + result.slice(1);
  }
  if (suffix) {
    result = result.replace(/[.!?]+$/, "") + suffix;
  }
  return result;
}

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
    const res = await fetch(url, {
      signal: AbortSignal.timeout(8000),
    });
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
  // Try to get a different phrasing by prompting MyMemory differently
  const modified = `${instruction}: ${text}`;
  try {
    const langpair = `${sourceLang}|${targetLang}`;
    const url = `https://api.mymemory.translated.web/get?q=${encodeURIComponent(
      modified
    )}&langpair=${encodeURIComponent(langpair)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    const data = await res.json();
    if (
      data.responseStatus === 200 &&
      data.responseData?.translatedText
    ) {
      // Strip the instruction from the result if it gets echoed
      let result: string = data.responseData.translatedText;
      // Remove common instruction echoes
      const colon = result.indexOf(": ");
      if (colon > 0 && colon < 40) result = result.slice(colon + 2);
      return result;
    }
  } catch {
    // fallback handled by caller
  }
  return "";
}

const TONE_TAGS: Record<string, string> = {
  formal: "🎩",
  casual: "💬",
  slang: "🔥",
  humorous: "😄",
};

const TONE_LABELS: Record<string, string> = {
  formal: "Formal Register",
  casual: "Natural / Casual",
  slang: "Street / Slang",
  humorous: "Playful / Humorous",
};

const TONE_NOTES: Record<string, string> = {
  formal:
    "Professional register — suitable for business, official, or academic contexts",
  casual:
    "Conversational and natural — how most speakers would phrase this day-to-day",
  slang:
    "Informal, colloquial — regional street language and current slang expressions",
  humorous:
    "Light and playful — with a comedic or casual twist appropriate to the region",
};

const DIALECT_NOTES: Record<string, string> = {
  nyc: "NYC dialect: direct, fast-paced — 'mad', 'no cap', 'bussin', 'it's giving'",
  southern:
    "Southern US: warm, drawn-out — 'y'all', 'fixin' to', 'bless your heart', 'might could'",
  california:
    "West Coast / Cali: chill and vibey — 'hella', 'stoked', 'lowkey', 'no worries'",
  british:
    "British English: understated wit — 'quite', 'brilliant', 'bloody', 'cheers', 'innit'",
  australian:
    "Australian: self-deprecating warmth — 'arvo', 'no worries mate', 'she'll be right', 'reckon'",
  mexican:
    "Mexican Spanish: rich slang — 'chido/a', 'güey/wey', 'no manches', 'órale', 'chale'",
  castilian:
    "Castilian Spanish: distinct 'vosotros', crisp 'c/z' pronunciation, Peninsular idioms",
  caribbean:
    "Caribbean Spanish: rhythmic, fast cadence — dropped final consonants, musical phrasing",
  argentine:
    "Argentine Spanish: 'che', 'vos', lunfardo slang — deeply expressive Rioplatense flavor",
  mandarin: "Standard Mandarin: Simplified Chinese, mainland PRC norms, 普通话",
  cantonese:
    "Cantonese: Traditional characters, Guangdong/Hong Kong regional expressions",
  parisian:
    "Parisian French: sophisticated — 'quoi', 'genre', verlan slang, Parisian directness",
  quebecois:
    "Québécois: distinct accent, 'joual' dialect, rich colloquialisms unique to Quebec",
  brazil:
    "Brazilian Portuguese: warm and musical — 'cara', 'saudade', gírias (street slang)",
  european:
    "European Portuguese: clipped vowels, formal constructs, Lisbon register",
  egyptian:
    "Egyptian Arabic: most widely understood dialect — expressive, 'ya salam', 'habibi'",
  levantine:
    "Levantine Arabic: Syrian/Lebanese/Palestinian — melodic, warm, softer sounds",
  gulf: "Gulf Arabic: formal register, Khaleeji expressions, Arabian Peninsula dialect",
  istanbul: "Istanbul Turkish: modern, urban, international — standard educated register",
  anatolian:
    "Anatolian Turkish: warmer, more traditional — regional idioms from central Turkey",
  parisian2: "Parisian French",
  mumbai: "Mumbai Hindi: fast, mixed with English — 'yaar', 'bhai', Bambaiya style",
  delhi: "Delhi Hindi: crisp, assertive — standard Khariboli, capital-city register",
  "standard-hi": "Standard Hindi: formal, literary — Devanagari script, classical register",
  seoul: "Seoul Korean: standard 표준어, modern urban usage, K-drama register",
  bavarian: "Bavarian German: warm dialect of southern Germany, distinct 'oida' and vowel shifts",
  austrian:
    "Austrian German: Viennese register, 'bitte' culture, distinct from German standard",
  roman: "Roman Italian: distinct Central Italian vowels, Roman slang — 'mortacci', 'bello'",
  sicilian: "Sicilian: heavily accented, Arabic-influenced vowel sounds, distinct idioms",
};

export async function POST(req: Request) {
  try {
    const { text, sourceLang, targetLang, tone, dialect, signShopMode } =
      await req.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const src = sourceLang || "en";
    const tgt = targetLang || "es";

    // Fetch base translation
    const literal = await fetchTranslation(text.trim(), src, tgt);

    // Try a tone-flavored variant (best-effort)
    let toneVariant = "";
    if (tone === "formal") {
      toneVariant = await fetchToneVariant(
        text.trim(),
        src,
        tgt,
        "Formally say"
      );
    } else if (tone === "slang") {
      toneVariant = await fetchToneVariant(
        text.trim(),
        src,
        tgt,
        "Informally say"
      );
    }

    const toneOutput = toneVariant && toneVariant !== literal ? toneVariant : literal;

    const dialectNote = DIALECT_NOTES[dialect] || "";
    const toneNote = TONE_NOTES[tone] || "";

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
        note: toneNote,
      },
      {
        label: dialectLabel,
        output: literal,
        tag: "🗺️",
        note:
          dialectNote ||
          "Standard regional expression for this language",
      },
    ];

    // Generate character translations if Sign Shop mode is on
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
      { error: "Translation failed" },
      { status: 500 }
    );
  }
}
