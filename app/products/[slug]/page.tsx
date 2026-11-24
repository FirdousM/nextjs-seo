import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getAllProducts, getProduct } from "@/lib/products";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/jsonld/breadcrumb";
import { faqSchema } from "@/lib/jsonld/faq";
import { productSchema } from "@/lib/jsonld/product";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  const url = `/products/${product.slug}`;
  return {
    title: `${product.name} | ${SITE_NAME}`,
    description: product.description.slice(0, 150),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: { "en-IN": url, "en-US": `/us${url}`, "x-default": url },
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: { type: "website", title: product.name, description: product.description, url, images: product.images },
    twitter: { card: "summary_large_image" },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-stone-900 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Backpacks", path: "/backpacks" },
          { name: product.name },
        ])}
      />
      <JsonLd data={productSchema(product)} />
      <JsonLd data={faqSchema(product.faqs)} />


      <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/backpacks" className="hover:underline">Backpacks</Link></li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-stone-800">{product.name}</li>
        </ol>
      </nav>

      <article className="mt-6 grid gap-10 md:grid-cols-2">

        <div className="space-y-3">
          <div className="overflow-hidden rounded-2xl bg-stone-100">
            <Image
              src={product.images[0]}
              alt={`${product.name}, front view`}
              width={1200}
              height={1200}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {product.images.map((imageSource, index) => (
              <div
                key={imageSource}
                className="overflow-hidden rounded-xl bg-stone-100"
              >
                <Image
                  src={imageSource}
                  alt={`${product.name}, view ${index + 1}`}
                  width={600}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>


        <div>
          <p className="text-sm font-medium text-emerald-800">{product.brand}</p>
          <h1 className="mt-1 text-3xl font-bold leading-tight sm:text-4xl">{product.name}</h1>

          <p className="mt-3 text-sm text-stone-600">
            <span className="font-semibold text-stone-900">{product.rating.value} / 5</span>{" "}
            from {product.rating.count} reviews
          </p>

          <p className="mt-5 text-3xl font-bold">
            ₹{product.price.toLocaleString("en-IN")}
            <span className="ml-2 text-sm font-normal text-stone-500">incl. taxes</span>
          </p>

          <p
            className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${product.inStock ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900"
              }`}
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </p>

          <ul className="mt-5 space-y-1 text-stone-700">
            <li>Free shipping across India, delivered in 2–5 days</li>
            <li>30-day free returns</li>
          </ul>

          <button
            type="button"
            disabled={!product.inStock}
            className="mt-6 w-full rounded-lg bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:bg-stone-400 sm:w-auto"
          >
            Add to cart
          </button>

          <p className="mt-6 leading-relaxed text-stone-700">{product.description}</p>
        </div>
      </article>


      <section className="mt-12">
        <h2 className="text-2xl font-bold">Key specifications</h2>
        <dl className="mt-4 divide-y divide-stone-200 rounded-xl border border-stone-200">
          {product.specs.map((specification) => (
            <div
              key={specification.label}
              className="grid grid-cols-3 gap-4 px-4 py-3"
            >
              <dt className="font-medium text-stone-600">
                {specification.label}
              </dt>
              <dd className="col-span-2">{specification.value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-3 gap-4 px-4 py-3">
            <dt className="font-medium text-stone-600">SKU</dt>
            <dd className="col-span-2">{product.sku}</dd>
          </div>
        </dl>
      </section>


      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {product.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-stone-200 p-4" open>
              <summary className="cursor-pointer font-semibold">{faq.question}</summary>
              <p className="mt-2 text-stone-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
