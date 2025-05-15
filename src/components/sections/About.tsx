'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-12 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Mim
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Olá! Me chamo Alan Perdomo, sou desenvolvedor apaixonado por tecnologia...
      </motion.p>
    </section>
  );
}
