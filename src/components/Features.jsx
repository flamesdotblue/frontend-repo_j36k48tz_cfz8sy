import { Brain, MessageSquare, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Understands you',
    desc: 'Context-aware conversations that learn your style and preferences over time.'
  },
  {
    icon: MessageSquare,
    title: 'Natural chat',
    desc: 'Feels friendly and playful while staying helpful, clear, and on-topic.'
  },
  {
    icon: Zap,
    title: 'Fast responses',
    desc: 'Optimized for speed with smart summarization and quick follow-ups.'
  },
  {
    icon: Shield,
    title: 'Private by design',
    desc: 'Secure data handling with transparent controls and on-device options.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Designed to feel human — and helpful</h2>
          <p className="mt-3 text-white/70">Clean lines, thoughtful motion, and a warm accent glow make every interaction feel alive.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-orange-500/90 to-amber-500/80 text-black grid place-items-center shadow-lg shadow-orange-500/30">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
