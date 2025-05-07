"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/"); // or the login page: router.push("/login");
    }, 3000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-lg w-full">
        <div className="mb-6">
          <span className="text-6xl text-[--color-primary]">🚪</span>
        </div>
        <h2 className="text-2xl font-bold text-[--color-primary] mb-4">You have been logged out</h2>
        <p className="text-sm text-[--color-muted]">If you are not redirected automatically, <Link href="/" className="text-[--color-accent]">click here</Link>.</p>
        {/* <p className="text-sm text-[--color-muted]">If you are not redirected automatically, <a href="/" className="text-[--color-accent]">click here</a>.</p> */}
      </div>
    </div>
  );
}
