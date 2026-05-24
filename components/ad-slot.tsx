"use client"

import { useEffect } from "react"

interface AdSlotProps {
  slotId: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  className?: string
  label?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function AdSlot({
  slotId,
  format = "auto",
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }
    } catch (e) {
      // AdSense not loaded yet — normal during dev
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      {/* Label — required by AdSense policy */}
      <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mb-1">
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9445214382103388"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// ─── Development placeholder (shows when AdSense isn't loaded) ──────────────
export function AdPlaceholder({
  label = "Ad Slot",
  height = "h-24",
  className = "",
}: {
  label?: string
  height?: string
  className?: string
}) {
  return (
    <div
      className={`${height} ${className} flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-violet-200 bg-violet-50/50`}
    >
      <p className="text-[10px] text-violet-300 uppercase tracking-widest font-medium">
        {label}
      </p>
      <p className="text-xs text-violet-300 mt-0.5">Google AdSense Slot</p>
    </div>
  )
}
