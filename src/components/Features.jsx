import React from 'react';
import {
  Send,
  Layout,
  Radio,
  FileVideo,
  Zap,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    title: 'Operação pelo Telegram',
    description:
      'Interaja com o serviço diretamente pelo chat do bot oficial no Telegram.',
    icon: Send,
  },
  {
    title: 'Interface simples',
    description:
      'Comandos claros e objetivos, sem configurações ou painéis complexos.',
    icon: Layout,
  },
  {
    title: 'Suporte a TikTok e Instagram',
    description:
      'Compatível com transmissões ao vivo suportadas nas duas plataformas.',
    icon: Radio,
  },
  {
    title: 'Entrega de gravações pelo Telegram',
    description:
      'Receba o vídeo processado diretamente na sua conversa com o bot.',
    icon: FileVideo,
  },
  {
    title: 'Acesso rápido',
    description:
      'Inicie o uso imediatamente abrindo o bot oficial no seu Telegram.',
    icon: Zap,
  },
  {
    title: 'Sem necessidade de instalar um aplicativo próprio',
    description:
      'Funciona integralmente dentro do ecossistema do próprio Telegram.',
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#0c0c10]/70 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 sm:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
            Diferenciais
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Recursos essenciais
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Projetado para ser direto, prático e acessível pelo Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl bg-[#121217] border border-white/[0.07] hover:border-purple-500/35 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-600/25 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
