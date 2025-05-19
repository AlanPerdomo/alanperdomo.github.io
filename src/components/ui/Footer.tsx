'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className=" backdrop-blur bg-white/30"
    >
      <p className="text-center p-4">Alan Perdomo &copy; {new Date().getFullYear()}</p>
    </motion.footer>
  );
}
