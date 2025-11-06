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
  
  // Runtime check for production deployment
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Production check: GitHub Pages or custom domain
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      // Extract base path from pathname if it exists (e.g., "/saqib-s_portfolio" from URL)
      const pathParts = pathname.split('/').filter(Boolean);
      const urlBasePath = pathParts.length > 0 ? pathParts[0] : '';
      
      // If URL has base path and it matches our expected base path, use it
      if (urlBasePath && urlBasePath === 'saqib-s_portfolio') {
        return `/${urlBasePath}${cleanPath}`;
      }
      
      // If basePath is set from env, use it
      if (basePath) {
        return `${basePath}${cleanPath}`;
      }
      
      // Fallback: use clean path (for custom domains without subpath)
      return cleanPath;
    }
    
    // Development: Check if we're on localhost with subpath
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      const pathParts = pathname.split('/').filter(Boolean);
      const urlBasePath = pathParts.length > 0 ? pathParts[0] : '';
      
      // If there's a base path in the URL, use it
      if (urlBasePath && urlBasePath !== 'index.html' && urlBasePath === 'saqib-s_portfolio') {
        return `/${urlBasePath}${cleanPath}`;
      }
      
      // Use PUBLIC_URL if set
      if (basePath) {
        return `${basePath}${cleanPath}`;
      }
      
      // Otherwise, use root path
      return cleanPath;
    }
  }
  
  // Fallback: Use PUBLIC_URL from environment
  if (basePath) {
    return `${basePath}${cleanPath}`;
  }
  
  // Final fallback: return clean path
  return cleanPath;
};

