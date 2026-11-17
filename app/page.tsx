import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "YourStore | Hiking & Travel Backpacks" },
  alternates: { canonical: "/" },
};

export default async function Home() {
  const products = await getAllProducts();
  return (
    <main>
      <section className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Backpacks built for the trail and the commute
          </h1>
          <p className="mt-4 max-w-xl text-lg text-emerald-100">
            Waterproof, lightweight and tested in Indian monsoons. Free shipping and 30-day returns.
          </p>
          <Link
            href="/backpacks"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-900 hover:bg-emerald-50"
          >
            Shop all backpacks
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold">Featured backpacks</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
