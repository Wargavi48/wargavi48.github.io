import Header from '@/components/Header'
import { useRef } from "react"
import CardSlider from './components/CardSlider'
import projectData from './Constant/Project'
import comicData from './Constant/Comic'
import ProjectCardSlider from './components/ProjectCardSlider'


function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const comicRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col min-h-[100dvh]" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} comicRef={comicRef}/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Wargavi48
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Chill and Cozy Fanbase of JKT48V (<a className="hover:text-[#8ab2ea] duration-500"  href="https://www.youtube.com/@KanaiaAsa-JKT48V">Kanaia Asa</a>, <a className="hover:text-[#843E61] duration-500" href="https://www.youtube.com/@TanaNona-JKT48V">Tana Nona</a>, <a className="hover:text-[#D1B2A4] duration-500" href="https://www.youtube.com/@PiaMeraleo-JKT48V">Pia Meraleo</a>)
                  </p>
                </div>
              </div>
              <img
                src="/heroImage.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" ref={aboutRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About Wargavi48</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl text-center">
            Kami Wargavi48, fanbase JKT48V yang saat ini beranggotakan (Kanaia asa, Tana nona dan Pia Meraleo). Nama <strong>"Wargavi48"</strong> dipilih karena kami adalah warga virtual yang memberikan dukungan untuk 48V, dan tentu saja, setiap warga memiliki "KTP" mereka sendiri.
            </p>
          </div>
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={projectRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Project Wargavi48</h2>
            <ProjectCardSlider cards={projectData}/>
          </div>
        </section>
        <section id="comic" ref={comicRef}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Comic Wargavi48</h2>
            <CardSlider cards={comicData} />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Warga Virtual 48.</p>
      </footer>
    </div>
  )
}

export default App
