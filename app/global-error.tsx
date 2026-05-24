"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: "16px", fontFamily: "sans-serif", margin: 0 }}>
        <div style={{ fontSize: "4rem" }}>⚡</div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1f2937" }}>Something went wrong</h2>
        <button
          onClick={() => reset()}
          style={{ background: "#7c3aed", color: "#fff", padding: "10px 20px", borderRadius: "12px", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
