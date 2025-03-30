// EchelonMind Website - React + Next.js Full Build

import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-[#0A2342] min-h-screen">
      <Head>
        <title>EchelonMind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">EchelonMind</h1>
        <nav className="space-x-4">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/research" className="hover:underline">Research</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">AI Research & Consulting</h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          We build cutting-edge AI solutions, from custom model development to strategic consulting and research partnerships.
        </p>
        <div className="space-x-4 mb-8">
          <Link href="/demo/chatbot" className="bg-red-600 text-white px-6 py-2 rounded-full">Chatbot Demo</Link>
          <Link href="/demo/tools" className="border border-red-600 text-red-600 px-6 py-2 rounded-full">AI Tools</Link>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="max-w-2xl mx-auto text-left list-disc pl-5">
            <li><strong>AI Strategy & Roadmapping</strong> – Maturity assessments, tech advisory, implementation planning</li>
            <li><strong>Custom AI Model Development</strong> – NLP, CV, generative AI, full ML lifecycle</li>
            <li><strong>Data Engineering & Analytics</strong> – Pipelines, ETL, real-time dashboards</li>
            <li><strong>AI Infrastructure & MLOps</strong> – Cloud deployment, model monitoring, CI/CD for ML</li>
            <li><strong>AI Innovation Labs</strong> – R&D collaborations, whitepapers, prototype builds</li>
          </ul>
        </div>
      </main>

      <footer className="p-4 text-center border-t border-gray-200 text-sm">
        Contact us: <a href="mailto:shreepal.gopalan@outlook.com" className="underline">shreepal.gopalan@outlook.com</a><br/>
        © {new Date().getFullYear()} EchelonMind. All rights reserved.
      </footer>
    </div>
  );
}
