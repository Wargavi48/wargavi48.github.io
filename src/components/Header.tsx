
interface HeaderProps {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectRef: React.RefObject<HTMLDivElement>;
  }

const Header = ({ homeRef, aboutRef, projectRef }: HeaderProps) => {
  
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center fixed w-screen bg-white">
            <div className="flex items-center justify-center cursor-pointer">
                <img src="https://avatars.githubusercontent.com/u/161864106?s=200&v=4" className="w-12 h-12" onClick={() => scrollToRef(homeRef)}/>
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={() => scrollToRef(aboutRef)}>
                    About
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={() => scrollToRef(projectRef)}>
                    Projects
                </div>
                <a href="https://wargavi48.github.io/discord" className="text-sm font-medium hover:underline underline-offset-4">
                    Join Us
                </a>
            </nav>
      </header>
    )
  }
  
  export default Header
  