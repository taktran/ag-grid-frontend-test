/**
 * Site base URL
 *
 * Not defined for most environments
 *
 * NOTE: Includes trailing slash (`/`)
 */
export const SITE_BASE_URL =
  // Use node env value during Astro build
  globalThis.process?.env?.PUBLIC_BASE_URL?.replace(/\/?$/, "/") ||
  // `.env.*` override (for client side)
  import.meta.env?.PUBLIC_BASE_URL?.replace(/\/?$/, "/") ||
  // Use Astro base url for e2e tests
  import.meta.env?.BASE_URL;

/**
 * Number of URL segments in `SITE_BASE_URL`
 */
export const SITE_BASE_URL_SEGMENTS =
  SITE_BASE_URL?.split("/").filter(Boolean).length || 0;

export const PRIVACY_POLICY_URL = "https://www.ag-grid.com/privacy";
