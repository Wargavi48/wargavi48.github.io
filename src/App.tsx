import Header from '@/components/Header'
import { useRef } from "react"
import ProjectCard from "./components/ProjectCard"


function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col min-h-[100dvh]" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef}/>
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
                src="/placeholder.svg"
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
              We are a diverse group of artists, technologists, and visionaries working together to create innovative
              projects that inspire and engage our community. Our mission is to blend art and technology in ways that
              make our world more beautiful, interactive, and connected.
            </p>
          </div>
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={projectRef}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProjectCard imageLink="https://pbs.twimg.com/media/GD3zIuLbEAASz3Y?format=jpg&name=medium" title="#50KPiaraan" description='Project to Celebrate 50K Subscriber Pia Meraleo on Youtube.' projectLink='https://x.com/wargavirtual48/status/1746819564032397382'/>
              <ProjectCard imageLink="https://pbs.twimg.com/media/GKNJWeEbsAAXZVi?format=jpg&name=medium" title="#KaianyaUdah50k" description='Project to Celebrate 50K Subscriber Kanaia Asa on Youtube.' projectLink='https://x.com/wargavirtual48/status/1775343472830242827'/>
              <ProjectCard imageLink="https://pbs.twimg.com/media/GJKLBuhbwAAtuud?format=jpg&name=medium" title="#Ngeri50k" description='Project to Celebrate 50K Subscriber Tana Nona on Youtube.' projectLink='https://x.com/wargavirtual48/status/1770631077851467858'/>
              <ProjectCard imageLink="https://pbs.twimg.com/media/GHg02bUbMAA-xEN?format=jpg&name=medium" title="#D1scoverin9ANewOcean" description='Project to Celebrate Kanaia Asa 19th Birthday' projectLink='https://x.com/wargavirtual48/status/1763217509833187334'/>
              <ProjectCard imageLink="https://pbs.twimg.com/media/GLr_S3KbQAATVFL?format=jpg&name=medium" title="#LelanaTana" description='Project to Celebrate Tana Nona 19th Birthday' projectLink='https://x.com/wargavirtual48/status/1782018067008303498'/>
              <ProjectCard imageLink="https://pbs.twimg.com/media/GTp0hDHbUAAkc23?format=jpg&name=medium" title="#NarcissiPiammetta" description='Project to Celebrate Pia Meraleo 18th Birthday' projectLink='https://x.com/wargavirtual48/status/1817893866923552768'/>
              <ProjectCard imageLink="https://pbs.twimg.com/media/GVLktTRawAAqZCy?format=jpg&name=medium" title="WGV:Dreamcatcher" description='Project to Celebrate 1st Anniversarry JKT48V' projectLink='https://wargavirtual48.github.io/wgvdreamcatcher'/>
              
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Warga Virtual 48.</p>
      </footer>
    </div>
  )
}

export default App
