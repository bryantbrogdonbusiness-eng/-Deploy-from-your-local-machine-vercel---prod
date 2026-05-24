import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-8">
      <div className="text-6xl">🌍</div>
      <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
      <p className="text-gray-500">Looks like this page got lost in translation.</p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 bg-violet-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-violet-700 transition-colors"
      >
        ← Back to LinguaSlang
      </Link>
    </div>
  )
}
