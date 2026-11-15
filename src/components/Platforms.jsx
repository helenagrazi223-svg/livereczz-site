import React from 'react';
import { Radio, Tv, Camera, ArrowUpRight } from 'lucide-react';

const BOT_URL = 'https://t.me/livereczz_bot';

const platforms = [
  {
    name: 'TikTok',
    badge: 'Transmissões ao vivo',
    description:
      'Grave transmissões ao vivo compatíveis com o sistema diretamente através do bot.',
    icon: Tv,
  },
  {
    name: 'Instagram',
    badge: 'Transmissões ao vivo',
    description:
      'Capture transmissões ao vivo compatíveis sem precisar de um painel complicado.',
    icon: Camera,
  },
];

export default function Platforms() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.06] bg-[#0b0b0f]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
            <Radio className="w-3.5 h-3.5" />
            <span>Compatibilidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Plataformas suportadas
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Acione capturas de lives diretamente da sua conversa no Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {platforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="group relative rounded-2xl bg-[#121217] border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600/25 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.07] text-zinc-300">
                    {platform.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                  {platform.name}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                  {platform.description}
                </p>

                <a
                  href={BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Utilizar no Telegram</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
