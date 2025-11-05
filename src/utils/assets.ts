/**
 * Utility function to get the correct asset path for both local development and production
 * Uses process.env.PUBLIC_URL which Create React App handles automatically
 */
export const getAssetPath = (path: string): string => {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Runtime check: if we're on localhost, always use root paths
  // This handles cases where PUBLIC_URL might be set incorrectly
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
      return cleanPath;
    }
  }
  
  // process.env.PUBLIC_URL is automatically set by Create React App:
  // - Empty string in development (usually)
  // - The homepage path in production (e.g., "/saqib-s_portfolio")
  const publicUrl = process.env.PUBLIC_URL || '';
  
  // Remove trailing slash from publicUrl if present
  const basePath = publicUrl.replace(/\/$/, '');
  
  // Return the combined path
  return `${basePath}${cleanPath}`;
};

