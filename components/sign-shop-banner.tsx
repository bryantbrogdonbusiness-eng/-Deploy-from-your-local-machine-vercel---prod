import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CREW = [
  { name: "Bryant", emoji: "😎", color: "from-blue-500 to-indigo-600" },
  { name: "Raj", emoji: "📐", color: "from-emerald-500 to-teal-600" },
  { name: "Maria", emoji: "🎨", color: "from-rose-500 to-pink-600" },
  { name: "Hatice", emoji: "⚡", color: "from-amber-500 to-orange-600" },
  { name: "Mei", emoji: "🌸", color: "from-purple-500 to-violet-600" },
];

export function SignShopBanner() {
  return (
    <Card className="bg-gradient-to-r from-slate-900 to-indigo-950/70 border-indigo-500/15 overflow-hidden relative">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 50%, #6366f1 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, #8b5cf6 0%, transparent 55%)",
        }}
      />
      <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
        <div className="flex-1 space-y-2.5 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg leading-none">🏪</span>
            <span className="font-bold text-white text-sm">
              Sign Shop — The Series
            </span>
            <Badge className="bg-rose-600/20 text-rose-300 border-rose-500/20 text-[10px]">
              New Episodes
            </Badge>
          </div>

          {/* Crew avatars */}
          <div className="flex items-center gap-1.5">
            {CREW.map((member) => (
              <div
                key={member.name}
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-xs border-2 border-black/40 shrink-0`}
                title={member.name}
              >
                {member.emoji}
              </div>
            ))}
            <span className="text-[11px] text-white/30 ml-1.5">
              5 coworkers · 5 languages · 1 chaotic sign shop
            </span>
          </div>

          <p className="text-xs text-white/30 max-w-sm leading-relaxed">
            Follow Bryant, Raj, Maria, Hatice & Mei as every order turns into a
            hilarious multilingual disaster.
          </p>
        </div>

        <Button
          size="sm"
          variant="outline"
          className="border-indigo-400/25 text-indigo-300 hover:bg-indigo-950/60 hover:text-indigo-200 shrink-0"
        >
          Watch Now
          <ExternalLink className="w-3 h-3 ml-1.5" />
        </Button>
      </CardContent>
    </Card>
  );
}
