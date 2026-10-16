import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const telegram = 'https://t.me/bc_sm1le'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-x-clip bg-[#11110f] text-[#efeee9] selection:bg-[#efeee9] selection:text-[#11110f]">
      <section id="home" className="hero relative h-[100dvh] min-h-[680px] w-full overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 z-[1]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_54%_48%,#292925_0%,#191917_39%,#11110f_78%)]" />
        <div className="ambient-orb pointer-events-none absolute left-1/2 top-[48%] z-[2] h-[min(56vw,72vh)] w-[min(56vw,72vh)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" aria-hidden="true">
          <div className="orb-core absolute inset-[8%] rounded-full border border-white/[0.06]" />
          <div className="orb-highlight absolute inset-[17%] rounded-full" />
          <span className="orbit-dot absolute left-[13%] top-[20%] h-2 w-2 rounded-full bg-[#efeee9]" />
        </div>

        <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
          <a href="#home" className="fade-in text-[15px] font-medium tracking-[0.04em] sm:text-lg">СЯ<span className="ml-2 text-white/35">/</span></a>
          <nav className="hidden items-start gap-12 text-[12px] tracking-[0.06em] sm:flex lg:gap-16">
            <a className="link-hover" href="#services">УСЛУГИ</a>
            <a className="link-hover" href="#approach">ПОДХОД</a>
            <a className="link-hover flex items-center gap-1" href="#contact">КОНТАКТ <ArrowUpRight size={13} strokeWidth={1.5} /></a>
          </nav>
          <button aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setMenuOpen((open) => !open)} className="relative z-[60] grid h-10 w-10 place-items-center sm:hidden">
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </header>

        <div className="name-band absolute inset-x-0 top-[23vh] z-10 overflow-hidden sm:top-[19vh]" aria-label="Салиев Яхёбек">
          <div className="marquee-track flex w-max whitespace-nowrap font-medium leading-[0.85] tracking-[-0.075em] text-[#efeee9]">
            <span className="pr-[6vw]">Салиев Яхёбек<span className="text-white/35"> — </span></span>
            <span className="pr-[6vw]" aria-hidden="true">Салиев Яхёбек<span className="text-white/35"> — </span></span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[17vh] z-20 flex items-end justify-between px-6 sm:bottom-[18vh] sm:px-10">
          <div className="intro max-w-[560px]">
            <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/50 sm:text-xs"><span className="h-px w-8 bg-[#efeee9]/60" />Разработка цифровых продуктов</p>
            <h1 className="text-[clamp(2.6rem,7vw,6.4rem)] font-normal leading-[0.94] tracking-[-0.065em]">Full Stack<br /><span className="text-white/45">Developer</span></h1>
            <a href="#services" className="link-hover mt-7 inline-flex items-center gap-2 border-b border-white/35 pb-2 text-sm sm:mt-9 sm:text-base">Чем могу помочь <ArrowDown size={15} strokeWidth={1.5} /></a>
          </div>
          <div className="mb-1 hidden max-w-[190px] text-right text-sm leading-6 text-white/55 sm:block">
            <span className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-white/35">На связи из</span>
            Ош, Кыргызстан
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-[5.5rem] z-10 h-px origin-left bg-[#efeee9]/70 sm:inset-x-10 sm:bottom-28" />
        <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 text-[11px] leading-relaxed text-white/55 sm:px-10 sm:pb-8 sm:text-sm">
          <div>Салиев Яхёбек<br />Full Stack Developer</div>
          <div className="text-right"><span className="text-white/35">ОШ · КЫРГЫЗСТАН</span><br /><a className="link-hover text-[#efeee9]" href={telegram} target="_blank" rel="noreferrer">@bc_sm1le ↗</a></div>
        </footer>
      </section>

      <section id="services" className="section-wrap border-t border-white/10">
        <div className="section-kicker">01 / ЧТО Я ДЕЛАЮ</div>
        <div className="services-heading">
          <h2>От идеи<br /><span className="text-white/40">до запуска.</span></h2>
          <p>Помогаю превратить задачу в понятный и удобный цифровой продукт — от интерфейса до серверной логики.</p>
        </div>
        <div className="service-list">
          <article className="service-row"><span className="service-number">01</span><h3>Веб-сайты</h3><p>Лендинги и сайты, которые ясно рассказывают о продукте и ведут посетителя к следующему шагу.</p><ArrowUpRight className="service-arrow" size={20} strokeWidth={1.3} /></article>
          <article className="service-row"><span className="service-number">02</span><h3>Веб-приложения</h3><p>Интерфейсы для сервисов и внутренних инструментов с продуманными сценариями использования.</p><ArrowUpRight className="service-arrow" size={20} strokeWidth={1.3} /></article>
          <article className="service-row"><span className="service-number">03</span><h3>Backend и API</h3><p>Серверная часть, интеграции и API, которые связывают продукт в единую систему.</p><ArrowUpRight className="service-arrow" size={20} strokeWidth={1.3} /></article>
        </div>
      </section>

      <section id="approach" className="approach-section">
        <div className="section-wrap approach-inner">
          <div className="section-kicker">02 / ПОДХОД</div>
          <div className="approach-content">
            <h2>Хорошая разработка<br /><span className="text-white/40">начинается с ясности.</span></h2>
            <p className="approach-lead">Сначала разбираюсь в задаче, затем предлагаю решение и согласую ожидания. Так работа движется прозрачно, а результат остаётся понятным.</p>
            <div className="steps-grid">
              <div className="step"><span>01</span><h3>Обсуждаем</h3><p>Цель, аудиторию, сроки и то, как поймём, что всё получилось.</p></div>
              <div className="step"><span>02</span><h3>Планируем</h3><p>Делю работу на этапы и заранее обозначаю объём и приоритеты.</p></div>
              <div className="step"><span>03</span><h3>Создаём</h3><p>Показываю прогресс, собираю обратную связь и довожу детали.</p></div>
              <div className="step"><span>04</span><h3>Запускаем</h3><p>Подготавливаю проект к публикации и передаю результат.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <div className="section-kicker">03 / СВЯЗЬ</div>
        <div className="contact-content">
          <p className="contact-note">Есть задача или идея?</p>
          <h2>Давайте<br /><span className="text-white/40">обсудим.</span></h2>
          <a href={telegram} target="_blank" rel="noreferrer" className="contact-link">Написать в Telegram <ArrowUpRight size={19} strokeWidth={1.4} /></a>
          <p className="contact-handle">@bc_sm1le · Ош, Кыргызстан</p>
        </div>
      </section>

      <footer className="site-footer"><span>Салиев Яхёбек</span><span>Full Stack Developer · Ош, Кыргызстан</span><a href="#home">Наверх ↑</a></footer>

      <div className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={closeMenu} aria-hidden="true" />
      <aside className={`fixed inset-y-0 right-0 z-[55] flex w-[82%] max-w-sm flex-col justify-between bg-[#171715] px-8 py-10 transition-transform duration-500 sm:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-16">
          <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/40">Салиев Яхёбек</p>
          <nav className="mobile-nav"><a href="#services" onClick={closeMenu}>Услуги</a><a href="#approach" onClick={closeMenu}>Подход</a><a href="#contact" onClick={closeMenu}>Контакт</a></nav>
        </div>
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/40">Ош, Кыргызстан</p>
          <a href={telegram} target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-sm">Написать в Telegram <ArrowUpRight size={17} /></a>
        </div>
      </aside>
    </main>
  )
}

export default App
