import { createContext, useContext, type ReactNode } from "react";
import { siteContent } from "./siteContent";
import type { SiteContent } from "../types";

const SiteContentContext = createContext<SiteContent | null>(null);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  return <SiteContentContext.Provider value={siteContent}>{children}</SiteContentContext.Provider>;
}

export const useSiteContent = () => {
  const value = useContext(SiteContentContext);

  if (!value) {
    throw new Error("useSiteContent must be used within a SiteContentProvider.");
  }

  return value;
};
