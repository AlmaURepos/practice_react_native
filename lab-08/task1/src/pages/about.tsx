import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>

      <article className={styles.article}>
        <h1>About This Blog</h1>

        <section>
          <h2>Welcome!</h2>
          <p>
            This is a Next.js blog built with Static Site Generation (SSG) and
            Incremental Static Regeneration (ISR). It demonstrates modern web
            development practices using React, TypeScript, and Next.js.
          </p>
        </section>

        <section>
          <h2>What is Server-Side Rendering?</h2>
          <p>
            Server-Side Rendering (SSR) is a technique where the HTML page is
            generated on the server for each request. This provides several
            benefits:
          </p>
          <ul>
            <li>Better Search Engine Optimization (SEO)</li>
            <li>Faster initial page load for users with slow connections</li>
            <li>Always fresh, dynamic content</li>
            <li>Ability to access server-only resources</li>
          </ul>
        </section>

        <section>
          <h2>Static Site Generation (SSG)</h2>
          <p>
            This blog uses SSG, which pre-renders pages at build time. The
            benefits include:
          </p>
          <ul>
            <li>Extremely fast page loads (served as static HTML)</li>
            <li>Better performance and lower server costs</li>
            <li>Great for content that doesn't change frequently</li>
            <li>Improved user experience with cached pages</li>
          </ul>
        </section>

        <section>
          <h2>Incremental Static Regeneration (ISR)</h2>
          <p>
            This blog implements ISR by setting <code>revalidate: 60</code> in
            getStaticProps. This means:
          </p>
          <ul>
            <li>Pages are initially generated at build time</li>
            <li>Pages are regenerated in the background every 60 seconds</li>
            <li>New content appears without rebuilding the entire site</li>
            <li>Best of both worlds: speed and freshness</li>
          </ul>
        </section>

        <section>
          <h2>Technology Stack</h2>
          <ul>
            <li>
              <strong>Next.js</strong> - React framework with SSR/SSG support
            </li>
            <li>
              <strong>TypeScript</strong> - Type-safe JavaScript
            </li>
            <li>
              <strong>Tailwind CSS</strong> - Utility-first CSS framework
            </li>
            <li>
              <strong>React</strong> - UI library
            </li>
          </ul>
        </section>

        <section>
          <h2>Learn More</h2>
          <p>
            To learn more about Next.js and server-side rendering, check out:
          </p>
          <ul>
            <li>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Documentation
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Learn Course
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // ISR: regenerate every hour
  };
};
