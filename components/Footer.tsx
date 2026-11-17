import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-stone-500 sm:px-6">
        © 2026 {SITE_NAME}. Free shipping across India. 30-day returns.
      </div>
    </footer>
  );
}
