import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <div>
      {darkTheme !== undefined && (
        <form action="#" className="d-flex align-items-center">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={handleToggle}
            />
            <span className="slider"></span>
            <span className="theme-mode-icon icon-light_mode position-relative"></span>
            <span className="theme-mode-icon icon-dark_mode position-relative"></span>
          </label>
        </form>
      )}
    </div>
  );
}
