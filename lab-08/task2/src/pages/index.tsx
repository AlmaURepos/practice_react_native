import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Lab 8.2: SSR User Dashboard
        </h1>
        <p className="text-xl text-slate-700 mb-8">
          Demonstration of Server-Side Rendering vs Static Site Generation
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              SSR Pages (Fresh on every request)
            </h2>
            <div className="flex gap-4 justify-center mb-6">
              <Link
                href="/dashboard"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Dashboard (SSR)
              </Link>
              <Link
                href="/about-ssr"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                About (SSR)
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              SSG Pages (Pre-rendered at build time)
            </h2>
            <Link
              href="/about"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              About (SSG)
            </Link>
          </div>
        </div>

        <div className="mt-12 text-slate-600 max-w-2xl">
          <h3 className="text-lg font-semibold mb-2">What's the difference?</h3>
          <ul className="text-left space-y-2">
            <li>
              <strong>SSR (Server-Side Rendering):</strong> Page is rendered on
              the server for each request - always fresh data
            </li>
            <li>
              <strong>SSG (Static Site Generation):</strong> Page is rendered
              once at build time and served as static HTML - fastest but stale
              data
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
