import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { getAllProducts } from "@/lib/products";
import { itemListSchema } from "@/lib/jsonld/itemList";
import { breadcrumbSchema } from "@/lib/jsonld/breadcrumb";

export const metadata: Metadata = {
    title: "Hiking & Travel Backpacks",
    description: "Shop waterproof hiking backpacks, daypacks and travel bags from 20L to 40L. Free shipping across India.",
    alternates: { canonical: "/backpacks" },
};

export default async function Backpacks() {
    const products = await getAllProducts();

    return (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <JsonLd data={itemListSchema(products)} />
            <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Backpacks" }])} />
            <nav aria-label="Breadcrumb" className="text-sm text-stone-500">Home / Backpacks</nav>
            <h1 className="mt-4 text-3xl font-bold">Hiking & Travel Backpacks</h1>
            <p className="mt-2 text-stone-600">{products.length} products</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                ))}
            </div>
        </main>
    );
}
