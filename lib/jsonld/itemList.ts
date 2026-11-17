import { SITE_URL } from "../site";
import type { Product } from "../products";


export function itemListSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",

    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/products/${product.slug}`,
      name: product.name,
    })),
  };
}
