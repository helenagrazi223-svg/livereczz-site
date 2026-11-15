import React from 'react';
import {
  Send,
  Radio,
  Video,
  Terminal,
  CheckCircle2,
  ArrowDown,
  FileVideo,
  Sparkles,
} from 'lucide-react';

const BOT_URL = 'https://t.me/livereczz_bot';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Subtle ambient purple lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[580px] h-[340px] bg-purple-600/15 blur-[130px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 right-10 w-[300px] h-[300px] bg-purple-800/10 blur-[110px] rounded-full"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Bot oficial no Telegram</span>
              <span className="text-purple-400 font-semibold">@livereczz_bot</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Suas lives.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500">
                Gravadas.
              </span>{' '}
              <span className="block mt-1">Sem complicação.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Capture transmissões ao vivo do TikTok e Instagram diretamente pelo Telegram. Simples, rápido e prático.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-purple-950/60 border border-purple-400/25 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Send className="w-4 h-4" />
                <span>Acessar LiveReczz</span>
              </a>

              <a
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 hover:text-white font-medium text-sm sm:text-base border border-white/[0.08] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <span>Como funciona</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Composition (Telegram + Live Video Capture representation) */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative mx-auto max-w-md">
              {/* Outer glow frame */}
              <div
                aria-hidden="true"
                className=" -inset-0.5 bg-gradient-to-b from-purple-500/25 to-transparent rounded-3xl blur-md opacity-75"
              />

              {/* Main Card representing Telegram Bot Interface */}
              <div className="relative rounded-2xl bg-[#111116] border border-white/[0.09] shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="px-4 py-3.5 bg-[#16161d] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <span>LiveReczz</span>
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div className="text-xs text-zinc-400">@livereczz_bot</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] font-medium text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Telegram Bot
                  </span>
                </div>

                {/* Simulated Conversation Flow */}
                <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-[#0d0d12] to-[#111116]">
                  {/* User Command Bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-purple-600/25 border border-purple-500/30 px-4 py-2.5 text-xs sm:text-sm text-purple-100">
                      <div className="flex items-center gap-2 font-mono text-xs text-purple-300 mb-0.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Comando enviado</span>
                      </div>
                      <p className="font-medium text-white"> Solicitar gravação de transmissão</p>
                    </div>
                  </div>

                  {/* Bot Capture Status Card */}
                  <div className="flex justify-start">
                    <div className="w-full max-w-[92%] rounded-2xl rounded-tl-sm bg-white/[0.03] border border-white/[0.08] p-3.5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          Transmissão detectada
                        </span>
                        <span className="text-[11px] text-zinc-400 font-mono">LIVE</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05] flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                          <Video className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-medium text-zinc-200 truncate">
                            Captura em processamento
                          </div>
                          <div className="text-[11px] text-zinc-400 truncate">
                            TikTok / Instagram Live
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bot File Delivery Bubble */}
                  <div className="flex justify-start">
                    <div className="w-full max-w-[92%] rounded-2xl rounded-tl-sm bg-purple-950/20 border border-purple-500/25 p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                          <FileVideo className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>Gravação entregue no chat</span>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            Arquivo de vídeo enviado diretamente pelo Telegram
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Bar */}
                <div className="px-4 py-3 bg-[#15151c] border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span>Operação 100% via Telegram</span>
                  <a
                    href={BOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Abrir @livereczz_bot →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
