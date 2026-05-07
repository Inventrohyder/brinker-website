"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

const themes: Theme[] = ["light", "dark", "system"];
const themeStorageKey = "brinker-theme";
const themeChangeEvent = "brinker-theme-change";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.classList.toggle("dark", theme === "dark" || (theme === "system" && systemDark));
  root.style.colorScheme = theme === "dark" || (theme === "system" && systemDark) ? "dark" : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(themeStorageKey) as Theme | null;
  return stored && themes.includes(stored) ? stored : "system";
}

function subscribeToTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (getInitialTheme() === "system") applyTheme("system");
    callback();
  };
  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);
  media.addEventListener("change", onSystemChange);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
    media.removeEventListener("change", onSystemChange);
  };
}

function getServerTheme(): Theme {
  return "system";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getInitialTheme, getServerTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function cycleTheme() {
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    window.localStorage.setItem(themeStorageKey, nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
    applyTheme(nextTheme);
  }

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <Button aria-label={`Theme: ${theme}. Switch theme.`} className="rounded-full" onClick={cycleTheme} size="icon" type="button" variant="outline">
      <Icon aria-hidden={true} />
    </Button>
  );
}
