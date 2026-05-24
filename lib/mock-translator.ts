import { TranslationInput, TranslationResult, RegionalVariant } from "@/types"

interface LangDemo {
  main: string
  alts: [string, string, string]
  phonetic: string
  pronunciationTip: string
  meaning: string
  context: string
  warning?: string
  whenToUse: string
  whenNotToUse?: string
  examples: [string, string, string]
  regionalComparison: RegionalVariant[]
}

const mockDatabase: Record<string, LangDemo> = {
  es: {
    main: "¿Qué onda?",
    alts: ["¿Qué pedo?", "¿Cómo andas?", "¿Qué hay de nuevo?"],
    phonetic: "KAY ON-dah",
    pronunciationTip: "The 'Q' sounds like 'K'. 'onda' rhymes with 'Honda'. Say it fast and breezy!",
    meaning: "A super casual greeting equivalent to 'What's up?' — literally means 'What's the wave?' but nobody thinks about that anymore.",
    context: "Used constantly in everyday Mexican Spanish among friends, family, and even strangers in informal settings. It's upbeat, friendly, and impossible to say without smiling.",
    warning: "In some Central American countries, 'mala onda' means 'bad vibes'. Don't confuse a greeting with an insult!",
    whenToUse: "Friends, family gatherings, texting, social media, casual street greetings",
    whenNotToUse: "Job interviews, formal meetings, or talking to your boss (unless they're super chill)",
    examples: [
      "¡Oye, qué onda! ¿Vienes al partido esta noche?",
      "— ¿Qué onda? — Todo bien, ¿y tú?",
      "¿Qué onda con la fiesta del sábado? ¿Ya confirmaste?"
    ],
    regionalComparison: [
      { region: "Mexico 🇲🇽", translation: "¿Qué onda?", flag: "🇲🇽" },
      { region: "Argentina 🇦🇷", translation: "¿Qué tal, che?", flag: "🇦🇷" },
      { region: "Spain 🇪🇸", translation: "¿Qué pasa tío?", flag: "🇪🇸" },
      { region: "Colombia 🇨🇴", translation: "¿Qué más, parce?", flag: "🇨🇴" },
      { region: "Puerto Rico 🇵🇷", translation: "¿Qué es la que hay?", flag: "🇵🇷" },
    ]
  },
  fr: {
    main: "Ça roule ?",
    alts: ["Qu'est-ce qui se passe ?", "T'as quoi ?", "C'est quoi le délire ?"],
    phonetic: "sah ROOL",
    pronunciationTip: "Literally 'Does it roll?' Say it with a rising intonation at the end. The 'ça' is like 'sah', super short.",
    meaning: "A very breezy French greeting meaning 'How's it rolling?' — much hipper than the textbook 'Comment allez-vous?'",
    context: "Super popular among young Parisians and urban French speakers. It's the equivalent of a casual head nod + 'all good?' combined.",
    whenToUse: "Friends, texting, café catch-ups, Instagram DMs",
    whenNotToUse: "Speaking to elders, in professional contexts, or formal letters",
    examples: [
      "Eh, ça roule ? T'as l'air en forme aujourd'hui !",
      "— Ça roule ? — Ouais, nickel, et toi ?",
      "Ça roule pour ce soir ? On se retrouve à 20h ?"
    ],
    regionalComparison: [
      { region: "France (Paris)", translation: "Ça roule ?", flag: "🇫🇷" },
      { region: "Québec 🇨🇦", translation: "Comment ça va donc ?", flag: "🇨🇦" },
      { region: "Belgium 🇧🇪", translation: "Ça va bien aller ?", flag: "🇧🇪" },
      { region: "Swiss French 🇨🇭", translation: "Alors, quoi de neuf ?", flag: "🇨🇭" },
    ]
  },
  de: {
    main: "Was geht ab?",
    alts: ["Wie läuft's?", "Was ist los?", "Na, alles fit?"],
    phonetic: "vahs GAYT ahp",
    pronunciationTip: "The 'g' in 'geht' is hard like 'gate'. 'Ab' is short and punchy — 'ahp'. Say it like you're surprised.",
    meaning: "German casual for 'What's up?' — literally 'What's going off?' This is youth slang that's been mainstream since the 2000s.",
    context: "Widely used by younger generations in Germany. 'Wie läuft's?' (How is it running?) is a slightly softer alternative that's also very common.",
    whenToUse: "Friends, messaging, casual hangouts, younger crowds",
    whenNotToUse: "Formal business settings, speaking to elderly people, official communication",
    examples: [
      "Hey, was geht ab? Kommen wir heute noch zusammen?",
      "Was geht ab, Alter? Lange nichts gehört von dir!",
      "Na, was geht ab bei dir so? Alles klar?"
    ],
    regionalComparison: [
      { region: "Germany 🇩🇪", translation: "Was geht ab?", flag: "🇩🇪" },
      { region: "Austria 🇦🇹", translation: "Was ist denn los?", flag: "🇦🇹" },
      { region: "Switzerland 🇨🇭", translation: "Was lauft?", flag: "🇨🇭" },
    ]
  },
  ja: {
    main: "どうしてる？",
    alts: ["元気？", "最近どう？", "調子はどう？"],
    phonetic: "DOH-shee-teh-roo",
    pronunciationTip: "Each syllable is equal length — DO-SHI-TE-RU. No syllable gets extra stress. It flows evenly, like a gentle wave.",
    meaning: "Very common casual Japanese for 'How are you doing?' Literally 'What are you doing?' but used as a check-in among friends.",
    context: "Japanese greetings are highly context-dependent. Among close friends, 'Genki?' (Are you well?) is even more common and casual — just one word!",
    warning: "Be careful with formality levels. This is informal (タメ口) — NEVER use it with bosses or elders. Use 'お元気ですか？' in formal settings.",
    whenToUse: "Close friends, peers, LINE messages, social media",
    whenNotToUse: "Formal settings, with superiors, meeting someone professionally for the first time",
    examples: [
      "ねえ、どうしてる？最近全然会ってないじゃん！",
      "元気？今日何してる？暇だったら遊ばない？",
      "最近どう？仕事忙しいって聞いたよ。"
    ],
    regionalComparison: [
      { region: "Tokyo (Standard)", translation: "どうしてる？", flag: "🇯🇵" },
      { region: "Kansai / Osaka", translation: "どないしてんの？", flag: "🇯🇵" },
      { region: "Kyushu", translation: "どぎゃんしとっと？", flag: "🇯🇵" },
    ]
  },
  ko: {
    main: "요즘 어때?",
    alts: ["잘 지냈어?", "뭐 해?", "어떻게 지내?"],
    phonetic: "YO-jeum uh-TAE",
    pronunciationTip: "'Yojeum' = YO-jeum (these days). 'Eottae' = uh-TAE. Rise your voice at the end like a question. Very soft and friendly.",
    meaning: "Casual Korean for 'How have you been lately?' — commonly used among friends catching up after not seeing each other for a while.",
    context: "Korean has strict formality levels (존댓말 vs 반말). This is 반말 (banmal) — informal speech. 'Jal jinaesseo?' (잘 지냈어?) is great for 'Have you been well?'",
    warning: "NEVER use casual Korean (반말) with someone older or in a formal situation unless explicitly invited to. It's considered very rude and disrespectful.",
    whenToUse: "Close friends, peers your age, people who've told you to speak casually",
    whenNotToUse: "Elders, bosses, new acquaintances, formal situations — switch to 어떻게 지내세요?",
    examples: [
      "야, 요즘 어때? 오랜만이다!",
      "잘 지냈어? 전화 왜 이렇게 안 해?",
      "뭐 해? 오늘 시간 있어? 커피 한 잔 해."
    ],
    regionalComparison: [
      { region: "Seoul (Standard)", translation: "요즘 어때?", flag: "🇰🇷" },
      { region: "Busan", translation: "요즘 어떻노?", flag: "🇰🇷" },
      { region: "Jeolla", translation: "요즘 어딩가?", flag: "🇰🇷" },
    ]
  },
  pt: {
    main: "E aí, tudo bem?",
    alts: ["Qual é a boa?", "Tá de boa?", "Como vai você?"],
    phonetic: "ee AH-ee, TOO-doo BENG",
    pronunciationTip: "'Aí' sounds like 'ah-EE' with stress on second syllable. 'Bem' has a nasal end — like 'beng' but softer. Brazilians say it fast: 'eaítudôbem?'",
    meaning: "The most beloved Brazilian greeting. 'E aí' = 'Hey/And so?' + 'tudo bem' = 'everything good?' Together: a breezy 'Hey, all good?'",
    context: "Used everywhere in Brazil — streets, markets, WhatsApp, work (casual). The pace and warmth are key — Brazilians pack a LOT of energy into this phrase.",
    whenToUse: "Basically everywhere in Brazil in informal contexts — it's the universal greeting",
    whenNotToUse: "Formal written communication, legal/medical contexts, talking to elderly strangers",
    examples: [
      "E aí, tudo bem? Vai ao churrasco hoje?",
      "— E aí! — Tudo ótimo, e você?",
      "Tá de boa? Que saudade cara, sumiu!"
    ],
    regionalComparison: [
      { region: "Brazil (General)", translation: "E aí, tudo bem?", flag: "🇧🇷" },
      { region: "Rio de Janeiro", translation: "Oi, tá na paz?", flag: "🇧🇷" },
      { region: "São Paulo", translation: "E aí mano, firmeza?", flag: "🇧🇷" },
      { region: "Portugal 🇵🇹", translation: "Então, como estás?", flag: "🇵🇹" },
    ]
  },
  it: {
    main: "Come stai?",
    alts: ["Tutto bene?", "Come va?", "Che si dice?"],
    phonetic: "KOH-meh STAY",
    pronunciationTip: "'Come' here means 'how' — NOT the English word. Stress: KOH-meh. 'Stai' sounds like 'stay' with Italian warmth.",
    meaning: "'How are you?' — the standard warm Italian greeting. Simple, versatile, and genuinely caring. Italians often actually want to know the answer.",
    context: "Italians use 'Come stai?' casually and warmly. 'Come va?' (How's it going?) is even breezier. 'Che si dice?' literally means 'What do people say?' — used as 'What's new?'",
    whenToUse: "Friends, acquaintances, family, shopkeepers you know, neighbors",
    whenNotToUse: "Very formal settings, official letters to strangers",
    examples: [
      "Ciao! Come stai? Sono secoli che non ci vediamo!",
      "Come va? Tutto bene con il lavoro?",
      "Che si dice? Novità in giro?"
    ],
    regionalComparison: [
      { region: "Standard Italian", translation: "Come stai?", flag: "🇮🇹" },
      { region: "Rome (Roman)", translation: "Ahò, come stai?", flag: "🇮🇹" },
      { region: "Naples", translation: "Comme stai?", flag: "🇮🇹" },
      { region: "Sicily", translation: "Comu stai?", flag: "🇮🇹" },
    ]
  },
  ar: {
    main: "كيفك؟ (Kīfak?)",
    alts: ["شو أخبارك؟ (Shū akhbārak?)", "إيه أخبارك؟ (Ēh akhbārak?)", "كيف الحال؟ (Kayf al-ḥāl?)"],
    phonetic: "KEE-fak",
    pronunciationTip: "'K' like English 'k'. 'ī' is a long 'ee'. 'fak' rhymes with 'lock' but with 'f'. Very short and punchy — say it quick!",
    meaning: "Casual Levantine Arabic for 'How are you?' — literally 'How are you?' 'Kīfak' for males, 'Kīfik' for females. Super common across Lebanon, Syria, Jordan, Palestine.",
    context: "Levantine Arabic is widely understood due to media and TV. 'Shū akhbārak?' means 'What's your news?' and is used exactly like 'What's up?'",
    warning: "Arabic varies significantly by country. Levantine phrases may confuse people in Morocco or the Gulf. Also: gender agreement matters — change the ending for female speakers.",
    whenToUse: "Casual conversation with friends and acquaintances, WhatsApp, everyday social interactions",
    whenNotToUse: "Formal settings (use Modern Standard Arabic), religious ceremonies, official correspondence",
    examples: [
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
    main: "क्या हाल है?",
    alts: ["कैसे हो?", "क्या चल रहा है?", "सब ठीक?"],
    phonetic: "KYAH HAAL HAY",
    pronunciationTip: "'Kyā' = kyah. 'Hāl' rhymes with 'pal' but with a long 'a'. 'Hai' = hay. Stress the middle word: HAAL.",
    meaning: "The most universal Hindi greeting — 'How are you?' literally 'What is the condition?' Warm, genuine, and understood by every Hindi speaker.",
    context: "Used across India among Hindi speakers. 'Kaise ho?' is slightly more personal. 'Kyā chal rahā hai?' is cool Mumbai slang meaning 'What's going on?'",
    whenToUse: "Friends, family, casual social settings, WhatsApp, daily conversations",
    whenNotToUse: "Formal meetings, professional presentations, talking to elders (use 'Aap kaise hain?' with respect)",
    examples: [
      "अरे यार, क्या हाल है? बहुत दिन बाद दिखे!",
      "कैसे हो? सब ठीक है ना घर पर?",
      "क्या चल रहा है? आज मिलते हैं क्या?"
    ],
    regionalComparison: [
      { region: "Standard Hindi 🇮🇳", translation: "क्या हाल है?", flag: "🇮🇳" },
      { region: "Mumbai (Bambaiya)", translation: "Kya chal raha hai bhai?", flag: "🇮🇳" },
      { region: "Delhi", translation: "Kya haal-chaal hai yaar?", flag: "🇮🇳" },
    ]
  },
  ru: {
    main: "Как дела?",
    alts: ["Что нового?", "Как жизнь?", "Всё нормально?"],
    phonetic: "kak dye-LAH",
    pronunciationTip: "'Kak' = short, like 'cock'. 'Dela' = 'dye-LAH' — stress on the LAST syllable. It's faster than it looks — run the words together.",
    meaning: "The standard Russian 'How are things?' Used both formally and informally. Warning: Russians typically answer honestly — expect a real response, not just 'fine'!",
    context: "Unlike English where 'How are you?' is just a greeting, in Russian culture it's often a real question. Answering with details (even complaints) is perfectly normal.",
    warning: "Answering 'How are you?' with a detailed complaint is normal in Russian culture — don't be surprised! It shows they trust you enough to be real.",
    whenToUse: "Casual and semi-formal settings, friends, colleagues, social media",
    whenNotToUse: "Very formal/official settings — use 'Как вы поживаете?' for more formal situations",
    examples: [
      "Привет! Как дела? Сто лет тебя не видел!",
      "— Как дела? — Да ничего, помаленьку, спасибо.",
      "Что нового? Как работа, не достала ещё?"
    ],
    regionalComparison: [
      { region: "Standard Russian 🇷🇺", translation: "Как дела?", flag: "🇷🇺" },
      { region: "Moscow", translation: "Как жизнь? / Как дела?", flag: "🇷🇺" },
      { region: "St. Petersburg", translation: "Как вы поживаете?", flag: "🇷🇺" },
    ]
  },
  zh: {
    main: "最近怎么样？",
    alts: ["你好吗？", "在干嘛呢？", "还行吗？"],
    phonetic: "DZWAY-jeen dzuh-muh-YAHNG",
    pronunciationTip: "'Zuì' = falling tone (4th). 'Jìn' = also falling. 'Zěn' = dipping (3rd tone). 'Yàng' = falling again. Tones are everything in Chinese!",
    meaning: "Standard casual Mandarin for 'How have you been lately?' 'Zuìjìn' = recently/lately. 'Zěnmeyàng' = how is it?",
    context: "Chinese doesn't have a single 1:1 for 'What's up?' but this phrase serves the same social function beautifully. Very natural and widely used.",
    whenToUse: "Catching up with friends, WeChat messages, social media check-ins",
    whenNotToUse: "Formal meetings, first-time professional introductions",
    examples: [
      "哟，最近怎么样？好久不见啦！",
      "在干嘛呢？今晚有空吗？",
      "还行吗？听说你最近工作很忙啊。"
    ],
    regionalComparison: [
      { region: "Mandarin (Beijing)", translation: "最近怎么样？", flag: "🇨🇳" },
      { region: "Cantonese (HK)", translation: "最近點呀？(Jeuigahn dim aa?)", flag: "🇭🇰" },
      { region: "Taiwan", translation: "最近還好嗎？", flag: "🇹🇼" },
    ]
  },
  en: {
    main: "What's good?",
    alts: ["How's it going?", "What's the vibe?", "Yo, what's new?"],
    phonetic: "whuts GOOD",
    pronunciationTip: "Merge 'what's' into one quick syllable — 'whuts'. Then land on 'GOOD' with energy. It's casual, so don't over-enunciate.",
    meaning: "A very casual American English greeting meaning 'What's up?' or 'How are you?' More urban/modern than 'How are you?' and less direct than 'What's up?'",
    context: "Popular in American urban culture, especially among younger people. Feels friendly, low-pressure, and genuinely chill.",
    whenToUse: "Friends, text messages, social media, casual encounters",
    whenNotToUse: "Professional emails, meeting your partner's parents, job interviews",
    examples: [
      "Yo, what's good? Haven't seen you in ages!",
      "— What's good? — Honestly? Chilling, finally got a day off.",
      "What's good with you lately? You seem different, in a good way."
    ],
    regionalComparison: [
      { region: "American (General)", translation: "What's good?", flag: "🇺🇸" },
      { region: "British 🇬🇧", translation: "You alright?", flag: "🇬🇧" },
      { region: "Australian 🇦🇺", translation: "How ya going?", flag: "🇦🇺" },
      { region: "Canadian 🇨🇦", translation: "How's it going, eh?", flag: "🇨🇦" },
    ]
  },
}

const toneAltLabels: Record<string, [string, string, string]> = {
  casual:       ['A bit more formal', 'Extra chill version', 'Texting shorthand'],
  formal:       ['Standard formal',   'Very formal',         'Business appropriate'],
  slang:        ['Street-level slang','Youth slang',         'Internet / meme version'],
  funny:        ['Pun version',       'Exaggerated',         'Self-deprecating twist'],
  romantic:     ['Poetic version',    'Playful flirt',       'Deep & sincere'],
  professional: ['Business casual',   'Corporate style',     'LinkedIn-friendly'],
}

const toneAltEmojis: Record<string, [string, string, string]> = {
  casual:       ['👔', '😌', '📱'],
  formal:       ['🎩', '💼', '✉️'],
  slang:        ['🔥', '💯', '🤙'],
  funny:        ['😂', '🤣', '💀'],
  romantic:     ['🌹', '😘', '💖'],
  professional: ['👔', '🤝', '📊'],
}

export function generateTranslation(input: TranslationInput): TranslationResult {
  const demo = mockDatabase[input.targetLang] || mockDatabase['es']
  const labels = toneAltLabels[input.tone] || toneAltLabels['casual']
  const emojis = toneAltEmojis[input.tone] || toneAltEmojis['casual']

  return {
    mainTranslation: demo.main,
    alternateVersions: demo.alts.map((text, i) => ({
      text,
      label: labels[i],
      emoji: emojis[i],
    })),
    culturalNotes: {
      meaning: demo.meaning,
      context: demo.context,
      warning: demo.warning,
      whenToUse: demo.whenToUse,
      whenNotToUse: demo.whenNotToUse,
    },
    pronunciation: {
      phonetic: demo.phonetic,
      tip: demo.pronunciationTip,
    },
    exampleSentences: demo.examples.map((sentence) => ({ sentence })),
    regionalComparison: input.compareRegions ? demo.regionalComparison : undefined,
  }
}
