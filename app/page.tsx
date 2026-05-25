import { Globe } from "lucide-react";
import { Translator } from "@/components/translator";
import { SignShopBanner } from "@/components/sign-shop-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-[15px] font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent leading-none">
                LinguaSlang
              </h1>
              <p className="text-[10px] text-white/25 leading-none mt-[3px]">
                Real language · Real tone
              </p>
            </div>
          </div>
          <span className="hidden sm:block text-[11px] text-white/20">
            Translate tone, dialect & slang — not just words
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Hero */}
        <div className="text-center space-y-2 pb-1">
          <h2 className="text-[1.75rem] sm:text-3xl font-bold tracking-tight bg-gradient-to-br from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            Translate How People Actually Talk
          </h2>
          <p className="text-white/35 text-sm">
            Regional dialect · Slang & tone · Cultural context
          </p>
        </div>

        {/* Translator Component */}
        <Translator />

        {/* Sign Shop Banner */}
        <SignShopBanner />

        {/* Footer */}
        <p className="text-center text-[10px] text-white/12 pb-4">
          LinguaSlang · Multilingual translation with tone & dialect awareness
        </p>
      </main>
    </div>
  );
}
