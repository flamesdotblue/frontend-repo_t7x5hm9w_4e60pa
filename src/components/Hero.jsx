import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.25),_transparent_60%),_radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_40%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_20px_4px_rgba(167,139,250,0.6)]" />
          <span className="text-sm text-white/80">AI Insights • Glassmorphic • Realtime</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-r from-violet-300 via-white to-blue-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Turning 7.5M+ Daily Comments into Actionable Intelligence
        </h1>
        <p className="mt-6 max-w-3xl text-balance text-lg text-white/70 sm:text-xl">
          AI-powered feedback insights for creators, businesses, and governments.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#get-started" className="group relative inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-medium shadow-[0_20px_60px_-15px_rgba(124,58,237,0.6)] transition-transform hover:scale-[1.02]">
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10">
            <Play className="h-5 w-5 text-violet-300" />
            <span>See Demo</span>
          </a>
        </div>

        {/* Floating glass cards */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: 'Realtime Sentiment', value: '98.2% precision' },
            { title: 'Noise Reduction', value: '-72% spam' },
            { title: 'Coverage', value: '7.5M+ comments/day' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform will-change-transform hover:-translate-y-1 hover:bg-white/10"
              style={{ perspective: '1000px' }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-blue-500/10 blur-2xl" />
                <div className="relative">
                  <p className="text-sm text-white/60">{item.title}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
