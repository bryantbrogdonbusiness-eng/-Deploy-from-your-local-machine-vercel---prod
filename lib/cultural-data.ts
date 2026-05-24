import { RegionalVariant } from "@/types"

interface CulturalData {
  meaning: string
  context: string
  warning?: string
  whenToUse: string
  whenNotToUse?: string
  phonetic: string
  pronunciationTip: string
  exampleTemplates: string[]
  regionalComparison: RegionalVariant[]
}

export const culturalDatabase: Record<string, CulturalData> = {
  es: {
    meaning: "Spanish slang is rich with regional flavor. Casual phrases vary widely from Mexico to Argentina to Spain — each region has its own unique expressions and rhythms.",
    context: "Spanish speakers use informal language constantly among friends and family. Slang is a sign of closeness and warmth in Hispanic cultures.",
    warning: "Slang varies greatly by country. A phrase that's friendly in Mexico might be offensive in another country. When in doubt, use the standard version.",
    whenToUse: "Friends, family, texting, social media, casual street conversations",
    whenNotToUse: "Job interviews, formal meetings, speaking with elders you don't know well",
    phonetic: "Pronunciation varies by region — Mexican Spanish is clearer, Argentinian has Italian-influenced intonation",
    pronunciationTip: "Relax your mouth and speak at a natural pace. Spanish vowels are always the same sound — no silent letters!",
    exampleTemplates: [
      "¡Oye! ¿Cómo te fue hoy?",
      "— ¿Todo bien? — Sí, tranquilo, ¿y tú?",
      "¿Qué planes tienes para el fin de semana?"
    ],
    regionalComparison: [
      { region: "Mexico 🇲🇽", translation: "¿Qué onda?", flag: "🇲🇽" },
      { region: "Argentina 🇦🇷", translation: "¿Qué tal, che?", flag: "🇦🇷" },
      { region: "Spain 🇪🇸", translation: "¿Qué pasa tío?", flag: "🇪🇸" },
      { region: "Colombia 🇨🇴", translation: "¿Qué más, parce?", flag: "🇨🇴" },
    ]
  },
  fr: {
    meaning: "French slang (verlan, argot) is creative and constantly evolving. Parisians speak very differently from Québécois or Belgian French speakers.",
    context: "French informal speech is a cultural marker — using slang correctly signals that you truly know the culture, not just the textbook.",
    warning: "Québec French and European French slang can be mutually confusing. Some words have completely different meanings across regions.",
    whenToUse: "Friends, texting, café catch-ups, Instagram DMs, casual social settings",
    whenNotToUse: "Speaking to elders, professional contexts, formal letters or emails",
    phonetic: "sah ROOL — French nasal sounds are unique. Practice 'on', 'en', 'an' as nasal vowels.",
    pronunciationTip: "French liaison is key — words flow together. Don't pause between words, let them blend naturally.",
    exampleTemplates: [
      "Eh, ça va ? T'as l'air en forme aujourd'hui !",
      "— Ça roule ? — Ouais, nickel, et toi ?",
      "T'es libre ce soir ? On se retrouve à 20h ?"
    ],
    regionalComparison: [
      { region: "France (Paris) 🇫🇷", translation: "Ça roule ?", flag: "🇫🇷" },
      { region: "Québec 🇨🇦", translation: "Comment ça va donc ?", flag: "🇨🇦" },
      { region: "Belgium 🇧🇪", translation: "Ça va bien aller ?", flag: "🇧🇪" },
      { region: "Switzerland 🇨🇭", translation: "Alors, quoi de neuf ?", flag: "🇨🇭" },
    ]
  },
  de: {
    meaning: "German casual speech is very different from the formal German taught in classrooms. Youth slang borrows heavily from English and Turkish.",
    context: "Germans have a clear distinction between formal (Sie) and informal (du) speech. Using casual language too early can seem disrespectful.",
    warning: "German formality rules are strict. Always start formal with new people and wait to be invited to use casual speech.",
    whenToUse: "Friends, messaging, casual hangouts, younger crowds",
    whenNotToUse: "Formal business settings, speaking to elderly people, official communication",
    phonetic: "vahs GAYT ahp — German consonants are crisp and precise. 'ch' sounds vary by region.",
    pronunciationTip: "German words are stressed on the first syllable. Speak clearly and don't swallow consonants.",
    exampleTemplates: [
      "Hey, was geht? Kommen wir heute noch zusammen?",
      "Alles klar bei dir? Lange nichts gehört!",
      "Na, was machst du so? Alles fit?"
    ],
    regionalComparison: [
      { region: "Germany 🇩🇪", translation: "Was geht ab?", flag: "🇩🇪" },
      { region: "Austria 🇦🇹", translation: "Was ist denn los?", flag: "🇦🇹" },
      { region: "Switzerland 🇨🇭", translation: "Was lauft?", flag: "🇨🇭" },
    ]
  },
  ja: {
    meaning: "Japanese has multiple formality levels built into the language itself. Casual speech (タメ口) is only used with close friends and peers.",
    context: "Japanese social hierarchy deeply affects language. The same idea is expressed completely differently depending on who you're talking to.",
    warning: "NEVER use casual Japanese with bosses, elders, or new acquaintances. It is considered very rude and disrespectful.",
    whenToUse: "Close friends, peers, LINE messages, social media with friends",
    whenNotToUse: "Formal settings, superiors, meeting someone professionally for the first time",
    phonetic: "Each syllable is equal length in Japanese. No syllable gets extra stress — it flows evenly.",
    pronunciationTip: "Japanese syllables are short and equal. Don't stress any particular syllable — keep it smooth and even.",
    exampleTemplates: [
      "ねえ、最近どう？元気してる？",
      "今日何してる？暇だったら遊ばない？",
      "久しぶり！全然会ってないじゃん！"
    ],
    regionalComparison: [
      { region: "Tokyo (Standard) 🇯🇵", translation: "どうしてる？", flag: "🇯🇵" },
      { region: "Kansai / Osaka 🇯🇵", translation: "どないしてんの？", flag: "🇯🇵" },
      { region: "Kyushu 🇯🇵", translation: "どぎゃんしとっと？", flag: "🇯🇵" },
    ]
  },
  ko: {
    meaning: "Korean has strict formality levels (존댓말 vs 반말). Casual speech is only appropriate with close friends your age or younger.",
    context: "Age hierarchy is central to Korean culture and language. Using the wrong speech level is a serious social faux pas.",
    warning: "NEVER use casual Korean (반말) with someone older or in a formal situation. It is considered very rude.",
    whenToUse: "Close friends, peers your age, people who have invited you to speak casually",
    whenNotToUse: "Elders, bosses, new acquaintances, formal situations",
    phonetic: "YO-jeum uh-TAE — Korean has no tones but vowel length and consonant strength matter.",
    pronunciationTip: "Korean consonants at the end of syllables are not fully released. Practice the subtle 'stopped' sounds.",
    exampleTemplates: [
      "야, 오랜만이다! 요즘 어떻게 지냈어?",
      "잘 지냈어? 전화 왜 이렇게 안 해?",
      "뭐 해? 오늘 시간 있어? 커피 한 잔 해."
    ],
    regionalComparison: [
      { region: "Seoul (Standard) 🇰🇷", translation: "요즘 어때?", flag: "🇰🇷" },
      { region: "Busan 🇰🇷", translation: "요즘 어떻노?", flag: "🇰🇷" },
      { region: "Jeolla 🇰🇷", translation: "요즘 어딩가?", flag: "🇰🇷" },
    ]
  },
  pt: {
    meaning: "Brazilian Portuguese is warm, energetic, and full of slang. European Portuguese sounds quite different — like a different language to untrained ears.",
    context: "Brazilians are famously warm and expressive. Informal language is used constantly and signals friendliness and openness.",
    warning: "Brazilian and European Portuguese slang are very different. What's normal in Brazil may sound odd in Portugal and vice versa.",
    whenToUse: "Basically everywhere in Brazil in informal contexts — it's the universal approach",
    whenNotToUse: "Formal written communication, legal or medical contexts",
    phonetic: "ee AH-ee, TOO-doo BENG — Brazilian Portuguese has open, musical vowels.",
    pronunciationTip: "Brazilian Portuguese has a sing-song rhythm. Let your voice rise and fall naturally — it's more musical than European Portuguese.",
    exampleTemplates: [
      "E aí, tudo bem? Vai ao churrasco hoje?",
      "— E aí! — Tudo ótimo, e você?",
      "Tá de boa? Que saudade cara, sumiu!"
    ],
    regionalComparison: [
      { region: "Brazil (General) 🇧🇷", translation: "E aí, tudo bem?", flag: "🇧🇷" },
      { region: "Rio de Janeiro 🇧🇷", translation: "Oi, tá na paz?", flag: "🇧🇷" },
      { region: "São Paulo 🇧🇷", translation: "E aí mano, firmeza?", flag: "🇧🇷" },
      { region: "Portugal 🇵🇹", translation: "Então, como estás?", flag: "🇵🇹" },
    ]
  },
  it: {
    meaning: "Italian is famously expressive and warm. Italians use gestures, tone, and emotion alongside words to communicate fully.",
    context: "Italians are genuinely interested in how you're doing. Casual conversation is an art form — take your time and be warm.",
    warning: "Italian regional dialects can be mutually unintelligible. Standard Italian (based on Tuscan) is understood everywhere.",
    whenToUse: "Friends, acquaintances, family, shopkeepers you know, neighbors",
    whenNotToUse: "Very formal settings, official letters to strangers",
    phonetic: "KOH-meh STAY — Italian vowels are pure and consistent. Every letter is pronounced.",
    pronunciationTip: "Italian is phonetic — pronounce every letter. Double consonants are held slightly longer. Stress is usually on the second-to-last syllable.",
    exampleTemplates: [
      "Ciao! Come stai? Sono secoli che non ci vediamo!",
      "Come va? Tutto bene con il lavoro?",
      "Che si dice? Novità in giro?"
    ],
    regionalComparison: [
      { region: "Standard Italian 🇮🇹", translation: "Come stai?", flag: "🇮🇹" },
      { region: "Rome (Roman) 🇮🇹", translation: "Ahò, come stai?", flag: "🇮🇹" },
      { region: "Naples 🇮🇹", translation: "Comme stai?", flag: "🇮🇹" },
      { region: "Sicily 🇮🇹", translation: "Comu stai?", flag: "🇮🇹" },
    ]
  },
  ar: {
    meaning: "Arabic varies enormously by country. Modern Standard Arabic (MSA) is formal and written; each country has its own spoken dialect.",
    context: "Levantine Arabic (Lebanon, Syria, Jordan, Palestine) is widely understood due to TV and media. Egyptian Arabic is also widely understood.",
    warning: "Arabic dialects vary significantly. Gulf Arabic, Egyptian, Moroccan, and Levantine are quite different from each other.",
    whenToUse: "Casual conversation with friends, WhatsApp, everyday social interactions",
    whenNotToUse: "Formal settings, religious ceremonies, official correspondence (use Modern Standard Arabic)",
    phonetic: "KEE-fak — Arabic has sounds not found in English: the guttural 'kh', the 'ayn' (ع), and emphatic consonants.",
    pronunciationTip: "Arabic is written right to left and has sounds that require throat engagement. The 'ain' sound (ع) comes from deep in the throat.",
    exampleTemplates: [
      "هلا! كيفك؟ من زمان ما شفتك!",
      "شو أخبارك؟ شو في جديد معك؟",
      "كيف الحال؟ كل شي تمام إن شاء الله؟"
    ],
    regionalComparison: [
      { region: "Levantine 🇱🇧", translation: "كيفك؟ (Kīfak?)", flag: "🇱🇧" },
      { region: "Egyptian 🇪🇬", translation: "إيه أخبارك؟", flag: "🇪🇬" },
      { region: "Gulf 🇸🇦", translation: "كيف حالك؟", flag: "🇸🇦" },
      { region: "Moroccan 🇲🇦", translation: "لاباس؟ (Labas?)", flag: "🇲🇦" },
    ]
  },
  hi: {
    meaning: "Hindi informal speech varies greatly between cities. Mumbai Hindi (Bambaiya) mixes Hindi and English constantly, while Delhi Hindi is more traditional.",
    context: "Hindi speakers often mix English words naturally into conversation — this is called Hinglish and is completely normal.",
    warning: "Always use respectful form (आप/aap) with elders. Using casual form (तुम/tum or तू/tu) with the wrong person is rude.",
    whenToUse: "Friends, family, casual social settings, WhatsApp, daily conversations",
    whenNotToUse: "Formal meetings, speaking to elders (use 'Aap kaise hain?' with respect)",
    phonetic: "KYAH HAAL HAY — Hindi has aspirated consonants (kh, gh, bh, dh) that don't exist in English.",
    pronunciationTip: "Hindi has both aspirated and unaspirated consonants — the difference between 'p' and 'ph' (as in phone) matters a lot.",
    exampleTemplates: [
      "अरे यार, क्या हाल है? बहुत दिन बाद दिखे!",
      "कैसे हो? सब ठीक है ना घर पर?",
      "क्या चल रहा है? आज मिलते हैं क्या?"
    ],
    regionalComparison: [
      { region: "Standard Hindi 🇮🇳", translation: "क्या हाल है?", flag: "🇮🇳" },
      { region: "Mumbai (Bambaiya) 🇮🇳", translation: "Kya chal raha hai bhai?", flag: "🇮🇳" },
      { region: "Delhi 🇮🇳", translation: "Kya haal-chaal hai yaar?", flag: "🇮🇳" },
    ]
  },
  ru: {
    meaning: "Russian informal speech is direct and honest. Unlike English, answering 'How are you?' with real feelings is normal and expected.",
    context: "Russians have a reputation for being serious, but among friends they are warm and expressive. Informal Russian is rich with humor.",
    warning: "Answering with a detailed complaint is normal in Russian culture — don't be surprised! It shows trust.",
    whenToUse: "Casual and semi-formal settings, friends, colleagues, social media",
    whenNotToUse: "Very formal/official settings — use 'Как вы поживаете?' for more formal situations",
    phonetic: "kak dye-LAH — Russian stress is unpredictable and must be memorized for each word.",
    pronunciationTip: "Russian stress is crucial and unpredictable. Unstressed 'o' sounds like 'a'. Practice with native audio.",
    exampleTemplates: [
      "Привет! Как дела? Сто лет тебя не видел!",
      "— Как дела? — Да ничего, помаленьку, спасибо.",
      "Что нового? Как работа, не достала ещё?"
    ],
    regionalComparison: [
      { region: "Standard Russian 🇷🇺", translation: "Как дела?", flag: "🇷🇺" },
      { region: "Moscow 🇷🇺", translation: "Как жизнь?", flag: "🇷🇺" },
      { region: "St. Petersburg 🇷🇺", translation: "Как вы поживаете?", flag: "🇷🇺" },
    ]
  },
  zh: {
    meaning: "Mandarin Chinese uses tones to distinguish meaning — the same syllable can mean completely different things with different tones.",
    context: "Chinese informal speech varies between Mandarin, Cantonese, and regional dialects. Standard Mandarin (普通话) is widely understood.",
    warning: "Tones are everything in Chinese. Getting a tone wrong can completely change the meaning of a word.",
    whenToUse: "Catching up with friends, WeChat messages, social media check-ins",
    whenNotToUse: "Formal meetings, first-time professional introductions",
    phonetic: "DZWAY-jeen dzuh-muh-YAHNG — Mandarin has 4 tones plus a neutral tone.",
    pronunciationTip: "Mandarin has 4 tones: flat (1st), rising (2nd), dip-then-rise (3rd), falling (4th). Tones completely change meaning!",
    exampleTemplates: [
      "哟，最近怎么样？好久不见啦！",
      "在干嘛呢？今晚有空吗？",
      "还行吗？听说你最近工作很忙啊。"
    ],
    regionalComparison: [
      { region: "Mandarin (Beijing) 🇨🇳", translation: "最近怎么样？", flag: "🇨🇳" },
      { region: "Cantonese (HK) 🇭🇰", translation: "最近點呀？", flag: "🇭🇰" },
      { region: "Taiwan 🇹🇼", translation: "最近還好嗎？", flag: "🇹🇼" },
    ]
  },
  en: {
    meaning: "English slang varies enormously between American, British, Australian, and other varieties. Even within the US, regional slang differs widely.",
    context: "English is the world's most borrowed-from language. New slang emerges constantly, especially from African American Vernacular English (AAVE).",
    warning: "British and American slang can be very different — some American phrases are offensive in the UK and vice versa.",
    whenToUse: "Friends, text messages, social media, casual encounters",
    whenNotToUse: "Professional emails, meeting your partner's parents, job interviews",
    phonetic: "whuts GOOD — English stress patterns are irregular and must be learned word by word.",
    pronunciationTip: "American English reduces unstressed vowels to a 'schwa' sound. Words run together in casual speech — 'what are you' becomes 'whatcha'.",
    exampleTemplates: [
      "Yo, what's good? Haven't seen you in ages!",
      "— What's good? — Honestly? Chilling, finally got a day off.",
      "What's good with you lately? You seem different, in a good way."
    ],
    regionalComparison: [
      { region: "American (General) 🇺🇸", translation: "What's good?", flag: "🇺🇸" },
      { region: "British 🇬🇧", translation: "You alright?", flag: "🇬🇧" },
      { region: "Australian 🇦🇺", translation: "How ya going?", flag: "🇦🇺" },
      { region: "Canadian 🇨🇦", translation: "How's it going, eh?", flag: "🇨🇦" },
    ]
  },
}
