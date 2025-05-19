'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className=" backdrop-blur bg-header-background dark:bg-header-background shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Alan Perdomo
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:underline">
            Sobre
          </Link>
          <Link href="#projects" className="hover:underline">
            Projetos
          </Link>
          <Link href="/skills" className="hover:underline">
            Habilidades
          </Link>
          <Link href="#cv" className="hover:underline">
            Currículo
          </Link>
          <Link href="#social" className="hover:underline">
            Redes
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
