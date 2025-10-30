import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Building2, Landmark, X } from 'lucide-react';

function TechRing({ label, delay, color }) {
  return (
    <div className="relative grid place-items-center p-6">
      <div className="relative h-40 w-40 rounded-full border border-white/10 bg-white/5 backdrop-blur">
        <motion.div
          className={`absolute inset-0 rounded-full ${color}`}
          style={{ filter: 'blur(24px)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14 + delay, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-sm text-white/80">{label}</span>
        </div>
      </div>
    </div>
  );
}

function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 p-6 text-white backdrop-blur">
            <button onClick={onClose} className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/5 p-1 hover:bg-white/10"><X className="h-4 w-4" /></button>
            <h3 className="mb-3 bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-xl font-semibold text-transparent">{title}</h3>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.15),transparent_40%)]" />
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function UseCasesAndTech() {
  const [active, setActive] = useState(null);

  const tiles = [
    { key: 'creators', title: 'Creators', icon: Rocket, content: (
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Sentiment</div><div className="h-20 rounded-md bg-gradient-to-b from-violet-500/40 to-blue-500/40" /></div>
        <div className="rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Toxicity</div><div className="h-20 rounded-md bg-gradient-to-b from-rose-500/40 to-orange-500/40" /></div>
        <div className="col-span-2 rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Top Comments</div><div className="h-16 rounded-md bg-white/5" /></div>
      </div>
    )},
    { key: 'businesses', title: 'Businesses', icon: Building2, content: (
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="col-span-2 rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Competitors</div><div className="h-20 rounded-md bg-gradient-to-r from-violet-500/40 to-blue-500/40" /></div>
        <div className="rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Share of Voice</div><div className="h-20 rounded-md bg-white/5" /></div>
        <div className="col-span-3 rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Emerging Topics</div><div className="h-16 rounded-md bg-white/5" /></div>
      </div>
    )},
    { key: 'governments', title: 'Governments', icon: Landmark, content: (
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Policy Feedback</div><div className="h-20 rounded-md bg-gradient-to-b from-emerald-500/40 to-blue-500/40" /></div>
        <div className="rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Region Heat</div><div className="h-20 rounded-md bg-gradient-to-b from-yellow-500/40 to-red-500/40" /></div>
        <div className="col-span-2 rounded-lg bg-neutral-900 p-3"><div className="mb-2 text-white/70">Civic Sentiment</div><div className="h-16 rounded-md bg-white/5" /></div>
      </div>
    )},
  ];

  return (
    <section className="relative w-full bg-neutral-950 px-6 py-24 text-white">
      <div className="relative mx-auto max-w-7xl">
        {/* Technology Stack */}
        <div className="mb-14 text-center">
          <h2 className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Technology Stack</h2>
          <p className="mt-2 text-white/70">Optimized AI pipeline and reliable data ingestion.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <TechRing label="Flask" delay={0} color="bg-violet-500/20" />
          <TechRing label="Python • Scikit-learn" delay={2} color="bg-blue-500/20" />
          <TechRing label="YouTube API • Reddit API" delay={4} color="bg-cyan-500/20" />
        </div>

        {/* Use Cases */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold">Use Cases</h3>
          <p className="mt-2 text-white/70">Explore how CommentLens adapts to your needs.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiles.map((t) => (
            <motion.button
              key={t.key}
              onClick={() => setActive(t)}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
              style={{ perspective: 1000 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3"><t.icon className="h-6 w-6 text-violet-300" /></div>
                <div>
                  <div className="text-lg font-semibold">{t.title}</div>
                  <div className="text-sm text-white/70">Tap to open a mini 3D preview</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-neutral-900">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_40%)]" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 to-white/0" />
              </div>
            </div>
            <div>
              <div className="text-sm text-white/70">Preview</div>
              <div className="mt-2 text-xs text-white/60">Interactive mockup showcasing how {active?.title?.toLowerCase()} leverage insights.</div>
              <div className="mt-3 rounded-md border border-white/10 bg-white/5 p-2 text-xs">GPU-optimized animations</div>
            </div>
            <div className="col-span-3 mt-2">{active?.content}</div>
          </div>
        </Modal>

        {/* Impact + CTA */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-3 text-lg font-semibold">Global Impact</div>
            <div className="relative h-56 w-full overflow-hidden rounded-xl bg-neutral-900">
              <div className="absolute inset-0">
                {Array.from({ length: 80 }).map((_, i) => (
                  <span key={i} className="absolute h-1 w-1 rounded-full bg-violet-400/90 shadow-[0_0_12px_2px_rgba(167,139,250,0.8)]" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, opacity: 0.6 + Math.random()*0.4 }} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)]" />
            </div>
            <div className="mt-3 text-sm text-white/70">Subtle 3D map with glowing presence dots where CommentLens has users.</div>
          </div>

          <div id="get-started" className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-blue-600/30 p-6">
            <div className="mb-2 text-lg font-semibold">Ready to see it in action?</div>
            <div className="text-sm text-white/80">Start a free analysis with our AI. No credit card required.</div>
            <div className="relative mt-6 flex items-center gap-3">
              <button className="relative z-10 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 font-medium shadow-[0_20px_60px_-15px_rgba(124,58,237,0.6)] transition-transform hover:scale-[1.02]">Start Free Analysis</button>
              <div className="relative h-12 flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-violet-400/20 blur" style={{ left: `${i*5}%`, animation: 'pulse 2s ease-in-out infinite', animationDelay: `${i*0.1}s` }} />
                  ))}
                </div>
                <div className="absolute inset-0" style={{ maskImage: 'radial-gradient(circle at left, black 30%, transparent 70%)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
