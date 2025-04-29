import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * @param {string} query - CSS media query string
 * @returns {boolean} - True if the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update the state initially
    setMatches(media.matches);
    
    // Define callback for media query change
    const listener = (event) => {
      setMatches(event.matches);
    };
    
    // Add the listener
    media.addEventListener('change', listener);
    
    // Clean up
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};

// Predefined breakpoints
export const useIsMobile = () => useMediaQuery('(max-width: 575.98px)');
export const useIsTablet = () => useMediaQuery('(min-width: 576px) and (max-width: 991.98px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 992px)');
export const useIsLargeDesktop = () => useMediaQuery('(min-width: 1200px)');

export default useMediaQuery;