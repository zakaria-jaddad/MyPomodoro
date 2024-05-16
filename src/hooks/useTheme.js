import { useEffect } from "react";

function changeTheme(theme) {
  // set theme
  for (const [color, colorValue] of Object.entries(theme)) {
    document.documentElement.style.setProperty(`--${color}`, colorValue);
  }
}

/* 
  Object -> null
  change theme every time theme value cahnges 
 */
export default function useTheme(theme) {
  useEffect(() => {
    changeTheme(theme);
  }, [theme]);
}
