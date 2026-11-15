import React from 'react';
import { MessageSquare, Terminal, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Entre no bot.',
    description: 'Acesse o LiveReczz pelo Telegram.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Envie a transmissão.',
    description: 'Utilize os comandos disponíveis para informar a live que deseja gravar.',
    icon: Terminal,
  },
  {
    number: '03',
    title: 'Receba sua gravação.',
    description:
      'O bot processa a captura e entrega o arquivo pelo Telegram, conforme as limitações da plataforma.',
    icon: Download,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 sm:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
            Fluxo simplificado
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Como funciona
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Três etapas diretas para iniciar e receber suas gravações pelo Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-purple-500/35 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300">
                      Etapa {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-400 group-hover:bg-purple-600/20 group-hover:border-purple-500/30 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                    {step.number} — {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center gap-1.5 text-xs text-zinc-500 mt-6 pt-4 border-t border-white/[0.05]">
                    <span>Próxima etapa</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
