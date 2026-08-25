"use client";

import React, { useState } from 'react';
import { useTheme, THEME_CONFIGS, ThemeMode } from './ThemeContext';
import { Palette, Volume2, VolumeX, Terminal, Check, ChevronUp } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme, soundEnabled, toggleSound, toggleTerminal } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeList: ThemeMode[] = ['charcoal', 'sage', 'midnight', 'monochrome'];

  return (
    <aside aria-label="Visual Theme and Utilities Controls" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Theme Menu Card */}
      {isOpen && (
        <div className="w-72 p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-zinc-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 font-mono">
                Decent Theme Presets
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              4 PRESETS
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {themeList.map((tKey) => {
              const cfg = THEME_CONFIGS[tKey];
              const isActive = theme === tKey;
              return (
                <button
                  key={tKey}
                  onClick={() => {
                    setTheme(tKey);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-zinc-900 border-zinc-600 shadow-md'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center text-[9px] font-bold"
                      style={{ backgroundColor: cfg.accentHex, color: '#000' }}
                    >
                      {cfg.badge}
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                        {cfg.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-light">{cfg.tagline}</p>
                    </div>
                  </div>

                  {isActive && <Check className="w-4 h-4 text-zinc-200" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="text-[11px] font-mono">Audio Micro-Effects</span>
            <button
              onClick={toggleSound}
              className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-200'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-600'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-mono">{soundEnabled ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Control Pills */}
      <div className="flex items-center gap-2 bg-zinc-950/80 p-1.5 rounded-full border border-zinc-800 backdrop-blur-xl shadow-xl">
        {/* Terminal Button Trigger */}
        <button
          onClick={toggleTerminal}
          title="Open Visitor Command Terminal (Ctrl+K)"
          className="px-3 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono group"
        >
          <Terminal className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-semibold">CLI</span>
          <kbd className="hidden md:inline text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
            Ctrl+K
          </kbd>
        </button>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? 'Disable Audio Effects' : 'Enable Audio Effects'}
          className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-zinc-200" /> : <VolumeX className="w-4 h-4 text-zinc-600" />}
        </button>

        {/* Primary Theme Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-all shadow-lg flex items-center gap-2 border border-zinc-700 font-mono"
        >
          <Palette className="w-4 h-4" />
          <span className="uppercase tracking-wider">
            {THEME_CONFIGS[theme].name.split(' ')[0]}
          </span>
          <ChevronUp className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </aside>
  );
}
