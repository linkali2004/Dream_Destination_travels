import { useEffect } from "react";
import { SITE_BRAND_LOGO, SITE_BRAND_NAME } from "./branding";

type UsePageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const ensureLinkTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const ensureJsonLdScript = (id: string, data: Record<string, unknown> | Record<string, unknown>[]) => {
  let element = document.head.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.setAttribute("data-seo-id", id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

const removeJsonLdScript = (id: string) => {
  const element = document.head.querySelector(`script[data-seo-id="${id}"]`);
  element?.remove();
};

export const usePageSeo = ({ title, description, path = "/", image = SITE_BRAND_LOGO, noIndex = false, structuredData }: UsePageSeoOptions) => {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = new URL(path, origin).toString();
    const imageUrl = image.startsWith("http") ? image : new URL(image, origin).toString();
    const fullTitle = `${title} | ${SITE_BRAND_NAME}`;

    document.title = fullTitle;

    ensureMetaTag('meta[name="description"]', { name: "description", content: description });
    ensureMetaTag('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });
    ensureMetaTag('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    ensureMetaTag('meta[property="og:description"]', { property: "og:description", content: description });
    ensureMetaTag('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    ensureMetaTag('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    ensureMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    ensureMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    ensureMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    ensureLinkTag('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    if (structuredData) {
      ensureJsonLdScript("page-structured-data", structuredData);
    } else {
      removeJsonLdScript("page-structured-data");
    }
  }, [description, image, noIndex, path, structuredData, title]);
};
