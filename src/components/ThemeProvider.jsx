import React, { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  // Initialize theme from localStorage or default
  const [theme, setThemeState] = useState(() => {
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme || defaultTheme;
  });

  // Apply theme effect
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all existing theme classes
    root.classList.remove("light", "dark");

    let appliedTheme = theme;

    // If the theme is set to "system", determine the system theme
    if (theme === "system") {
      appliedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    // Apply the determined theme
    root.classList.add(appliedTheme);
    root.setAttribute('data-theme', appliedTheme);
    
    // Store the theme preference
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const handleChange = () => {
        const root = window.document.documentElement;
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.remove("light", "dark");
        root.classList.add(systemTheme);
        root.setAttribute('data-theme', systemTheme);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};