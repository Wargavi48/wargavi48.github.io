interface HeaderProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  webAppsRef: React.RefObject<HTMLDivElement>;
  comicRef: React.RefObject<HTMLDivElement>;
}

const Header = ({ homeRef, aboutRef, projectRef, webAppsRef, comicRef }: HeaderProps) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };
  
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-5">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center rounded-2xl border border-white/25 bg-white/80 px-4 text-sm backdrop-blur-md dark:border-white/10 dark:bg-[#251f27]/85 md:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToRef(homeRef)}
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-white dark:border-white/10 dark:bg-[#332b34]"
          >
            <img
              src="https://avatars.githubusercontent.com/u/161864106?s=200&v=4"
              className="h-9 w-9"
              alt="Wargavi48 logo"
            />
          </button>
          <button onClick={() => scrollToRef(homeRef)} className="text-left">
            <p className="text-base font-bold leading-none">Wargavi48</p>
            <p className="text-[11px] font-medium text-[#7c6774] dark:text-[#d8c0c7]">Community Hub</p>
          </button>
        </div>

        <nav className="ml-auto flex items-center gap-1.5 md:gap-2">
          <button
            className="rounded-lg px-2.5 py-2 font-semibold text-[#5d4e58] transition hover:bg-white/70 dark:text-[#e5d5db] dark:hover:bg-white/10 md:px-3"
            onClick={() => scrollToRef(aboutRef)}
          >
            About
          </button>
          <button
            className="rounded-lg px-2.5 py-2 font-semibold text-[#5d4e58] transition hover:bg-white/70 dark:text-[#e5d5db] dark:hover:bg-white/10 md:px-3"
            onClick={() => scrollToRef(projectRef)}
          >
            Projects
          </button>
          <button
            className="rounded-lg px-2.5 py-2 font-semibold text-[#5d4e58] transition hover:bg-white/70 dark:text-[#e5d5db] dark:hover:bg-white/10 md:px-3"
            onClick={() => scrollToRef(comicRef)}
          >
            Comics
          </button>          
          <button
            className="rounded-lg px-2.5 py-2 font-semibold text-[#5d4e58] transition hover:bg-white/70 dark:text-[#e5d5db] dark:hover:bg-white/10 md:px-3"
            onClick={() => scrollToRef(webAppsRef)}
          >
            Apps
          </button>
          <a
            href="https://wargavi48.github.io/discord"
            className="hidden rounded-lg bg-[#ab0d00] px-3 py-2 font-semibold text-white transition hover:bg-[#8b0900] dark:bg-[#ff5f4f] dark:text-[#1d1111] dark:hover:bg-[#ff7163] md:inline-flex"
          >
            Join Us
          </a>
          <button
            onClick={toggleTheme}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg border border-black/5 bg-white/70 transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
            aria-label="Toggle theme"
          >
            <svg
              className="block fill-[#ab0d00] dark:hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              className="hidden fill-[#ff5f4f] dark:block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
