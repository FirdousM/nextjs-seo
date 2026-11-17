export type Product = {
  slug: string;
  name: string;
  description: string;
  images: string[];
  sku: string;
  gtin13?: string;
  brand: string;
  price: number;
  currency: string;
  inStock: boolean;
  rating: { value: number; count: number };
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
};

const BRAND = "Trailmate";

const products: Product[] = [
  {
    slug: "trailmate-30l-backpack",
    name: "Trailmate 30L Waterproof Hiking Backpack",
    description:
      "30-litre waterproof hiking backpack with removable rain cover, padded back panel, hip belt and laptop sleeve. Weighs 1.1 kg.",
    images: ["/images/trailmate-front.jpg", "/images/trailmate-side.jpg"],
    sku: "TM-30L-GRN",
    brand: "Trailmate",
    price: 3499,
    currency: "INR",
    inStock: true,
    rating: { value: 4.6, count: 128 },
    specs: [
      { label: "Capacity", value: "30 litres" },
      { label: "Weight", value: "1.1 kg" },
      { label: "Material", value: "420D ripstop nylon" },
      { label: "Colour", value: "Forest green" },
    ],
    faqs: [
      {
        question: "Is the Trailmate 30L backpack waterproof?",
        answer: "Yes. The fabric is water-resistant ripstop nylon with taped seams, and a removable rain cover is included for heavy rain.",
      },
      {
        question: "Does it fit a 15-inch laptop?",
        answer: "Yes. The padded back-panel sleeve fits laptops up to 15.6 inches.",
      },
    ],
  },
    {
    slug: "trailmate-ridge-20l-daypack",
    name: "Trailmate Ridge 20L Daypack",
    description:
      "Lightweight 20-litre daypack for short hikes and city commutes, with a mesh back panel and two side bottle pockets. Weighs 0.7 kg.",
    images: ["/images/ridge-20l-front.jpg", "/images/ridge-20l-side.jpg"],
    sku: "TM-20L-BLU", brand: BRAND, price: 1999, currency: "INR", inStock: true,
    rating: { value: 4.4, count: 86 },
    specs: [
      { label: "Capacity", value: "20 litres" },
      { label: "Weight", value: "0.7 kg" },
      { label: "Material", value: "210D polyester" },
      { label: "Colour", value: "Ocean blue" },
    ],
    faqs: [
      { question: "Is the Ridge 20L good for daily commuting?", answer: "Yes. It has a padded laptop sleeve for up to 14-inch laptops and a slim profile." },
      { question: "Can it hold a water bottle?", answer: "Yes. Two stretch side pockets hold bottles up to 1 litre." },
    ],
  },
  {
    slug: "trailmate-summit-40l-trekking-pack",
    name: "Trailmate Summit 40L Trekking Pack",
    description:
      "40-litre trekking pack for multi-day trips, with an adjustable torso, padded hip belt, sleeping bag compartment and rain cover. Weighs 1.6 kg.",
    images: ["/images/summit-40l-front.jpg", "/images/summit-40l-side.jpg"],
    sku: "TM-40L-ORG", brand: BRAND, price: 5499, currency: "INR", inStock: true,
    rating: { value: 4.7, count: 64 },
    specs: [
      { label: "Capacity", value: "40 litres" },
      { label: "Weight", value: "1.6 kg" },
      { label: "Material", value: "600D ripstop nylon" },
      { label: "Colour", value: "Sunset orange" },
    ],
    faqs: [
      { question: "How many days of trekking is 40 litres enough for?", answer: "It suits 2 to 4 day treks when packed light, including a sleeping bag in the bottom compartment." },
      { question: "Does the Summit 40L include a rain cover?", answer: "Yes. A rain cover is stored in a dedicated bottom pocket." },
    ],
  },
  {
    slug: "trailmate-urban-25l-travel-backpack",
    name: "Trailmate Urban 25L Travel Backpack",
    description:
      "25-litre travel backpack with a clamshell opening, hidden anti-theft pocket and trolley sleeve. Carry-on friendly. Weighs 0.9 kg.",
    images: ["/images/urban-25l-front.jpg", "/images/urban-25l-side.jpg"],
    sku: "TM-25L-CHR", brand: BRAND, price: 2799, currency: "INR", inStock: false,
    rating: { value: 4.5, count: 97 },
    specs: [
      { label: "Capacity", value: "25 litres" },
      { label: "Weight", value: "0.9 kg" },
      { label: "Material", value: "300D recycled polyester" },
      { label: "Colour", value: "Charcoal" },
    ],
    faqs: [
      { question: "Is the Urban 25L allowed as cabin luggage?", answer: "Yes. At 25 litres it fits under the seat on most airlines in India." },
      { question: "Does it have an anti-theft pocket?", answer: "Yes. A hidden back-panel pocket holds a passport and phone." },
    ],
  },
];

export async function getProduct(slug: string): Promise<Product | null> {
  return products.find((product) => product.slug === slug) ?? null;
}

export async function getAllProducts(): Promise<Product[]> {
  return products;
}
