import { SITE_URL } from "../site";


export function breadcrumbSchema(
  breadcrumbItems: { name: string; path?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: breadcrumbItems.map((breadcrumbItem, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumbItem.name,

      ...(breadcrumbItem.path !== undefined && {
        item: `${SITE_URL}${breadcrumbItem.path === "/" ? "" : breadcrumbItem.path
          }`,
      }),
    })),
  };
}
