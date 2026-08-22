import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FF',
          300: '#7BBEFF',
          400: '#369EFF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002B66',
          900: '#001A40',
        },
        surface: {
          subtle: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          dark: '#0F172A',
          darkCard: '#1E293B',
        },
        metric: {
          safe: '#10B981',
          safeBg: '#ECFDF5',
          target: '#F59E0B',
          targetBg: '#FEF3C7',
          dream: '#8B5CF6',
          dreamBg: '#F3E8FF',
          highlight: '#FEF3C7',
        }
      },
      borderRadius: {
        'subtle': '6px',
        'standard': '10px',
        'prominent': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'floating': '0 20px 40px -15px rgba(0, 102, 255, 0.15)',
        'glow': '0 0 20px rgba(0, 102, 255, 0.35)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-subtle': 'pulse-subtle 2s infinite ease-in-out',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
