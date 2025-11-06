/**
 * Utility function to get the correct asset path for both local development and production
 * Uses process.env.PUBLIC_URL which Create React App handles automatically
 * Production-friendly: Works correctly on GitHub Pages with subpath
 */
export const getAssetPath = (path: string): string => {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Get PUBLIC_URL from environment (set by Create React App based on homepage field)
  // In production: "/saqib-s_portfolio"
  // In development: "/saqib-s_portfolio" (from package.json scripts)
  const publicUrl = process.env.PUBLIC_URL || '';
  
  // Remove trailing slash from publicUrl if present
  const basePath = publicUrl.replace(/\/$/, '');
  
  // Combine base path with clean path
  // This works for both development and production
  if (basePath) {
    return `${basePath}${cleanPath}`;
  }
  
  // Fallback: return clean path (for root deployment)
  return cleanPath;
};

