import { GetServerSideProps } from "next";
import Link from "next/link";

interface AboutSSRProps {
  renderTime: string;
}

export default function AboutSSR({ renderTime }: AboutSSRProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <nav className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900">
            About SSR
          </Link>
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        <article className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            About This Page (Server-Side Rendering)
          </h1>

          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded">
            <strong>⚡ SSR Page:</strong> This page is rendered on every request.
            <p className="text-sm text-slate-600 mt-2">
              Current render time:{" "}
              <code className="bg-slate-100 px-2 py-1">{renderTime}</code>
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Refresh the page to see the time update! Each request generates new
              content on the server.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              What is Server-Side Rendering (SSR)?
            </h2>
            <p className="text-slate-700 mb-4">
              Server-Side Rendering (SSR) is a rendering strategy where pages
              are rendered on the server for each user request and sent as HTML
              to the client.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Page is rendered fresh on every request</li>
              <li>Latest data is always displayed</li>
              <li>Server needs to process every request</li>
              <li>Better SEO compared to client-side rendering</li>
              <li>Allows access to server-only resources</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              When to Use SSR?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Pages with personalized/user-specific content</li>
              <li>Real-time data (stock prices, scores, etc.)</li>
              <li>Authenticated content and dashboards</li>
              <li>A/B testing and dynamic content</li>
              <li>Frequently changing data</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Advantages of SSR
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">Fresh Data</h3>
                <p className="text-slate-600">
                  Always displays the latest data since it's rendered per request
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">Personalization</h3>
                <p className="text-slate-600">
                  Can show user-specific content based on session/cookies
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">SEO Friendly</h3>
                <p className="text-slate-600">
                  Search engines receive full HTML content for every request
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-900">Real-time Data</h3>
                <p className="text-slate-600">
                  Perfect for applications needing live updates and dynamic content
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Limitations of SSR
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Slower Time to First Byte (TTFB)</li>
              <li>Higher server load and resource usage</li>
              <li>Cannot cache as effectively as SSG</li>
              <li>Requires server infrastructure</li>
              <li>Scales less efficiently under high traffic</li>
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
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">SSG</td>
                    <td className="border border-slate-300 px-4 py-2">
                      Build time
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      ⚡⚡⚡ Fastest
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 bg-blue-50 font-semibold">
                      SSR (This Page)
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      Every request
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      ⚡ Slower
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">ISR</td>
                    <td className="border border-slate-300 px-4 py-2">
                      Build + interval
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      ⚡⚡ Fast
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-8 p-4 bg-green-50 rounded border border-green-200">
            <p className="text-slate-700">
              <strong>Want to compare?</strong> Visit the{" "}
              <Link href="/about" className="text-green-600 hover:underline">
                SSG version of this page
              </Link>{" "}
              to see the difference! The render time will NOT change when you
              reload because it's static.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<AboutSSRProps> = async ({
  req,
  res,
}) => {
  // Disable caching for SSR pages
  res.setHeader(
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate"
  );

  return {
    props: {
      renderTime: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      }),
    },
  };
};
