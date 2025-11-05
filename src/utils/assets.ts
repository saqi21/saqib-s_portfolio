/**
 * Utility function to get the correct asset path for both local development and production
 * Uses process.env.PUBLIC_URL which Create React App handles automatically
 */
export const getAssetPath = (path: string): string => {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Runtime check: if we're on localhost, determine the correct base path
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Check if we're on localhost
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
      // Extract base path from pathname (e.g., "saqib-s_portfolio" from "/saqib-s_portfolio/")
      const pathParts = pathname.split('/').filter(Boolean);
      const basePath = pathParts.length > 0 ? pathParts[0] : '';
      
      // If there's a base path in the URL, use it
      // This handles cases like localhost:3000/saqib-s_portfolio
      if (basePath && basePath !== 'index.html') {
        return `/${basePath}${cleanPath}`;
      }
      
      // Check process.env.PUBLIC_URL for local dev
      // If PUBLIC_URL is set in the start script, use it
      const publicUrl = process.env.PUBLIC_URL || '';
      if (publicUrl) {
        const cleanPublicUrl = publicUrl.replace(/\/$/, '');
        return `${cleanPublicUrl}${cleanPath}`;
      }
      
      // Otherwise, use root path (for localhost:3000/)
      return cleanPath;
    }
  }
  
  // For production: process.env.PUBLIC_URL is automatically set by Create React App
  // based on the homepage field (e.g., "/saqib-s_portfolio")
  const publicUrl = process.env.PUBLIC_URL || '';
  
  // Remove trailing slash from publicUrl if present
  const basePath = publicUrl.replace(/\/$/, '');
  
  // Return the combined path
  return `${basePath}${cleanPath}`;
};

