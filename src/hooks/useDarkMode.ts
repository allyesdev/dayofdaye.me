"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const darkModeAtom = atomWithStorage<"system" | "dark" | "light">(
  "darkMode",
  "system"
);

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const applyMode = (mode: "system" | "dark" | "light") => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (mode === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      mode = systemPrefersDark ? "dark" : "light";
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(mode);
    }
  };

  useEffect(() => {
    applyMode(darkMode);
  }, [darkMode]);

  const handleDarkMode = (newMode: "system" | "light" | "dark") => {
    setDarkMode(newMode);
  };

  return {
    darkMode,
    handleDarkMode,
  };
}
