import { GetStaticProps } from "next";
import Link from "next/link";

interface AboutProps {
  buildTime: string;
}

export default function About({ buildTime }: AboutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <nav className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900">
            About SSG
          </Link>
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        <article className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            About This Page (Static Site Generation)
          </h1>

          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded">
            <strong>✅ SSG Page:</strong> This page was pre-rendered at build
            time.
            <p className="text-sm text-slate-600 mt-2">
              Build time: <code className="bg-slate-100 px-2 py-1">{buildTime}</code>
            </p>
            <p className="text-sm text-slate-600 mt-2">
              This content will not change until the next build, making it the
              fastest option for static content.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              What is Static Site Generation (SSG)?
            </h2>
            <p className="text-slate-700 mb-4">
              Static Site Generation (SSG) is a rendering strategy where pages
              are pre-rendered at build time and served as static HTML files.
              This is the fastest way to serve content because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Content is already generated before users request it</li>
              <li>No server processing needed on each request</li>
              <li>Can be served from a CDN globally</li>
              <li>Extremely fast load times (TTFB)</li>
              <li>Lower server costs</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              When to Use SSG?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Blog posts and articles</li>
              <li>Documentation pages</li>
              <li>Product pages (for e-commerce)</li>
              <li>Marketing pages</li>
              <li>Any content that doesn't change frequently</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Advantages of SSG
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900">Performance</h3>
                <p className="text-slate-600">
                  Fastest possible page load times since content is pre-rendered
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900">Security</h3>
                <p className="text-slate-600">
                  No server code runs for each request, reducing attack surface
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900">Cost</h3>
                <p className="text-slate-600">
                  Can serve static files from CDN with minimal server resources
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900">Scalability</h3>
                <p className="text-slate-600">
                  Easily handle traffic spikes with static content serving
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Limitations of SSG
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Content is static until next build</li>
              <li>Long build times for large sites</li>
              <li>Cannot show real-time or user-specific data</li>
              <li>Not suitable for frequently changing content</li>
              <li>Requires rebuild to update any content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Compare with Other Rendering Strategies
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left">
                      Strategy
                    </th>
                    <th className="border border-slate-300 px-4 py-2 text-left">
                      When Renders
                    </th>
                    <th className="border border-slate-300 px-4 py-2 text-left">
                      Data Freshness
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 bg-green-50 font-semibold">
                      SSG (This Page)
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      Build time
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      Static
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">
                      SSR (Compare)
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      Every request
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      Always fresh
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">ISR</td>
                    <td className="border border-slate-300 px-4 py-2">
                      Build + periodically
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      Fresh after interval
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-slate-700">
              <strong>Want to compare?</strong> Visit the{" "}
              <Link href="/about-ssr" className="text-blue-600 hover:underline">
                SSR version of this page
              </Link>{" "}
              to see the difference! It will show a different render time each
              time you reload.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      buildTime: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      }),
    },
    revalidate: 3600, // Regenerate every hour
  };
};
