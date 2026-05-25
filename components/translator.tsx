"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowRight,
  Copy,
  RefreshCw,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { value: "en", label: "🇺🇸 English" },
  { value: "es", label: "🇲🇽 Spanish" },
  { value: "zh", label: "🇨🇳 Chinese" },
  { value: "tr", label: "🇹🇷 Turkish" },
  { value: "hi", label: "🇮🇳 Hindi" },
  { value: "fr", label: "🇫🇷 French" },
  { value: "pt", label: "🇧🇷 Portuguese" },
  { value: "ar", label: "🇸🇦 Arabic" },
  { value: "ja", label: "🇯🇵 Japanese" },
  { value: "ko", label: "🇰🇷 Korean" },
  { value: "de", label: "🇩🇪 German" },
  { value: "it", label: "🇮🇹 Italian" },
  { value: "ru", label: "🇷🇺 Russian" },
];

const TONES = [
  { value: "formal", label: "🎩 Formal" },
  { value: "casual", label: "💬 Casual" },
  { value: "slang", label: "🔥 Slang" },
  { value: "humorous", label: "😄 Humorous" },
];

const DIALECTS: Record<string, Array<{ value: string; label: string }>> = {
  en: [
    { value: "general", label: "General American" },
    { value: "nyc", label: "🗽 New York City" },
    { value: "southern", label: "🤠 Southern US" },
    { value: "california", label: "🌊 California" },
    { value: "british", label: "🇬🇧 British" },
    { value: "australian", label: "🇦🇺 Australian" },
  ],
  es: [
    { value: "general", label: "General Spanish" },
    { value: "mexican", label: "🇲🇽 Mexican" },
    { value: "castilian", label: "🇪🇸 Castilian" },
    { value: "caribbean", label: "🌴 Caribbean" },
    { value: "argentine", label: "🇦🇷 Argentine" },
  ],
  zh: [
    { value: "mandarin", label: "普通话 Mandarin" },
    { value: "cantonese", label: "粵語 Cantonese" },
  ],
  fr: [
    { value: "parisian", label: "🥐 Parisian French" },
    { value: "quebecois", label: "🍁 Québécois" },
  ],
  pt: [
    { value: "brazil", label: "🇧🇷 Brazilian" },
    { value: "european", label: "🇵🇹 European" },
  ],
  ar: [
    { value: "msa", label: "Modern Standard" },
    { value: "egyptian", label: "🇪🇬 Egyptian" },
    { value: "levantine", label: "🇱🇧 Levantine" },
    { value: "gulf", label: "🇸🇦 Gulf" },
  ],
  hi: [
    { value: "standard-hi", label: "Standard Hindi" },
    { value: "mumbai", label: "🎬 Mumbai" },
    { value: "delhi", label: "🏛️ Delhi" },
  ],
  tr: [
    { value: "istanbul", label: "🌆 Istanbul" },
    { value: "anatolian", label: "Anatolian" },
  ],
  de: [
    { value: "standard", label: "Standard German" },
    { value: "bavarian", label: "🥨 Bavarian" },
    { value: "austrian", label: "🇦🇹 Austrian" },
  ],
  it: [
    { value: "standard", label: "Standard Italian" },
    { value: "roman", label: "🏛️ Roman" },
    { value: "sicilian", label: "🌋 Sicilian" },
  ],
  ja: [{ value: "standard", label: "Standard Japanese" }],
  ko: [{ value: "seoul", label: "🌆 Seoul Korean" }],
  ru: [{ value: "standard", label: "Standard Russian" }],
};

