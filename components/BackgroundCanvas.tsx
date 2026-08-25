"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export default function BackgroundCanvas() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle Ambient Floating Dust Particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.8 + Math.random() * 1.5,
      alpha: 0.15 + Math.random() * 0.35,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.15 - Math.random() * 0.25,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Color scheme based on active theme
      let bgFill = '#09090b';
      let particleColor = 'rgba(255, 255, 255, 0.4)';
      let glowHex1 = 'rgba(255, 255, 255, 0.03)';
      let glowHex2 = 'rgba(161, 161, 170, 0.02)';

      if (theme === 'sage') {
        bgFill = '#0b0f19';
        particleColor = 'rgba(16, 185, 129, 0.4)';
        glowHex1 = 'rgba(16, 185, 129, 0.04)';
        glowHex2 = 'rgba(52, 211, 153, 0.02)';
      } else if (theme === 'midnight') {
        bgFill = '#0f172a';
        particleColor = 'rgba(217, 119, 6, 0.4)';
        glowHex1 = 'rgba(217, 119, 6, 0.04)';
        glowHex2 = 'rgba(251, 191, 36, 0.02)';
      } else if (theme === 'monochrome') {
        bgFill = '#050505';
        particleColor = 'rgba(255, 255, 255, 0.3)';
        glowHex1 = 'rgba(255, 255, 255, 0.03)';
        glowHex2 = 'rgba(113, 113, 122, 0.02)';
      }

      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, width, height);

      // Soft radial ambient background glows
      const g1 = ctx.createRadialGradient(width * 0.25, height * 0.2, 50, width * 0.25, height * 0.2, 500);
      g1.addColorStop(0, glowHex1);
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(width * 0.75, height * 0.8, 50, width * 0.75, height * 0.8, 550);
      g2.addColorStop(0, glowHex2);
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle particle drift
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 opacity-95"
    />
  );
}
