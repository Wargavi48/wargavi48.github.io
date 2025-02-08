import Header from '@/components/Header'
import { useRef } from "react"
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

  return (
    <div className="flex flex-col min-h-[100dvh]" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} comicRef={comicRef}/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Wargavi48
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Chill and Cozy Fanbase of JKT48V (<a className="hover:text-[#8ab2ea] duration-500"  href="https://www.youtube.com/@KanaiaAsa-JKT48V">Kanaia Asa</a>, <a className="hover:text-[#843E61] duration-500" href="https://www.youtube.com/@TanaNona-JKT48V">Tana Nona</a>, <a className="hover:text-[#D1B2A4] duration-500" href="https://www.youtube.com/@PiaMeraleo-JKT48V">Pia Meraleo</a>)
                </p>
                <div className="flex gap-2 items-center">
                  <a href="https://wargavi48.github.io/discord" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} size="lg" className="text-[#5865F2]" />
                  </a>
                  <a href="https://x.com/wargavirtual48" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-black" />
                  </a>
                  <a href='https://tiktok.com/@wargavi48' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faTiktok} size='lg' className='text-black' />
                  </a>
                  <a href="https://store.steampowered.com/app/3037900/WGV_Dreamcatcher" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareSteam} size="lg" className="text-[#1b2738]" />
                  </a>
                  <a href="https://www.tokopedia.com/wargavi48" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" className="text-[#15b11f]" />
                  </a>
                </div>
                <div>
                  <a href="https://trakteer.id/wargavi48" target="_blank"><img id="wse-buttons-preview" src="https://edge-cdn.trakteer.id/images/embed/trbtn-red-1.png?v=24-01-2025" style={{border: 0, height: 40}} alt="Trakteer Saya"/></a>
                </div>
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
            Kami Wargavi48, fanbase JKT48V yang saat ini beranggotakan (Kanaia asa, Tana nona dan Pia Meraleo). Nama <strong>"Wargavi48"</strong> dipilih karena kami adalah warga virtual yang memberikan dukungan untuk 48V, dan tentu saja, setiap warga memiliki "KTP" mereka sendiri. Kami ingin menjadi wadah yang bersatu bagi semua kalangan, termasuk <strong>penggemar JKT48 dan penggemar VTuber</strong>, untuk bersama-sama mendukung JKT48V. Fanbase ini akan menggunakan platform Discord sebagai tempat berkumpulnya para penggemar, mirip dengan konsep Fancord VTuber. Dengan inti yang serupa dengan fanbase JKT48 pada umumnya, tujuan utamanya adalah membangun komunitas yang solid dan berdedikasi dalam mendukung perjalanan JKT48V.
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
