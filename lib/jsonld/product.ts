import { SITE_URL } from "../site";
import { ORG_ID } from "./organization";
import type { Product } from "../products";


export function productSchema(product: Product) {
  const productUrl = `${SITE_URL}/products/${product.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: product.images.map((image) => `${SITE_URL}${image}`),
    sku: product.sku,

    ...(product.gtin13 && { gtin13: product.gtin13 }),

    brand: {
      "@type": "Brand",
      name: product.brand,
    },

    additionalProperty: product.specs.map((specification) => ({
      "@type": "PropertyValue",
      name: specification.label,
      value: specification.value,
    })),

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(product.rating.value),
      reviewCount: String(product.rating.count),
    },

    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: product.price.toFixed(2),
      itemCondition: "https://schema.org/NewCondition",

      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",

      seller: { "@id": ORG_ID },

      shippingDetails: {
        "@type": "OfferShippingDetails",

        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: product.currency,
        },

        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },

        deliveryTime: {
          "@type": "ShippingDeliveryTime",

          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },

          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },

      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };
}

