import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(null);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;

    // Definiere die Pfade, bei denen nicht nach oben gescrollt werden soll
    const excludePaths = ["/", "/home", "/about", "/contact"];

    const prevIsExcluded = excludePaths.includes(prevPathname);
    const currIsExcluded = excludePaths.includes(pathname);

    if (prevIsExcluded && currIsExcluded) {
      // Beide Pfade sind ausgeschlossen; nicht scrollen
      return;
    }

    // Scrolle zum Seitenanfang
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