const CHARACTERS = [
  {
    name: "Bryant",
    role: "The Charmer",
    emoji: "😎",
    gradient: "from-blue-500 to-indigo-600",
    cardBg: "bg-blue-950/30",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    name: "Raj",
    role: "The Professional",
    emoji: "📐",
    gradient: "from-emerald-500 to-teal-600",
    cardBg: "bg-emerald-950/30",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    name: "Maria",
    role: "The Artist",
    emoji: "🎨",
    gradient: "from-rose-500 to-pink-600",
    cardBg: "bg-rose-950/30",
    border: "border-rose-500/20",
    accent: "text-rose-400",
  },
  {
    name: "Hatice",
    role: "The Bold One",
    emoji: "⚡",
    gradient: "from-amber-500 to-orange-600",
    cardBg: "bg-amber-950/30",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
  {
    name: "Mei",
    role: "The Expert",
    emoji: "🌸",
    gradient: "from-purple-500 to-violet-600",
    cardBg: "bg-purple-950/30",
    border: "border-purple-500/20",
    accent: "text-purple-400",
  },
];

interface TranslationResult {
  label: string;
  output: string;
  tag: string;
  note?: string;
}

export function Translator() {
  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [tone, setTone] = useState("casual");
  const [dialect, setDialect] = useState("general");
  const [signShopMode, setSignShopMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<TranslationResult[]>([]);
  const [characterResults, setCharacterResults] = useState<
    Record<string, string>
  >({});
  const [copied, setCopied] = useState<string | null>(null);
  const [hasTranslated, setHasTranslated] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = useCallback(async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          sourceLang,
          targetLang,
          tone,
          dialect,
          signShopMode,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Translation failed");
      setResults(data.translations || []);
      setCharacterResults(data.characterTranslations || {});
      setHasTranslated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Translation failed");
    } finally {
      setLoading(false);
    }
  }, [text, sourceLang, targetLang, tone, dialect, signShopMode]);

  const copyToClipboard = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleTargetLangChange = (v: string) => {
    setTargetLang(v);
    const dialects = DIALECTS[v] || [{ value: "general", label: "Standard" }];
    setDialect(dialects[0].value);
    setResults([]);
    setHasTranslated(false);
  };

  const swapLanguages = () => {
    const prev = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(prev);
    const dialects =
      DIALECTS[prev] || [{ value: "general", label: "Standard" }];
    setDialect(dialects[0].value);
    setResults([]);
    setHasTranslated(false);
  };

  const currentDialects =
    DIALECTS[targetLang] || [{ value: "general", label: "Standard" }];

  return (
    <div className="space-y-6">
      {/* Main Translator Card */}
      <Card className="bg-white/[0.03] border-white/10 overflow-hidden">
        <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        <CardContent className="p-6 space-y-5">
          {/* Language Row */}
          <div className="flex items-end gap-3">
            <div className="flex-1 space-y-1.5">
              <Label className="text-xs text-white/40 uppercase tracking-wider">
                From
              </Label>
              <Select
                value={sourceLang}
                onValueChange={(v) => {
                  setSourceLang(v);
                  setResults([]);
                  setHasTranslated(false);
                }}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/[0.08] transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0c0e1a] border-white/10">
                  {LANGUAGES.map((l) => (
                    <SelectItem
                      key={l.value}
                      value={l.value}
                      className="text-white focus:bg-white/10 focus:text-white"
                    >
                      {l.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              onClick={swapLanguages}
              className="mb-[1px] p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110 active:scale-95 group"
              title="Swap languages"
            >
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
            </button>

            <div className="flex-1 space-y-1.5">
              <Label className="text-xs text-white/40 uppercase tracking-wider">
                To
              </Label>
              <Select value={targetLang} onValueChange={handleTargetLangChange}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/[0.08] transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0c0e1a] border-white/10">
                  {LANGUAGES.map((l) => (
                    <SelectItem
                      key={l.value}
                      value={l.value}
                      className="text-white focus:bg-white/10 focus:text-white"
                    >
                      {l.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tone + Dialect */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs text-white/40 uppercase tracking-wider">
                Tone
              </Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/[0.08] transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0c0e1a] border-white/10">
                  {TONES.map((t) => (
                    <SelectItem
                      key={t.value}
                      value={t.value}
                      className="text-white focus:bg-white/10 focus:text-white"
                    >
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs text-white/40 uppercase tracking-wider">
                Dialect
              </Label>
              <Select value={dialect} onValueChange={setDialect}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/[0.08] transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0c0e1a] border-white/10">
                  {currentDialects.map((d) => (
                    <SelectItem
                      key={d.value}
                      value={d.value}
                      className="text-white focus:bg-white/10 focus:text-white"
                    >
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Text Input */}
          <div className="relative">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste text to translate..."
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[130px] resize-none focus:border-indigo-500/50 transition-colors pr-20"
              maxLength={500}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey))
                  handleTranslate();
              }}
            />
            <div className="absolute bottom-2.5 right-3 flex flex-col items-end gap-1">
              <span className="text-[10px] text-white/20">
                {text.length}/500
              </span>
              {text.length > 0 && (
                <span className="text-[10px] text-white/15">⌘+Enter</span>
              )}
            </div>
          </div>

          {/* Sign Shop Mode Toggle */}
          <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/15">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎬</span>
              <div>
                <p className="text-sm font-medium text-white leading-none">
                  Sign Shop Mode
                </p>
                <p className="text-xs text-white/35 mt-0.5">
                  How the crew would say it
                </p>
              </div>
            </div>
            <Switch
              checked={signShopMode}
              onCheckedChange={setSignShopMode}
              className="data-[state=checked]:bg-indigo-600"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs text-rose-400 bg-rose-950/30 border border-rose-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Translate Button */}
          <Button
            onClick={handleTranslate}
            disabled={loading || !text.trim()}
            className="w-full h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-40 font-semibold transition-all active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                Translating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Translate
              </span>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      <AnimatePresence>
        {hasTranslated && results.length > 0 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Variants header */}
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-white/25" />
              <span className="text-xs font-medium text-white/25 uppercase tracking-widest">
                Translation Variants
              </span>
            </div>

            {/* Variant Cards */}
            <div className="grid md:grid-cols-3 gap-3">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="h-full"
                >
                  <Card className="bg-white/[0.03] border-white/10 group hover:bg-white/[0.06] transition-all h-full">
                    <CardContent className="p-4 h-full flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base leading-none">
                            {result.tag}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-[10px] border-white/10 text-white/50 px-1.5"
                          >
                            {result.label}
                          </Badge>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(result.output, `r${i}`)
                          }
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-white/10"
                        >
                          {copied === `r${i}` ? (
                            <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-white/30" />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-white/80 leading-relaxed flex-1">
                        {result.output}
                      </p>

                      {result.note && (
                        <p className="text-[10px] text-white/25 italic border-t border-white/5 pt-2 mt-auto">
                          {result.note}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Sign Shop Character Cards */}
            {signShopMode &&
              Object.keys(characterResults).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="space-y-3"
                >
                  <Separator className="bg-white/5" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🎬</span>
                    <span className="text-xs font-medium text-white/25 uppercase tracking-widest">
                      Sign Shop Crew
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {CHARACTERS.map((char, i) =>
                      characterResults[char.name] ? (
                        <motion.div
                          key={char.name}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.07 }}
                        >
                          <Card
                            className={cn(
                              "border transition-all hover:brightness-110",
                              char.cardBg,
                              char.border
                            )}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2.5 mb-2.5">
                                <div
                                  className={cn(
                                    "w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-sm shrink-0 shadow-lg",
                                    char.gradient
                                  )}
                                >
                                  {char.emoji}
                                </div>
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-semibold leading-none",
                                      char.accent
                                    )}
                                  >
                                    {char.name}
                                  </p>
                                  <p className="text-[10px] text-white/30 mt-0.5">
                                    {char.role}
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm text-white/70 leading-relaxed">
                                &ldquo;{characterResults[char.name]}&rdquo;
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ) : null
                    )}
                  </div>
                </motion.div>
              )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
