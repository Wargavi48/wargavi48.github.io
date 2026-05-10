import Header from '@/components/Header'
import { useEffect, useRef } from "react"
import CardSlider from './components/CardSlider'
import projectData from './Constant/Project'
import comicData from './Constant/Comic'
import ProjectCardSlider from './components/ProjectCardSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter, faSquareSteam, faTiktok  } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const comicRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const storedTheme = localStorage.getItem("theme")

    const applyTheme = (theme: "dark" | "light") => {
      root.classList.toggle("dark", theme === "dark")
    }

    if (storedTheme === "dark" || storedTheme === "light") {
      applyTheme(storedTheme)
      return
    }

    applyTheme(mediaQuery.matches ? "dark" : "light")

    const onSystemThemeChange = (event: MediaQueryListEvent) => {
      applyTheme(event.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", onSystemThemeChange)
    return () => mediaQuery.removeEventListener("change", onSystemThemeChange)
  }, [])

  const highlights = [
    { label: "Community Established", value: "2023" },
    { label: "Projects", value: `${projectData.length}+` },
    { label: "Community Member", value: "900+" },
    { label: "Support for JKT48V", value: "Infinity💞" },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} comicRef={comicRef} />
      <main className="flex-1 pt-20">
        <section className="section-shell relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,1,1,0.20),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(171,13,0,0.18),transparent_40%)]" />
          <div className="container relative px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <span className="tone-chip">Chill and Cozy</span>
                <h1 className="member-name-sparkle text-4xl font-black leading-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                  Wargavi48
                </h1>
                <p className="max-w-xl text-base font-medium leading-relaxed text-[var(--text-soft)] md:text-lg">
                  Community hub untuk dukung <a className="member-name-sparkle jkt48v font-semibold hover:underline" href="https://www.youtube.com/@JKT48V_Official">JKT48V</a>:
                  {" "}
                  <a className="member-name-sparkle member-kanaia font-semibold hover:underline" href="https://www.youtube.com/@KanaiaAsa-JKT48V">Kanaia Asa</a>
                  {", "}
                  <a className="member-name-sparkle member-tana font-semibold hover:underline" href="https://www.youtube.com/@TanaNona-JKT48V">Tana Nona</a>
                  {", "}
                  <a className="member-name-sparkle member-pia font-semibold hover:underline" href="https://www.youtube.com/@PiaMeraleo-JKT48V">Pia Meraleo</a>
                  {", "}
                  <a className="member-name-sparkle member-sami font-semibold hover:underline" href="https://www.youtube.com/@SamiMaono-JKT48V">Sami Maono</a>
                  {", "}
                  <a className="member-name-sparkle member-isha font-semibold hover:underline" href="https://www.youtube.com/@IshaKirana-JKT48V">Isha Kirana</a>                  
                  {" dan "}
                  <a className="member-name-sparkle member-maura font-semibold hover:underline" href="https://www.youtube.com/@MauraNilambari-JKT48V">Maura Nilambari</a>
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wargavi48.github.io/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-glow rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:translate-y-[-1px]"
                  >
                    Join Discord
                  </a>
                  <a
                    href="https://trakteer.id/wargavi48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[var(--brand)]/30 px-5 py-3 text-sm font-bold text-[var(--brand)] transition hover:bg-[var(--surface)]"
                  >
                    Support Us
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a href="https://wargavi48.github.io/discord" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--surface)] p-2.5 transition hover:-translate-y-0.5">
                    <FontAwesomeIcon icon={faDiscord} size="lg" className="text-[#5865F2]" />
                  </a>
                  <a href="https://x.com/wargavirtual48" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--surface)] p-2.5 transition hover:-translate-y-0.5">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-[var(--text)]" />
                  </a>
                  <a href="https://tiktok.com/@wargavi48" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--surface)] p-2.5 transition hover:-translate-y-0.5">
                    <FontAwesomeIcon icon={faTiktok} size="lg" className="text-[var(--text)]" />
                  </a>
                  <a href="https://store.steampowered.com/app/3037900/WGV_Dreamcatcher" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--surface)] p-2.5 transition hover:-translate-y-0.5">
                    <FontAwesomeIcon icon={faSquareSteam} size="lg" className="text-[#1b2738] dark:text-[#f8d7cd]" />
                  </a>
                  <a href="https://www.tokopedia.com/wargavi48" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--surface)] p-2.5 transition hover:-translate-y-0.5">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" className="text-[#15b11f]" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 to-transparent blur-xl" />
                <img
                  src="/heroImage.jpg"
                  width="640"
                  height="640"
                  alt="Wargavi48 Hero"
                  className="relative mx-auto aspect-square w-full max-w-[520px] rounded-2xl border border-white/35 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell panel-surface" ref={aboutRef}>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white/35 p-7 dark:border-white/10 dark:bg-black/10 md:p-10">
              <span className="tone-chip mb-4">About Wargavi48</span>
              <h2 className="mb-5 text-3xl font-black leading-tight sm:text-4xl">Komunitas penggemar JKT48 Virtual</h2>
              <p className="text-[15px] leading-8 text-[var(--text-soft)] md:text-lg">
                Kami Wargavi48, fanbase JKT48V yang saat ini beranggotakan
                {" "}
                <a className="member-name-sparkle member-kanaia font-semibold hover:underline" href="https://www.youtube.com/@KanaiaAsa-JKT48V">Kanaia Asa</a>
                { ", "}
                <a className="member-name-sparkle member-tana font-semibold hover:underline" href="https://www.youtube.com/@TanaNona-JKT48V">Tana Nona</a>
                { ", "}
                <a className="member-name-sparkle member-pia font-semibold hover:underline" href="https://www.youtube.com/@PiaMeraleo-JKT48V">Pia Meraleo</a>
                { ", "}
                <a className="member-name-sparkle member-sami font-semibold hover:underline" href="https://www.youtube.com/@SamiMaono-JKT48V">Sami Maono</a>
                { ", "}
                <a className="member-name-sparkle member-isha font-semibold hover:underline" href="https://www.youtube.com/@IshaKirana-JKT48V">Isha Kirana</a>
                { ", "}
                <a className="member-name-sparkle member-maura font-semibold hover:underline" href="https://www.youtube.com/@MauraNilambari-JKT48V">Maura Nilambari</a>.
                Nama <strong className="text-[var(--brand)]">"Wargavi48"</strong> dipilih karena kami adalah warga virtual yang mendukung "48 Virtual". Kami ingin menjadi wadah untuk
                {" "}
                <strong className="member-name-sparkle jkt48v font-semibold">penggemar JKT48 dan VTuber</strong>
                {" "}
                dengan inti yang serupa dengan fanbase JKT48 pada umumnya, agar dapat tumbuh bersama dalam satu ruang yang solid melalui Discord.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {highlights.map((item) => (
                <article key={item.label} className="panel-surface-strong brand-glow rounded-xl p-4 md:p-5">
                  <p className="text-2xl font-black text-[var(--brand)] md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-soft)]">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="section-shell panel-surface" ref={projectRef}>
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex items-end justify-between gap-3">
              <div>
                <span className="tone-chip mb-2">Featured Works</span>
                <h2 className="text-3xl font-black sm:text-4xl">Project Wargavi48</h2>
              </div>
            </div>
            <ProjectCardSlider cards={projectData} />
          </div>
        </section>

        <section id="comic" className="section-shell" ref={comicRef}>
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex items-end justify-between gap-3">
              <div>
                <span className="tone-chip mb-2">Storyline</span>
                <h2 className="text-3xl font-black sm:text-4xl">Comic Wargavi48</h2>
              </div>
            </div>
            <CardSlider cards={comicData} />
          </div>
        </section>
      </main>

      <footer className="mt-6 border-t border-black/10 py-8 dark:border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 px-4 text-sm text-[var(--text-soft)] md:flex-row md:px-6">
          <p>&copy; 2023 - {new Date().getFullYear()} Warga Virtual 48.</p>
          <p>Built by community, for community.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
