export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-8 sm:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Make space for better conversations</h3>
            <p className="mt-3 text-white/70">Start free. Upgrade anytime to unlock deeper memory, longer chats, and custom personalities.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-black px-5 py-3 font-semibold shadow-lg shadow-orange-500/30 hover:brightness-110">
              Create your companion
            </button>
            <p className="text-sm text-white/60">No credit card required. 7-day Pro trial included.</p>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-white/50">© {new Date().getFullYear()} Vibe AI. Designed with care.</p>
      </div>
    </section>
  );
}
