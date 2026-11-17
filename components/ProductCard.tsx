import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-lg"
    >
      <div className="overflow-hidden bg-stone-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={600}
          height={600}
          className="h-auto w-full transition group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-snug text-stone-900">{product.name}</h3>
        <p className="mt-1 text-sm text-stone-500">{product.rating.value} / 5 ({product.rating.count})</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">₹{product.price.toLocaleString("en-IN")}</span>
          <span className={`text-xs font-medium ${product.inStock ? "text-emerald-700" : "text-red-700"}`}>
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
      </div>
    </Link>
  );
}
