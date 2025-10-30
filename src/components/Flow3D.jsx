import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Filter, Lightbulb } from 'lucide-react';

const Card = ({ title, desc, color, icon: Icon }) => (
  <motion.div
    whileHover={{ rotateX: 8, rotateY: -8, translateZ: 10 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur will-change-transform"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className={`absolute -inset-px rounded-2xl ${color} opacity-20 blur-2xl`} />
    <div className="relative flex items-start gap-3">
      <div className="rounded-xl bg-white/10 p-3">
        <Icon className="h-6 w-6 text-violet-300" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default function Flow3D() {
  const problems = [
    { title: 'Toxicity', desc: 'Harmful content buries meaningful feedback.', icon: ShieldCheck },
    { title: 'Spam', desc: 'Bots and promotions skew your metrics.', icon: Filter },
    { title: 'Missed Insights', desc: 'Signals lost in millions of comments.', icon: Lightbulb },
  ];
  const solutions = [
    { title: 'Sentiment AI', desc: 'Target emotions and topics in realtime.', icon: Lightbulb },
    { title: 'Competitor Tracking', desc: 'Benchmark against your market.', icon: ShieldCheck },
    { title: 'Policy Feedback', desc: 'Surface civic sentiment and trends.', icon: Filter },
  ];

  return (
    <section className="relative w-full bg-neutral-950 px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08),_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Problem → Solution Flow</h2>
          <p className="mt-2 text-white/70">From chaos to clarity with a smooth, 3D scroll experience.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {problems.map((p, i) => (
            <Card key={i} title={p.title} desc={p.desc} icon={p.icon} color="bg-violet-500" />
          ))}
        </div>

        <div className="my-10 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur"
          >
            transforms into
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {solutions.map((s, i) => (
            <Card key={i} title={s.title} desc={s.desc} icon={s.icon} color="bg-blue-500" />
          ))}
        </div>
      </div>
    </section>
  );
}
