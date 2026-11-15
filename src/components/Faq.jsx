import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'O LiveReczz é gratuito?',
    answer:
      'Consulte as condições e eventuais limitações diretamente no bot oficial.',
  },
  {
    question: 'Preciso instalar algum programa?',
    answer:
      'Não é necessário instalar um aplicativo próprio do LiveReczz. A operação acontece pelo Telegram.',
  },
  {
    question: 'Como recebo as gravações?',
    answer: 'Os arquivos são enviados pelo próprio bot no Telegram.',
  },
  {
    question: 'Quais plataformas são suportadas?',
    answer:
      'TikTok e Instagram, respeitando a compatibilidade técnica e as limitações de cada plataforma.',
  },
  {
    question: 'O site grava as transmissões?',
    answer:
      'Não. O site é apenas a página institucional do LiveReczz. Toda a operação acontece pelo bot.',
  },
  {
    question: 'Como começo a utilizar?',
    answer:
      'Basta acessar o bot oficial e seguir as instruções apresentadas por ele.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Tudo o que você precisa saber sobre o funcionamento do LiveReczz.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${idx}`;
            const buttonId = `faq-question-${idx}`;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-[#14141b] border-purple-500/35'
                    : 'bg-[#111116] border-white/[0.07] hover:border-white/[0.14]'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-2xl"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-purple-600/20 text-purple-300 rotate-180'
                          : 'bg-white/[0.04] text-zinc-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 pt-0 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/[0.05]"
                  >
                    <p className="pt-3.5">{item.answer}</p>
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
