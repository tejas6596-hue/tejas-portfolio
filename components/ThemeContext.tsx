"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundFx } from './SoundEffects';

export type ThemeMode = 'charcoal' | 'sage' | 'midnight' | 'monochrome';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  tagline: string;
  badge: string;
  bgHex: string;
  accentHex: string;
  secondaryHex: string;
}

export const THEME_CONFIGS: Record<ThemeMode, ThemeConfig> = {
  charcoal: {
    id: 'charcoal',
    name: 'Minimal Charcoal',
    tagline: 'Deep Charcoal & Platinum White',
    badge: '01',
    bgHex: '#09090b',
    accentHex: '#e4e4e7',
    secondaryHex: '#a1a1aa',
  },
  sage: {
    id: 'sage',
    name: 'Architectural Sage',
    tagline: 'Obsidian Slate & Muted Emerald',
    badge: '02',
    bgHex: '#0b0f19',
    accentHex: '#10b981',
    secondaryHex: '#34d399',
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight Amber',
    tagline: 'Dark Slate & Muted Bronze',
    badge: '03',
    bgHex: '#0f172a',
    accentHex: '#d97706',
    secondaryHex: '#fbbf24',
  },
  monochrome: {
    id: 'monochrome',
    name: 'Studio Mono',
    tagline: 'Pure Monochrome Studio Elegance',
    badge: '04',
    bgHex: '#050505',
    accentHex: '#ffffff',
    secondaryHex: '#71717a',
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  toggleTerminal: () => void;
  activeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('charcoal');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('app-theme') as ThemeMode;
    if (savedTheme && THEME_CONFIGS[savedTheme]) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'charcoal');
    }

    const savedSound = localStorage.getItem('app-sound');
    if (savedSound !== null) {
      const isEnabled = savedSound === 'true';
      setSoundEnabled(isEnabled);
      soundFx.setEnabled(isEnabled);
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('app-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    soundFx.playThemeSwitch();
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.setEnabled(nextState);
    localStorage.setItem('app-sound', String(nextState));
    if (nextState) soundFx.playClick();
  };

  const toggleTerminal = () => {
    setTerminalOpen((prev) => {
      const next = !prev;
      if (next) soundFx.playClick();
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleTerminal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: mounted ? theme : 'charcoal',
        setTheme,
        soundEnabled,
        toggleSound,
        terminalOpen,
        setTerminalOpen,
        toggleTerminal,
        activeConfig: THEME_CONFIGS[mounted ? theme : 'charcoal'],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
