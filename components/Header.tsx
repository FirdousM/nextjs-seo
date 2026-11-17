import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-bold text-emerald-800">{SITE_NAME}</Link>
        <nav aria-label="Main" className="flex gap-6 text-sm font-medium text-stone-700">
          <Link href="/" className="hover:text-emerald-800">Home</Link>
          <Link href="/backpacks" className="hover:text-emerald-800">Backpacks</Link>
        </nav>
      </div>
    </header>
  );
}
