import React from 'react';
import { Send, Radio } from 'lucide-react';

const BOT_URL = 'https://t.me/livereczz_bot';

export default function CtaFinal() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#171324] to-[#101016] border border-purple-500/25 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/20 blur-[90px] rounded-full"
          />

          <div className="relative max-w-xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
              <Radio className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Pronto para começar?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300">
              Entre no Telegram e conheça o LiveReczz.
            </p>

            <div className="pt-2">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-purple-950/60 border border-purple-400/30 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Send className="w-4 h-4" />
                <span>ACESSAR BOT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
