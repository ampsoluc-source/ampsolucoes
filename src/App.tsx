import Portfolio from './Portifolio.tsx';

export default function AMPLandingPage() {
  const whatsappLink = 'https://wa.me/5519996428354?text=Olá,%20preciso%20de%20um%20eletricista';

  const services = [
    {
      icon: '⚡',
      title: 'Instalações Elétricas',
      desc: 'Instalações elétricas completas e seguras para sua casa.',
    },
    {
      icon: '🏢',
      title: 'Manutenção Preventiva',
      desc: 'Manutenção preventiva e corretiva para comércios e residências. Evite paradas repentinas e proteja seus equipamentos elétricos.',
    },
    {
      icon: '⚙️',
      title: 'Soluções Completas',
      desc: 'Infraestrutura elétrica comercial e industrial: Montagem de quadros de comando, balanceamento de fases, adequação de circuitos e troca de fiação.',
    },
    {
      icon: '📅',
      title: 'Atendimentos Agendados',
      desc: 'Serviços programados com horário marcado para sua conveniência.',
    },
  ];

  const differentials = [
    'Atendimento rápido e eficiente',
    'Profissionais qualificados',
    'Serviços com garantia',
    'Segurança em todas as instalações',
    'Soluções personalizadas para você',
  ];

  return (
    <div className="bg-[#0a1929] text-white min-h-screen font-sans scroll-smooth">
      {/* Circuit pattern background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(22, 147, 165, 0.05) 25%, rgba(22, 147, 165, 0.05) 26%, transparent 27%, transparent 74%, rgba(22, 147, 165, 0.05) 75%, rgba(22, 147, 165, 0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(22, 147, 165, 0.05) 25%, rgba(22, 147, 165, 0.05) 26%, transparent 27%, transparent 74%, rgba(22, 147, 165, 0.05) 75%, rgba(22, 147, 165, 0.05) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#b8941d] rounded-lg" />
              <div className="absolute inset-0.5 bg-[#0a1929] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth={2.5} className="w-5 h-5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-black text-white text-sm">AMP</div>
              <div className="text-xs text-gray-500">Soluções Elétricas</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-xs font-semibold text-gray-400 hover:text-[#d4af37] transition uppercase tracking-wide">INÍCIO</a>
            <a href="#servicos" className="text-xs font-semibold text-gray-400 hover:text-[#d4af37] transition uppercase tracking-wide">SERVIÇOS</a>
            <a href="#sobre" className="text-xs font-semibold text-gray-400 hover:text-[#d4af37] transition uppercase tracking-wide">QUEM SOMOS</a>
            <a href="#portfolio" className="text-xs font-semibold text-gray-400 hover:text-[#d4af37] transition uppercase tracking-wide">PORTFÓLIO</a>
            <a href="#contato" className="text-xs font-semibold text-gray-400 hover:text-[#d4af37] transition uppercase tracking-wide">CONTATO</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a9caa] hover:bg-[#148a97] active:scale-95 transition-all duration-200 text-white px-5 py-2 rounded-lg font-bold text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.085-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.826 9.826 0 0 1-5.021-1.378l-.36-.213-3.724.896.912-3.633-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative bg-gradient-to-b from-[#0a1929] via-[#0d2847] to-[#0a1929] min-h-screen flex items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_#1a9caa,_transparent_60%)]" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="mb-8 space-y-4">
              <p className="text-[#1a9caa] font-bold text-sm uppercase tracking-widest">Soluções Elétricas Profissionais</p>
              <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black leading-tight">
                Eletricista
                <br />
                <span className="text-[#d4af37]">Profissional</span>
                <br />
                em Rio Claro
              </h1>
            </div>

            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              Atendimento rápido, seguro e com garantia. Soluções completas para sua casa, comércio e indústria.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: '⚡', text: 'Atendimento de Urgência' },
                { icon: '✓', text: 'Serviços com Garantia' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-[#1a9caa]/30 backdrop-blur-sm rounded-lg px-4 py-2.5">
                  <span className="text-[#1a9caa] font-bold">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#c7972c] active:scale-95 transition-all duration-200 text-black px-7 py-4 rounded-lg font-bold shadow-lg shadow-[#d4af37]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.085-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.826 9.826 0 0 1-5.021-1.378l-.36-.213-3.724.896.912-3.633-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                SOLICITAR ORÇAMENTO
              </a>

              <a
                href="#servicos"
                className="flex items-center gap-2 border-2 border-[#1a9caa] hover:bg-[#1a9caa]/10 active:scale-95 transition-all duration-200 text-[#1a9caa] px-7 py-4 rounded-lg font-bold"
              >
                VER SERVIÇOS
              </a>
            </div>
          </div>

          <div className="hidden lg:flex relative h-[600px] items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a9caa]/20 to-[#d4af37]/10 rounded-2xl blur-3xl" />
            <img
              src="foto.png"
              alt="Painel elétrico profissional"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-[#1a9caa]/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/80 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6 bg-[#0a1929] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-3">Nossos Serviços</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#1a9caa] to-[#d4af37] mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oferecemos soluções elétricas completas com qualidade e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-[#0d2847]/60 to-[#0a1929] border border-[#1a9caa]/20 hover:border-[#1a9caa]/50 rounded-xl p-8 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a9caa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#1a9caa]/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#1a9caa]/10 transition-all" />
                <div className="relative">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#d4af37] transition">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE - DIFERENCIAIS */}
      <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-[#0d2847] to-[#0a1929]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-3">Por que escolher a AMP?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#1a9caa] to-[#d4af37] mb-8" />

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Profissionais qualificados, atendimento rápido e soluções personalizadas para seus serviços elétricos com qualidade, responsabilidade e segurança.
            </p>

            <div className="space-y-4">
              {differentials.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1a9caa]/20 border border-[#1a9caa]/40 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1a9caa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-200 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a9caa]/15 to-[#d4af37]/10 rounded-2xl blur-3xl" />
            <img
              src="amp.png"
              alt="Profissional de elétrica"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-[#1a9caa]/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/80 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CONTRATOS DE MANUTENÇÃO */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a1929] to-[#0d2847] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,_#d4af37,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#0d2847] to-[#0a1929] border border-[#d4af37]/30 rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1a9caa]/10 rounded-full blur-3xl -ml-24 -mb-24" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#d4af37]/20 border border-[#d4af37]/40 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6M5 7h14M5 7a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2M5 7l1.5-3h11L19 7" />
                  </svg>
                </div>
                <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest">Para Empresas</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Contratos de Manutenção Mensal para Empresas</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-3xl">
                Mantenha o seu negócio sempre energizado e seguro. Oferecemos contratos de manutenção mensal personalizados para comércios, clínicas e pequenas empresas.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Visitas preventivas programadas para evitar panes elétricas.',
                  'Reaperto de quadros residenciais/comerciais e análise de circuitos.',
                  'Atendimento de urgência prioritário para comércios parceiros.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d4af37]/20 border border-[#d4af37]/40 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c7972c] active:scale-95 transition-all duration-200 text-black px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-[#d4af37]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.085-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.826 9.826 0 0 1-5.021-1.378l-.36-.213-3.724.896.912-3.633-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                Solicitar Proposta para Empresa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />

      {/* CTA */}
      <section id="contato" className="py-24 px-6 bg-[#0a1929]">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0d2847] to-[#0a1929] border border-[#1a9caa]/30 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#1a9caa]/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Precisando de Eletricista Agora?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Fale com a AMP Soluções Elétricas no WhatsApp e solicite seu orçamento.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c7972c] active:scale-95 transition-all duration-200 text-black px-8 py-5 rounded-lg font-bold text-lg shadow-lg shadow-[#d4af37]/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.085-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.826 9.826 0 0 1-5.021-1.378l-.36-.213-3.724.896.912-3.633-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-[#1a9caa]/20 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#b8941d] rounded-lg" />
                <div className="absolute inset-0.5 bg-black rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth={2.5} className="w-3.5 h-3.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-black text-white text-xs">AMP</div>
                <div className="text-xs text-gray-500">Soluções Elétricas</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Serviços elétricos com qualidade, responsabilidade e segurança para sua casa, comércio ou empresa.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-[#1a9caa] transition">Início</a></li>
              <li><a href="#servicos" className="hover:text-[#1a9caa] transition">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-[#1a9caa] transition">Quem Somos</a></li>
              <li><a href="#portfolio" className="hover:text-[#1a9caa] transition">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-[#1a9caa] transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">Atendimento</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-[#1a9caa]">📞</span>
                <a href="tel:+5519996428354" className="hover:text-[#1a9caa] transition">(19) 99642-8354</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#1a9caa]">📍</span>
                <span>Rio Claro e região</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#1a9caa]">⚡</span>
                <span>Urgência 24h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">Conecte-se</h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1a9caa] hover:bg-[#148a97] transition text-white px-4 py-2.5 rounded-lg font-bold text-sm w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .61.61l6.085-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.826 9.826 0 0 1-5.021-1.378l-.36-.213-3.724.896.912-3.633-.234-.373A9.816 9.816 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-[#1a9caa]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2024 AMP Soluções Elétricas. Todos os direitos reservados.</p>
          <p>Rio Claro • Limeira • Araras • Piracicaba</p>
        </div>
      </footer>
    </div>
  );
}
