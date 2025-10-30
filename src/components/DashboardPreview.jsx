import React from 'react';
import { motion } from 'framer-motion';

function TiltCard({ children }) {
  return (
    <motion.div
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
      whileHover={{ y: -6 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-56 w-full overflow-hidden rounded-xl bg-neutral-900"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateX: 6, rotateY: -6, translateZ: 10 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        {/* accent glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_40%)]" />
        {children}
      </motion.div>
    </motion.div>
  );
}

const Bar = ({ value, label, color }) => (
  <div className="flex items-center gap-3">
    <div className="w-24 text-xs text-white/60">{label}</div>
    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">
      <div className={`h-full ${color}`} style={{ width: value }} />
    </div>
    <div className="w-12 text-right text-xs text-white/60">{value}</div>
  </div>
);

export default function DashboardPreview() {
  return (
    <section className="relative w-full bg-neutral-950 px-6 py-24 text-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Interactive Dashboard Preview</h2>
          <p className="mt-2 text-white/70">Hover to tilt and reveal data overlays with subtle depth.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TiltCard>
            <div className="absolute inset-0 p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                <span>Sentiment Overview</span>
                <span>Last 24h</span>
              </div>
              <div className="grid h-[140px] grid-cols-12 items-end gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="relative h-full w-full bg-gradient-to-t from-violet-600/30 to-blue-500/50" style={{ height: `${20 + Math.random() * 70}%` }} />
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <Bar label="Positive" value="72%" color="bg-green-400/80" />
                <Bar label="Neutral" value="18%" color="bg-blue-400/80" />
                <Bar label="Negative" value="10%" color="bg-rose-400/80" />
              </div>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="absolute inset-0 p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                <span>Topic Heatmap</span>
                <span>Realtime</span>
              </div>
              <div className="grid h-[180px] grid-cols-6 gap-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="h-full w-full rounded-sm bg-violet-500/20" style={{ opacity: 0.3 + Math.random() * 0.7 }} />
                ))}
              </div>
              <div className="mt-3 text-xs text-white/60">Darker = higher intensity</div>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="absolute inset-0 p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                <span>Channel Health</span>
                <span>Score</span>
              </div>
              <div className="relative mx-auto mt-4 h-36 w-36 rounded-full border-4 border-white/10">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500/80 animate-spin" style={{ animationDuration: '5s' }} />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold">86</div>
              </div>
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex justify-between"><span>Toxicity</span><span>-38%</span></div>
                <div className="flex justify-between"><span>Spam</span><span>-72%</span></div>
                <div className="flex justify-between"><span>Growth</span><span>+24%</span></div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
