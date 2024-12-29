import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page 2",
  alternates: {
    canonical: "https://example.tld/sub-page-2"
  }
}

export default function SubPage1() {
  return (
      <main>
        <h1>This page defines an <code>alternate</code></h1>
        <p>Much like the root page, this one defines an <code>alternate</code>, this time to set a canonical URL.</p>
        <p>The <code>application/rss+xml</code> alternate from the layout is missing.</p>
      </main>
  )
}
