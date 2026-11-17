import { SITE_URL, SITE_NAME } from "../site";

export const ORG_ID = `${SITE_URL}/#org`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
  };
}
