/**
 * Environment-aware logger that prevents detailed error information
 * from being exposed in production browser console.
 */
export const logger = {
  error: (message: string, error?: unknown) => {
    if (import.meta.env.DEV) {
      console.error(message, error);
    } else {
      // Only log sanitized message in production - no error details
      console.error(message);
    }
  },
  
  warn: (message: string, data?: unknown) => {
    if (import.meta.env.DEV) {
      console.warn(message, data);
    } else {
      console.warn(message);
    }
  },
  
  info: (message: string, data?: unknown) => {
    if (import.meta.env.DEV) {
      console.info(message, data);
    }
    // No info logs in production
  },
  
  debug: (message: string, data?: unknown) => {
    if (import.meta.env.DEV) {
      console.log(message, data);
    }
    // No debug logs in production
  }
};
