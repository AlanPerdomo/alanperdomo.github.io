'use client';
import { motion } from 'framer-motion';
export default function Sobre() {
  return (
    <div>
      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        Sobre Mim
      </motion.h2>
      <motion.p
        className="text-justify text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Sou <b>Alan Perdomo</b>, bacharel em Geografia com transição de carreira para a área de Tecnologia da
        Informação. Desde o final da graduação, direcionei meu foco profissional para o desenvolvimento de software,
        motivado por um interesse de longa data por tecnologia e pela constante busca por soluções que otimizem tarefas
        e processos por meio da automação. Atualmente, atuo como desenvolvedor web, com ênfase em aplicações full stack.
        Tenho experiência em tecnologias modernas como JavaScript, TypeScript, React, Next.js, Node.js e NestJS, além do
        uso de bancos de dados relacionais como PostgreSQL. Também possuo familiaridade com controle de versões via Git,
        integração de APIs RESTful, autenticação JWT, e deploy de aplicações web. Meu diferencial está na combinação
        entre visão analítica — adquirida durante a formação acadêmica — e a aplicação prática de conceitos em
        engenharia de software para resolver problemas reais com eficiência, escalabilidade e clareza estrutural. Tenho
        forte interesse por arquitetura de sistemas, boas práticas de código e automação de fluxos operacionais. Estou
        em constante evolução, sempre aprendendo novas tecnologias e aprimorando minhas habilidades para entregar
        soluções robustas, bem documentadas e de fácil manutenção.
      </motion.p>
    </div>
  );
}
