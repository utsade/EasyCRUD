// Utility to get configuration values from both build-time and runtime
export const getConfig = (key, defaultValue = '') => {
  // First try runtime config (from Docker environment variables)
  if (window.RUNTIME_CONFIG && window.RUNTIME_CONFIG[key]) {
    return window.RUNTIME_CONFIG[key];
  }
  
  // Fall back to build-time environment variables
  if (import.meta.env[key]) {
    return import.meta.env[key];
  }
  
  // Return default value
  return defaultValue;
};

// Specific getters for common config values
export const getApiUrl = () => getConfig('VITE_API_URL', 'http://localhost:8080/api');
export const getApiBaseUrl = () => getConfig('VITE_API_BASE_URL', 'http://localhost:8080');
export const getAppTitle = () => getConfig('VITE_APP_TITLE', 'EasyCRUD Student Registration');

// Export for backward compatibility
export const getApiBaseUrl = getApiBaseUrl; 