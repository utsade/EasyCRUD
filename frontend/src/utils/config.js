// Utility to get configuration values from runtime environment variables
export const getConfig = (key, defaultValue = '') => {
  // First try to get from window.ENV (runtime substitution)
  if (typeof window !== 'undefined' && window.ENV && window.ENV[key]) {
    return window.ENV[key];
  }
  
  // Fallback to build-time environment variables
  if (import.meta.env[key]) {
    return import.meta.env[key];
  }
  
  // Return default value
  return defaultValue;
};

// Specific getters for common config values
export const getApiUrl = () => {
  const apiUrl = getConfig('VITE_API_URL', 'http://localhost:8080/api');
  console.log('API URL:', apiUrl); // Debug log
  return apiUrl;
};

export const getApiBaseUrl = () => getConfig('VITE_API_BASE_URL', 'http://localhost:8080');
export const getAppTitle = () => getConfig('VITE_APP_TITLE', 'EasyCRUD Student Registration'); 