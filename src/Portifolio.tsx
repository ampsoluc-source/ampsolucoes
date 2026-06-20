import { useState, useEffect, useCallback } from 'react';

type Category = 'industrial' | 'residencial';

interface PortfolioItem {
  title: string;
  desc: string;
  img: string;
  category: Category;
  badge: string;
}

const items: PortfolioItem[] = [
  // ── INDUSTRIAL ──────────────────────────────────────────────────────────────
  {
    category: 'industrial',
    badge: 'Automação',
    title: 'Automação e Painéis de Comando',
    desc: 'Montagem e parametrização de painéis de automação industrial utilizando Soft-Starters WEG (Série SSW07) e inversores de frequência para controle preciso de motores.',
    img: 'painelar.jpg',
  },
  {
    category: 'industrial',
    badge: 'Maquinário',
    title: 'Manutenção de Maquinário Pesado',
    desc: 'Assistência técnica especializada, manutenção preventiva e corretiva em tornos mecânicos Nardini, fresadoras e equipamentos de usinagem industrial.',
    img: 'revisaomotor.jpg',
  },
  {
    category: 'industrial',
    badge: 'Infraestrutura',
    title: 'Infraestrutura e Montagem de Painéis',
    desc: 'Reforma interna de painéis elétricos, substituição de contatores de potência, organização de barramentos e adequação às normas de segurança.',
    img: 'paineltorno.jpg',
  },

  // ── RESIDENCIAL ──────────────────────────────────────────────────────────────
  {
    category: 'residencial',
    badge: 'Padrão Elektro',
    title: 'Padrão de Entrada de Energia (Homologado)',
    desc: 'Instalação e manutenção de padrão de entrada de energia (padrão de medição Elektro), com disjuntor de proteção geral e caixas em conformidade com as normas da concessionária.',
    img: '/padraoentrada.jpg',
  },
  {
    category: 'residencial',
    badge: 'QDC',
    title: 'Montagem de Quadro de Distribuição (QDC)',
    desc: 'Montagem de painel de distribuição residencial utilizando componentes de proteção modernos, incluindo Dispositivos DR (IDR Tramontina/Steck) para proteção contra choques elétricos e disjuntores DIN térmicos e magnéticos.',
    img: '/quadrodr.jpg',
  },
  {
    category: 'residencial',
    badge: 'NBR 5410',
    title: 'Infraestrutura e Cabeamento Estruturado',
    desc: 'Passagem de fios e cabos elétricos seguindo estritamente o padrão de cores da norma NBR 5410 (Fase, Neutro e Terra), garantindo conexões seguras em caixas de passagem.',
    img: '/tomadacorreta.jpg',
  },
  {
    category: 'residencial',
    badge: 'Tomadas TUE',
    title: 'Instalação de Tomadas Especializadas e Acabamentos',
    desc: 'Instalação de tomadas de uso específico (TUE) de 20A para equipamentos de alta potência e substituição de conjuntos de interruptores com acabamento de alto padrão (Linha MarGirius).',
    img: '/tomadaseca.jpg',
  },
  {
    category: 'residencial',
    badge: 'Luminotécnica',
    title: 'Projetos de Iluminação Residencial e LED',
    desc: 'Execução de projetos luminotécnicos com instalação de spots embutidos de LED em rebaixamento de gesso, criando efeitos de iluminação cênica e valorização de ambientes.',
    img: '/f7c5dbf6-f3ae-455c-8ea8-4e44d8ed7134.jpeg',
  },
  {
    category: 'residencial',
    badge: 'Segurança',
    title: 'Segurança Eletrônica e Perimetral',
    desc: 'Instalação de sistemas de proteção perimetral com cerca elétrica residencial de alta confiabilidade, hastes de isolamento industrial e central de choque integrada para máxima segurança.',
    img: '/cerca.png',
  },
];

const TAB_LABELS: { id: Category; label: string; count: number }[] = [
  { id: 'industrial', label: 'Industrial', count: items.filter((i) => i.category === 'industrial').length },
  { id: 'residencial', label: 'Residencial', count: items.filter((i) => i.category === 'residencial').length },
];

interface LightboxProps {
  item: PortfolioItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  index: number;
  total: number;
}

function Lightbox({ item, onClose, onPrev, onNext, index, total }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Container */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 max-h-[70vh]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh] bg-[#06111e]"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {item.badge}
            </span>
          </div>
        </div>

        {/* Caption + nav */}
        <div className="w-full flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            aria-label="Anterior"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1a9caa]/40 flex items-center justify-center transition shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center flex-1">
            <h3 className="text-white font-bold text-lg leading-snug">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{index + 1} / {total}</p>
          </div>

          <button
            onClick={onNext}
            aria-label="Próximo"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1a9caa]/40 flex items-center justify-center transition shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('industrial');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = items.filter((i) => i.category === activeTab);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-[#0d2847] to-[#0a1929] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_60%,_#1a9caa,_transparent_55%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#1a9caa] font-bold text-sm uppercase tracking-widest mb-3">Nosso Trabalho</p>
          <h2 className="text-4xl md:text-5xl font-black mb-3">Portfólio de Serviços</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#1a9caa] to-[#d4af37] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Projetos executados com precisão técnica, segurança e excelência para residências, comércios e indústrias.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#06111e] border border-[#1a9caa]/20 rounded-xl p-1.5 gap-1">
            {TAB_LABELS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setLightboxIndex(null); }}
                  className={`relative flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-br from-[#0d3a6e] to-[#0a2a54] text-white shadow-lg shadow-[#1a9caa]/20 border border-[#1a9caa]/30'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab.id === 'industrial' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${active ? 'text-[#d4af37]' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${active ? 'text-[#d4af37]' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  <span className="uppercase tracking-wide">{tab.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${active ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'bg-white/5 text-gray-600'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div
          key={activeTab}
          className={`grid gap-6 ${
            filtered.length === 3
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filtered.map((item, idx) => (
            <article
              key={item.title}
              className="group relative bg-[#06111e] border border-[#1a9caa]/15 hover:border-[#1a9caa]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#1a9caa]/10 cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111e] via-[#06111e]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/90 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-2-2v4m-2-2h4" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#d4af37] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {item.badge}
                  </span>
                </div>

                {/* Category chip */}
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                    item.category === 'industrial'
                      ? 'bg-[#0d2847]/80 border-[#1a9caa]/40 text-[#1a9caa]'
                      : 'bg-[#0a1929]/80 border-[#d4af37]/30 text-[#d4af37]'
                  }`}>
                    {item.category === 'industrial' ? 'Industrial' : 'Residencial'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-7 h-7 bg-[#1a9caa]/10 border border-[#1a9caa]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1a9caa]/20 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#1a9caa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#1a9caa] to-[#d4af37] transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]}
          index={lightboxIndex}
          total={filtered.length}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
