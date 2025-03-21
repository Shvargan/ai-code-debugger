"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to My App</h1>
      <Link href="/debugger">Go to AI Code Debugger</Link>
    </main>
  );
}
