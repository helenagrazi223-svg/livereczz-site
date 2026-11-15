import React from 'react';
import { Mail, ShieldAlert, Info } from 'lucide-react';

const SUPPORT_EMAIL = 'livereczzsupport@gmail.com';
const MAILTO_SUBJECT = encodeURIComponent('Solicitação de remoção de conteúdo — LiveReczz');
const MAILTO_BODY = encodeURIComponent(
`Olá, equipe LiveReczz.

Gostaria de solicitar a remoção de um conteúdo gravado pelo serviço.

Nome:
Perfil na plataforma:
Link da transmissão ou gravação:
Motivo da solicitação:

Aguardo retorno.`
);

const MAILTO_URL = `mailto:${SUPPORT_EMAIL}?subject=${MAILTO_SUBJECT}&body=${MAILTO_BODY}`;

const steps = [
  'Envie um e-mail para nossa equipe de suporte.',
  'Informe seu nome ou identificação como criador de conteúdo.',
  'Inclua o link da transmissão original ou da gravação, caso disponível.',
  'Explique brevemente o motivo da solicitação.',
  'Nossa equipe analisará o pedido e responderá pelo mesmo canal.',
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 sm:py-24 border-t border-white/[0.06] bg-[#0a0a0e] scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#111116] border border-white/[0.08] p-6 sm:p-10 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Privacidade e Direitos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Solicitação de remoção de conteúdo
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              O LiveReczz respeita os criadores de conteúdo e leva a sério solicitações relacionadas à privacidade e à remoção de gravações.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Se você é um criador de conteúdo e deseja solicitar a remoção de um vídeo gravado através do nosso serviço, entre em contato com nossa equipe pelo endereço de suporte abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2 border-t border-white/[0.06]">
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Como solicitar a remoção?
              </h3>
              <ol className="space-y-2.5 text-sm text-zinc-400">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-md bg-purple-600/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="md:col-span-5 rounded-xl bg-[#15151c] border border-white/[0.07] p-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Canal oficial de suporte
                </span>
                <div className="text-sm sm:text-base font-semibold text-purple-300 break-all">
                  {SUPPORT_EMAIL}
                </div>
              </div>

              <a
                href={MAILTO_URL}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-purple-950/50 border border-purple-400/25 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Mail className="w-4 h-4" />
                <span>ENTRAR EM CONTATO</span>
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
            <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p>
              Todas as solicitações serão analisadas individualmente. O envio de uma solicitação não representa remoção automática ou imediata do conteúdo. Nossa equipe poderá solicitar informações adicionais para verificar a legitimidade do pedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
