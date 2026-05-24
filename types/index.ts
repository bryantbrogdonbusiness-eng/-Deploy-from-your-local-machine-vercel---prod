export interface AlternateVersion {
  text: string
  label: string
  emoji: string
}

export interface ExampleSentence {
  sentence: string
}

export interface RegionalVariant {
  region: string
  translation: string
  flag: string
}

export interface TranslationResult {
  mainTranslation: string
  alternateVersions: AlternateVersion[]
  culturalNotes: {
    meaning: string
    context: string
    warning?: string
    whenToUse: string
    whenNotToUse?: string
  }
  pronunciation: {
    phonetic: string
    tip?: string
  }
  exampleSentences: ExampleSentence[]
  regionalComparison?: RegionalVariant[]
}

export interface TranslationInput {
  phrase: string
  sourceLang: string
  targetLang: string
  region: string
  tone: string
  compareRegions: boolean
}
