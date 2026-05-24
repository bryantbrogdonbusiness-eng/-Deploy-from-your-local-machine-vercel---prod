import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use — LinguaSlang",
  description: "LinguaSlang terms of use. Read the rules and guidelines for using our slang translation service.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using <strong>LinguaSlang</strong> at{" "}
                <a href="https://linguaslang.com" className="text-violet-600 hover:underline">linguaslang.com</a>{" "}
                (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please
                discontinue use of the Site immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Description of Service</h2>
              <p>
                LinguaSlang is a free online tool that provides culturally-informed slang translations
                across multiple languages and regional dialects. The service is provided for
                educational and entertainment purposes.
              </p>
              <p className="mt-2">
                <strong>Translation Accuracy:</strong> LinguaSlang provides slang and informal
                translations for reference purposes only. We do not guarantee the accuracy,
                completeness, or suitability of any translation for any specific purpose. Always
                consult a qualified human translator for critical communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Intellectual Property</h2>
              <p>
                All content on this Site — including but not limited to text, graphics, logos, design,
                layout, code, and functionality — is the exclusive property of <strong>LinguaSlang</strong>{" "}
                and is protected by United States and international copyright laws.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>You may <strong>not</strong> copy, reproduce, distribute, republish, or create derivative works of any part of this Site without our prior written permission.</li>
                <li>You may <strong>not</strong> scrape, crawl, or use automated means to extract content from this Site.</li>
                <li>You may <strong>not</strong> mirror or replicate this Site or its content on any other domain or platform.</li>
                <li>Translation results provided to you are for your personal, non-commercial use only.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Permitted Use</h2>
              <p>You are permitted to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the translator for personal, educational, or non-commercial purposes</li>
                <li>Copy and share individual translation results for personal communication</li>
                <li>Link to LinguaSlang from your own website or social media</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Prohibited Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the Site for any unlawful purpose</li>
                <li>Use automated tools to scrape, harvest, or extract data from the Site</li>
                <li>Attempt to reverse-engineer, copy, or replicate the Site's design or functionality</li>
                <li>Use translations to produce, promote, or distribute harmful, abusive, or illegal content</li>
                <li>Interfere with the Site's operation or servers</li>
                <li>Resell or commercially exploit the Site's content without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Advertising</h2>
              <p>
                This Site displays advertisements provided by Google AdSense and potentially other
                advertising partners. We are not responsible for the content of third-party
                advertisements. Clicking on ads may take you to third-party websites governed by
                their own terms and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Disclaimer of Warranties</h2>
              <p>
                The Site is provided on an <strong>"as is" and "as available"</strong> basis without
                warranties of any kind, either express or implied. We do not warrant that the Site
                will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, LinguaSlang shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your
                use of, or inability to use, this Site or its content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites. These links are provided for
                convenience only. We have no control over the content of those sites and accept no
                responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on
                this page with an updated date. Continued use of the Site following any changes
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Contact Us</h2>
              <p>Questions about these Terms? Reach us at:</p>
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
          <Link href="/privacy" className="hover:text-violet-400 transition-colors">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  )
}
