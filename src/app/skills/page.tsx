'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  FileCode,
  FileText,
  BadgeCheck,
  TerminalSquare,
  Database,
  GitBranch,
  LayoutPanelLeft,
  Rocket,
} from 'lucide-react';

const habilidades = [
  {
    categoria: 'Frontend',
    tecnologias: [
      { nome: 'HTML', icone: <FileCode size={18} /> },
      { nome: 'CSS', icone: <LayoutPanelLeft size={18} /> },
      { nome: 'JavaScript', icone: <FileText size={18} /> },
      { nome: 'TypeScript', icone: <FileText size={18} /> },
      { nome: 'React', icone: <Rocket size={18} />, destaque: true },
      { nome: 'Next.js', icone: <Rocket size={18} /> },
      { nome: 'Tailwind CSS', icone: <BadgeCheck size={18} /> },
    ],
  },
  {
    categoria: 'Backend',
    tecnologias: [
      { nome: 'Node.js', icone: <Code2 size={18} />, destaque: true },
      { nome: 'NestJS', icone: <Code2 size={18} /> },
      { nome: 'Express', icone: <Code2 size={18} /> },
      { nome: 'JWT', icone: <TerminalSquare size={18} /> },
      { nome: 'REST APIs', icone: <TerminalSquare size={18} /> },
    ],
  },
  {
    categoria: 'Banco de Dados',
    tecnologias: [
      { nome: 'PostgreSQL', icone: <Database size={18} />, destaque: true },
      { nome: 'Prisma ORM', icone: <Database size={18} /> },
    ],
  },
  {
    categoria: 'DevOps / Outros',
    tecnologias: [
      { nome: 'Git', icone: <GitBranch size={18} /> },
      { nome: 'Docker (básico)', icone: <TerminalSquare size={18} /> },
      { nome: 'Linux', icone: <TerminalSquare size={18} /> },
      { nome: 'Prettier', icone: <TerminalSquare size={18} /> },
    ],
  },
];

export default function Habilidades() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6">
        Habilidades Técnicas
      </motion.h1>

      <div className="space-y-6">
        {habilidades.map(area => (
          <section key={area.categoria}>
            <h2 className="text-xl font-semibold mb-2">{area.categoria}</h2>
            <ul className="flex flex-wrap gap-3">
              {area.tecnologias.map(tec => (
                <motion.li
                  key={tec.nome}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border border-foreground/20 ${
                    tec.destaque ? 'bg-foreground text-background font-bold shadow' : 'bg-foreground/10 text-foreground'
                  }`}
                >
                  {tec.icone}
                  {tec.nome}
                </motion.li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
