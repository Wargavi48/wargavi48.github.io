interface HeaderProps {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectRef: React.RefObject<HTMLDivElement>;
    comicRef: React.RefObject<HTMLDivElement>;
  }
  
  const Header = ({ homeRef, aboutRef, projectRef, comicRef }: HeaderProps) => {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="flex items-center justify-center cursor-pointer">
          <img
            src="https://avatars.githubusercontent.com/u/161864106?s=200&v=4"
            className="w-12 h-12"
            onClick={() => scrollToRef(homeRef)}
          />
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6 justify-center items-center">
          <div
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-gray-800 dark:text-gray-100"
            onClick={() => scrollToRef(aboutRef)}
          >
            About
          </div>
          <div
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-gray-800 dark:text-gray-100"
            onClick={() => scrollToRef(projectRef)}
          >
            Projects
          </div>
          <div
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer text-gray-800 dark:text-gray-100"
            onClick={() => scrollToRef(comicRef)}
          >
            Comic
          </div>
          <a
            href="https://wargavi48.github.io/discord"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-gray-100"
          >
            Join Us
          </a>
          <button
            onClick={() => document.body.classList.toggle("dark")}
            className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-500"
          >
            <svg
              className="fill-violet-700 block dark:hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              className="fill-yellow-500 hidden dark:block"
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
      </header>
    );
  };
  
  export default Header;