import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — LinguaSlang",
  description: "LinguaSlang privacy policy. Learn how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  const lastUpdated = "May 22, 2025"

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b border-violet-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌍</span>
            <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              LinguaSlang
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-violet-600 hover:text-violet-800 font-medium transition-colors"
          >
            ← Back to Translator
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p>
                Welcome to <strong>LinguaSlang</strong> ("we," "our," or "us"). We are committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, and
                safeguard information when you visit <strong>linguaslang.com</strong> (the "Site").
              </p>
              <p className="mt-2">
                By using the Site, you agree to the collection and use of information in accordance
                with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
              <p>We do <strong>not</strong> require you to create an account or provide personal information to use LinguaSlang. However, the following may be collected automatically:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent, browser type, device type, and referring URLs — collected via third-party analytics tools.</li>
                <li><strong>Translation Input:</strong> Phrases you enter into the translator are processed locally in your browser and are not stored on our servers.</li>
                <li><strong>Cookies:</strong> Small files placed on your device by us or third-party services (see Section 4).</li>
                <li><strong>IP Address:</strong> Automatically collected by our hosting provider for security and performance purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To operate and improve the Site</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To display relevant advertisements via Google AdSense</li>
                <li>To detect and prevent fraudulent or abusive activity</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Cookies & Advertising</h2>
              <p>
                LinguaSlang uses <strong>Google AdSense</strong> to display advertisements. Google
                and its partners use cookies to serve ads based on your prior visits to this and
                other websites.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</li>
                <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
                <li>You can also opt out via the <a href="https://optout.networkadvertising.org/" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.</li>
              </ul>
              <p className="mt-3">
                For more information on how Google uses data, visit:{" "}
                <a href="https://policies.google.com/technologies/partner-sites" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  How Google uses data when you use our partners' sites or apps
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Third-Party Services</h2>
              <p>We may use the following third-party services, each with their own privacy policies:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Google AdSense</strong> — advertising (<a href="https://policies.google.com/privacy" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)</li>
                <li><strong>Google Analytics</strong> — site analytics (if enabled)</li>
                <li><strong>Hostinger</strong> — web hosting and server infrastructure</li>
              </ul>
              <p className="mt-3">
                We are not responsible for the privacy practices of these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Children's Privacy</h2>
              <p>
                LinguaSlang is not directed to children under the age of 13. We do not knowingly
                collect personal information from children. If you believe a child has provided us
                with personal information, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Data Security</h2>
              <p>
                We take reasonable technical measures to protect your information. However, no
                method of transmission over the Internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of targeted advertising</li>
                <li>Lodge a complaint with your local data protection authority</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:admin@linguaslang.com" className="text-violet-600 hover:underline">admin@linguaslang.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated "Last updated" date. Continued use of the Site after any
                changes constitutes your acceptance of the new policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="mt-3 p-4 bg-violet-50 rounded-xl">
                <p><strong>LinguaSlang</strong></p>
                <p>Email: <a href="mailto:admin@linguaslang.com" className="text-violet-600 hover:underline">admin@linguaslang.com</a></p>
                <p>Website: <a href="https://linguaslang.com" className="text-violet-600 hover:underline">linguaslang.com</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-xs">
        <p>© {new Date().getFullYear()} LinguaSlang. All rights reserved.</p>
        <p className="mt-1">
          <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
          {" · "}
          <Link href="/terms" className="hover:text-violet-400 transition-colors">Terms of Use</Link>
        </p>
      </footer>
    </div>
  )
}
