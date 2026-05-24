export interface Language {
  code: string
  name: string
  flag: string
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', flag: '🇧🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
]

export const regionsByLanguage: Record<string, string[]> = {
  en: ['American', 'British', 'Australian', 'Canadian', 'South African'],
  es: ['Mexican', 'Spain (European)', 'Argentine', 'Colombian', 'Puerto Rican', 'Cuban'],
  fr: ['France (Parisian)', 'Québécois', 'Belgian', 'Swiss French', 'Ivorian'],
  pt: ['Brazilian', 'European (Portugal)', 'Angolan'],
  de: ['German (Germany)', 'Austrian', 'Swiss German'],
  it: ['Standard Italian', 'Roman', 'Sicilian', 'Northern Italian'],
  ja: ['Tokyo (Standard)', 'Kansai / Osaka', 'Kyushu'],
  ko: ['Seoul (Standard)', 'Busan', 'Jeolla'],
  zh: ['Mandarin (Beijing)', 'Cantonese (Hong Kong)', 'Taiwanese Mandarin'],
  ar: ['Modern Standard (Formal)', 'Egyptian', 'Gulf', 'Levantine', 'Moroccan (Darija)'],
  hi: ['Standard Hindi', 'Mumbai (Bambaiya)', 'Delhi'],
  ru: ['Standard Russian', 'Moscow', 'St. Petersburg'],
}

export const tones = [
  { value: 'casual',       label: 'Casual',       emoji: '😎' },
  { value: 'formal',       label: 'Formal',        emoji: '👔' },
  { value: 'slang',        label: 'Slang',         emoji: '🔥' },
  { value: 'funny',        label: 'Funny',         emoji: '😂' },
  { value: 'romantic',     label: 'Romantic',      emoji: '💕' },
  { value: 'professional', label: 'Professional',  emoji: '💼' },
]
