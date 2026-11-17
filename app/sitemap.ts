import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/backpacks`, lastModified: new Date() },
    ...products.map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "en-IN": `${SITE_URL}/products/${product.slug}`,
          "en-US": `${SITE_URL}/us/products/${product.slug}`,
        },
      },
    })),
  ];
}
