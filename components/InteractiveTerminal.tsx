"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTheme, THEME_CONFIGS, ThemeMode } from './ThemeContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { soundFx } from './SoundEffects';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const { terminalOpen, setTerminalOpen, setTheme, theme } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-zinc-200 font-bold">
            TEJAS K // VISITOR COMMAND INTERFACE [v2.5.0]
          </p>
          <p className="text-zinc-400">
            Type <span className="text-zinc-100 font-semibold underline">help</span> to list commands or select quick prompts below.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [terminalOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!terminalOpen) return null;

  const handleCommand = (cmdStr: string) => {
    soundFx.playKeypress();
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cleanCmd === 'help') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-zinc-300 font-bold mb-1 uppercase tracking-wider">AVAILABLE COMMANDS:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-400">
            <div>
              <span className="text-zinc-200 font-bold">help</span> - Display terminal manual
            </div>
            <div>
              <span className="text-zinc-200 font-bold">skills</span> - Technical stack & skills
            </div>
            <div>
              <span className="text-zinc-200 font-bold">projects</span> - Featured software projects
            </div>
            <div>
              <span className="text-zinc-200 font-bold">contact</span> - Email, phone & location
            </div>
            <div>
              <span className="text-zinc-200 font-bold">bio</span> - Candidate background
            </div>
            <div>
              <span className="text-zinc-200 font-bold">socials</span> - GitHub & LinkedIn links
            </div>
            <div>
              <span className="text-zinc-200 font-bold">theme &lt;name&gt;</span> - Set preset (charcoal, sage, midnight, monochrome)
            </div>
            <div>
              <span className="text-zinc-200 font-bold">sudo hire</span> - Direct outreach channel
            </div>
            <div>
              <span className="text-zinc-200 font-bold">clear</span> - Clear screen
            </div>
          </div>
        </div>
      );
    } else if (cleanCmd === 'skills') {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <div key={idx}>
              <p className="text-zinc-300 font-bold uppercase">{cat.name}:</p>
              <p className="text-zinc-400">{cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}</p>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd === 'projects') {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          {PORTFOLIO_DATA.projects.map((p, idx) => (
            <div key={idx} className="border-l-2 border-zinc-700 pl-2">
              <p className="text-zinc-200 font-bold">
                {idx + 1}. {p.title} <span className="text-zinc-500">[{p.category}]</span>
              </p>
              <p className="text-zinc-400">{p.tagline}</p>
              <p className="text-zinc-400 text-[11px]">Stack: {p.techStack.join(', ')}</p>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd === 'contact') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-zinc-300">
          <p>
            <span className="text-zinc-400 font-bold">Email:</span> {PORTFOLIO_DATA.personal.email}
          </p>
          <p>
            <span className="text-zinc-400 font-bold">Phone:</span> {PORTFOLIO_DATA.personal.phone}
          </p>
          <p>
            <span className="text-zinc-400 font-bold">Location:</span> {PORTFOLIO_DATA.personal.location}
          </p>
        </div>
      );
    } else if (cleanCmd === 'bio') {
      outputNode = (
        <div className="text-xs font-mono text-zinc-300 leading-relaxed">
          <p className="text-zinc-100 font-bold mb-1">{PORTFOLIO_DATA.personal.name} — {PORTFOLIO_DATA.personal.role}</p>
          <p>{PORTFOLIO_DATA.personal.bio}</p>
        </div>
      );
    } else if (cleanCmd === 'socials') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-zinc-300">
          <p>
            GitHub: <a href={PORTFOLIO_DATA.personal.social.github} target="_blank" rel="noreferrer" className="underline hover:text-white">{PORTFOLIO_DATA.personal.social.github}</a>
          </p>
          <p>
            LinkedIn: <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">{PORTFOLIO_DATA.personal.social.linkedin}</a>
          </p>
        </div>
      );
    } else if (cleanCmd.startsWith('theme')) {
      const parts = cleanCmd.split(' ');
      const targetTheme = parts[1] as ThemeMode;
      if (targetTheme && THEME_CONFIGS[targetTheme]) {
        setTheme(targetTheme);
        outputNode = (
          <p className="text-zinc-200 text-xs font-mono font-bold">
            ✓ Preset updated: [{THEME_CONFIGS[targetTheme].name}]
          </p>
        );
      } else {
        outputNode = (
          <p className="text-zinc-400 text-xs font-mono">
            Error: Preset not found. Options: charcoal, sage, midnight, monochrome.
          </p>
        );
      }
    } else if (cleanCmd === 'sudo hire') {
      soundFx.playSuccess();
      outputNode = (
        <div className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono space-y-1">
          <p className="font-bold flex items-center gap-1.5 text-zinc-100">
            <Sparkles className="w-4 h-4 text-zinc-300" />
            DIRECT RECRUITER CHANNEL ACTIVATED
          </p>
          <p>Candidate Contact: {PORTFOLIO_DATA.personal.email}</p>
          <p className="text-[11px] text-zinc-400">Available immediately for software engineering internships and junior roles.</p>
        </div>
      );
    } else {
      outputNode = (
        <p className="text-zinc-400 text-xs font-mono">
          command not found: {cleanCmd}. Type <span className="text-zinc-200 font-bold underline">help</span> for available commands.
        </p>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        command: cmdStr,
        output: outputNode,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col h-[500px] max-h-[90vh]">
        {/* Header Bar */}
        <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block cursor-pointer hover:bg-red-500 transition-colors" onClick={() => setTerminalOpen(false)} />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-zinc-800 mx-2" />
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
              <TerminalIcon className="w-4 h-4" />
              <span>tejas@portfolio:~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
              Active: {THEME_CONFIGS[theme].name}
            </span>
            <button
              onClick={() => setTerminalOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-4 bg-zinc-950/95 scrollbar-thin">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-zinc-500 font-bold">➜</span>
                <span className="text-zinc-400 font-bold">~</span>
                <span className="text-zinc-100 font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Suggestion Bar */}
        <div className="px-4 py-2 bg-zinc-900/80 border-t border-zinc-800 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-zinc-500 uppercase tracking-wider text-[9px] shrink-0">Prompts:</span>
          {['help', 'skills', 'projects', 'contact', 'theme charcoal', 'sudo hire', 'clear'].map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleCommand(prompt)}
              className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 shrink-0 transition-all"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-zinc-500 font-bold font-mono">➜</span>
          <span className="text-zinc-400 font-bold font-mono">~</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command... (e.g. help, skills, projects)"
            className="flex-1 bg-transparent border-none outline-none text-xs font-mono text-white placeholder-zinc-500 focus:ring-0"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
