import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          primary: '#1E3A8A',
          accent: '#DC2626',
          gray: '#E5E7EB',
        },
        dark: {
          bg: '#000000',
          primary: '#0A142F',
          gray: '#4B5563',
        },
      },
    },
  },
  plugins: [],
};

export default config;
