"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
export default function Home() {
  const session = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>

      {session.status === "authenticated" && (
        <div onClick={() => signOut()}>Logout</div>
      )}

      {session.status !== "authenticated" && <Link href="/login">login</Link>}
    </main>
  );
}
