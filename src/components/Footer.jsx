import React from 'react';
import { Radio, ArrowUpRight, Mail } from 'lucide-react';

const BOT_URL = 'https://t.me/livereczz_bot';
const SUPPORT_EMAIL = 'livereczzsupport@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/[0.06]">
          <div className="md:col-span-6 space-y-4">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 text-white font-bold text-lg tracking-tight"
            >
              <span className="w-8 h-8 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Radio className="w-4 h-4" />
              </span>
              <span>
                Live<span className="text-purple-400">Reczz</span>
              </span>
            </a>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Serviço de gravação de transmissões ao vivo do TikTok e Instagram, operado exclusivamente através do bot oficial no Telegram.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-1">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>@livereczz_bot</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{SUPPORT_EMAIL}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Acesso Oficial
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Toda a operação acontece diretamente no Telegram através do bot oficial.
            </p>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white text-xs font-semibold transition-colors"
            >
              <span>Abrir no Telegram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left max-w-xl">
            Aviso legal: O LiveReczz é um serviço independente e não possui afiliação oficial, patrocínio ou vínculo com TikTok, Instagram ou Telegram.
          </p>
          <p className="shrink-0 text-zinc-400">
            © 2026 LiveReczz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
