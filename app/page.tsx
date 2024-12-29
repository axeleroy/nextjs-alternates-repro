import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root",
  alternates: {
    languages: {
      'en-US': 'https://nextjs.org/en-US',
      'de-DE': 'https://nextjs.org/de-DE',
    },
  }
}

export default function Home() {
  return (
      <main>
        <h1>This is the root page</h1>
        <p>This page’s <code>metadata</code> contains an <code>alternate</code> object defining alternative pages based
          on language.</p>
        <p>The <code>application/rss+xml</code> alternate from the layout is missing.</p>
      </main>
  );
}
