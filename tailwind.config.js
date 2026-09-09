/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        bg: '#0a0a0a',
        fg: '#e0e0e0',
        muted: '#555555',
        dim: '#333333',
        accent: '#7ab87a',
        border: '#1a1a1a',
      },
    },
  },
  plugins: [],
};
