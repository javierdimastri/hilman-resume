import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';
import NextIcon from '../../icons/next-dark.svg';

const scrollTo = (element: any) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default function Home({ }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState();
  const [scrolling, setScrolling] = useState(false);
  
  const homeRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);
  const blogRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const myWorkRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="bg-darker transition-all duration-150 ease-in-out">
      <div className={'relative w-full dark:bg-darker bg-light bg-opacity-10 overflow-auto min-h-screen transition-all duration-150 ease-in-out overflow-hidden'}>
        <Head>
          <title>Mohammed Hilman Trihatmojo | Fullstack Web Developer</title>
          <meta name="description" content="The portfolio of fullstack web developer, Mohammed Hilman Trihatmojo"
          />
          <link rel="icon" href="/browser-title.ico" />
        </Head>

        {/* Full-screen Menu */}
        {/* <div
                className={`fixed w-full z-50 h-screen pt-24 bg-white dark:bg-darker bg-opacity-100 transform delay-100 transition-all duration-150 ${
                    navbarOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full"
                }`}
                >
                    <div className="container relative mx-auto">
                        <div className="container relative mx-auto">
                        <nav className="block ml-auto">
                        <ul className="z-50 flex flex-col items-start">
                            <li className="z-50 block py-2 list-none lg:inline-block">
                            <button
                                className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                visibleSection === "home"
                                    ? "selected delay-200"
                                    : "dark:text-light dark:hover:text-white text-mid hover:text-mid border-b-2 border-transparent"
                                }`}
                                onClick={() => {
                                setNavbarOpen(false);
                                scrollTo(homeRef.current);
                                }}
                            >
                                Home
                            </button>
                            </li>
                            <li className="z-50 block py-2 list-none lg:inline-block">
                            <button
                                className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                visibleSection === "about"
                                    ? "current"
                                    : "dark:text-light dark:hover:text-white text-mid hover:text-mid border-b-2 border-transparent"
                                }`}
                                onClick={() => {
                                setNavbarOpen(false);
                                scrollTo(aboutRef.current);
                                }}
                            >
                                About
                            </button>
                            </li>
                            <li className="z-50 block py-2 list-none lg:inline-block">
                            <button
                                className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                visibleSection === "skills"
                                    ? "current"
                                    : "dark:text-light dark:hover:text-white text-mid hover:text-mid border-b-2 border-transparent"
                                }`}
                                onClick={() => {
                                setNavbarOpen(false);
                                scrollTo(skillsRef.current);
                                }}
                            >
                                Skills
                            </button>
                            </li>
                            <li className="z-50 block py-2 list-none lg:inline-block">
                            <button
                                className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                visibleSection === "my-work"
                                    ? "current"
                                    : "dark:text-light dark:hover:text-white text-mid  hover:text-mid border-b-2 border-transparent"
                                }`}
                                onClick={() => {
                                setNavbarOpen(false);
                                scrollTo(myWorkRef.current);
                                }}
                            >
                                My Work
                            </button>
                            </li>
                            <li className="z-50 block py-2 list-none lg:inline-block">
                            <button
                                rel="noreferrer"
                                className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                visibleSection === "blog"
                                    ? "current"
                                    : "dark:text-light dark:hover:text-white text-mid hover:text-mid border-b-2 border-transparent"
                                }`}
                                onClick={() => {
                                setNavbarOpen(false);
                                scrollTo(blogRef.current);
                                }}
                            >
                                Blog
                            </button>
                            </li>
                            <li className="z-50 block py-2 list-none lg:inline-block">
                            <button
                                className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                visibleSection === "contact"
                                    ? "current"
                                    : "dark:text-light dark:hover:text-white text-mid hover:text-mid border-b-2 border-transparent"
                                }`}
                                onClick={() => {
                                setNavbarOpen(false);
                                scrollTo(contactRef.current);
                                }}
                            >
                                Contact
                            </button>
                            </li>
                            <li className="z-40 block py-2 mt-6 list-none lg:inline-block">
                            <a
                                href={`mailto:danielcranney@gmail.com`}
                                className="text-lg btn-brand btn-lg group"
                            >
                                Get in touch
                            </a>
                            </li>
                        </ul>
                        </nav>
                        </div>
                    </div>
                </div>                 */}

        {/* Header and Nav */}
        <header
          ref={headerRef}
          className={'header top-0 mx-auto flex items-center z-50 fixed w-full transition-all duration-150 h-20 ease-in-out dark:bg-darker'}
        >
          {/* Logo and Nav container */}
          <div className="container relative flex items-center mx-auto">
            {/* Logo */}
            <div className="z-50 sm:w-10 sm:h-10 w-11 h-11 flex items-center">
              <NewIcon />
            </div>
            {/* Text */}
            <div className="flex items-center ml-4">
              <p className="text-lg mb-0 text-main">
                            Mohammed Hilman Trihatmojo
              </p>
            </div>
            {/* Nav */}
            <nav className="block ml-auto h-full">
              <ul className="z-50 flex items-center">
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`nav-item ${
                      visibleSection === 'home' ? 'current' : 'active'
                    }`}
                    onClick={() => {
                      scrollTo(homeRef.current);
                    }}
                  >
                                Home
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                    className={`nav-item ${
                      visibleSection === 'about' ? 'current' : 'active'
                    }`}
                    onClick={() => {
                      scrollTo(aboutRef.current);
                    }}
                  >
                                About
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                                
                    className={`nav-item ${
                      visibleSection === 'skills' ? 'current' : 'active'
                    }`}
                    onClick={() => {
                      scrollTo(skillsRef.current);
                    }}
                  >
                                Skills
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                                
                    className={`nav-item ${
                      visibleSection === 'my-work' ? 'current' : 'active'
                    }`}
                    onClick={() => {
                      scrollTo(myWorkRef.current);
                    }}
                  >
                                My Work
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button                            
                    rel="noreferrer"
                    className={`nav-item ${
                      visibleSection === 'blog' ? 'current' : 'active'
                    }`}
                    onClick={() => {
                      scrollTo(blogRef.current);
                    }}
                  >
                                Blog
                  </button>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <button
                                
                    className={`nav-item ${
                      visibleSection === 'contact' ? 'current' : 'active'
                    }`}
                    onClick={() => {
                      scrollTo(contactRef.current);
                    }}
                  >
                                Contact
                  </button>
                </li>
                <li className="z-50 hidden ml-5 list-none lg:inline-block">
                  <a
                    href={'mailto:hilmantrihatmojo@gmail.com'}
                    className="btn-brand btn-md group"
                  >
                                Hire me
                  </a>
                </li>
                <li className="z-50 inline-block list-none lg:hidden group">
                  <button
                    className={`relative w-10 h-10 ${
                      navbarOpen
                        ? 'dark:text-white text-dark'
                        : 'text-mid group-hover:text-dark dark:opacity-50 dark:group-hover:opacity-100 dark:text-white dark:group-hover:text-white'
                    } focus:outline-none`}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? 'rotate-45' : '-translate-y-1.5'
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? '-rotate-45' : 'translate-y-1.5'
                        }`}
                      ></span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex mt-auto ml-0 lg:ml-5">
              {/* Dark mode */}
              {/* <button
                            className="flex items-center justify-center w-7 h-12 transition-all duration-150 ease-in rounded-sm focus:outline-none group bg-transparent outline-none"
                            onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                            }}
                        >
                            {renderThemeChanger()}
                        </button> */}
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="container relative z-30 mx-auto">
          {/* Hero Content */}
          <main className={'flex-col flex h-screen'} id="home" ref={homeRef}>
            {/* Main */}
            <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
              <div className="w-full">
                {/* <span className="text-2xl font-semibold text-blue">
                            Hello! My name is
                            </span> */}
                <h1 className="mb-2 text-5xl md:text-7xl dark:text-main text-dark">
                            Mohammed Hilman Trihatmojo
                </h1>
                <h2 className="mb-4 text-3xl md:text-4xl dark:text-light text-mid">
                  <ReactTypingEffect
                    typingDelay={200}
                    speed={30}
                    eraseSpeed={30}
                    eraseDelay={1500}
                    text={[
                      'Fullstack Web Developer',
                      'RTC web developer',                         
                      'Happy Dad'
                    ]}
                  />
                </h2>
                <p className="w-4/5 text-xl md:w-full">
                            I build websites that look good and work well.
                </p>
                <button
                  className="mt-4 btn-brand btn-lg group"
                  onClick={() => {
                    scrollTo(myWorkRef.current);
                  }}
                >
                            See my Work
                </button>
              </div>
            </div>
          </main>

          {/* About */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="about"
            ref={aboutRef}
          >
            <div className="flex flex-col">
              <h2 className="text-5xl">About</h2>
              <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

              <div className="flex flex-col-reverse items-start w-full md:flex-row">
                <div className="flex flex-col w-full md:pr-8 md:w-3/5">
                  <p className="text-lg">
                                Hi! I&apos;m Hilman and I&apos;m a fullstack web developer from Jakarta, Indonesia.
                  </p>
                  <br/>
                  <p className="text-lg">
                                After graduating University with a Engineering degree, I began my journey as a software developer since 2018.
                  </p>
                  <br/>
                  <p className="text-lg">
                                In recent years, I&apos;ve been focused on programming,
                                building a solid frontend and backend stack and creating exciting
                                projects that solve real-world problems.
                  </p>
                  <br/>
                  <p className="text-lg">
                                With unmatched expertise and dedication, 
                                I have become an integral part of every project and I worked in Company called {' '}
                    <a
                      href="https://www.btpn.com/"
                      target="_blank"
                      className="underline-link text-main"
                      rel="noreferrer"
                    >
                                PT Bank BTPN
                    </a>        
                  </p>
                  <br/>
                  <p className="text-lg">
                                Take a look at my work below to see what I&apos;m working
                                on, and get in touch if you&apos;d like to work together!
                  </p>
                </div>
                <div className="flex w-full h-full mb-4 md:pl-8 md:w-2/5 md:mb-0">
                  <Image
                    src="/profil.png"
                    className="overflow-hidden rounded-md"
                    width={880}
                    height={880}
                    alt={'Hilman headshot'}
                  />
                </div>
              </div>
            </div>
          </section>


          {/* Skills */}
          <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="skills"
            ref={skillsRef}
          >
            <div className="flex flex-col">
              <h2 className="text-5xl">Skills</h2>
              <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0" />
              {/* Add your skills content here */}
              <div className="flex flex-wrap justify-between">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width={40} height={40} alt="JavaScript" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width={40} height={40} alt="TypeScript" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width={40} height={40} alt="HTML5" />
                </a>
                <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width={40} height={40} alt="CSS3" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width={40} height={40} alt="React" />
                </a>
                <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                  <Image src={NextIcon} width={40} height={39} alt="NextJs" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width={40} height={40} alt="TailwindCSS" />
                </a>
                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width={40} height={40} alt="Sass" />
                </a>
                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width={40} height={40} alt="Bootstrap" />
                </a>
                <a href="https://mui.com/" target="_blank" rel="noreferrer">
                  <Image src="./icons/MaterialUI-Light.svg" width={40} height={40} alt="Material UI" />
                </a>
              </div>              
            </div>
          </section>


          <footer className="flex flex-col w-full px-0 py-16 md:px-20 lg:px-24 section">
            <hr className="w-full h-1 mb-16 dark:bg-white bg-dark border-0 opacity-10"></hr>
            <div className="w-8 mb-4">
              <svg
                id="abbe8588-8b21-44fd-a605-eb7de7f82941"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93.13 75.2"
              >
                <path
                  className="dark:opacity-50 dark:fill-current dark:text-light fill-brand"
                  d="M24.05,38.51,7.5,55.06a4.39,4.39,0,1,1-6.21-6.21L14.74,35.41,1.29,22A4.39,4.39,0,0,1,7.5,15.75L24.05,32.3A4.4,4.4,0,0,1,24.05,38.51Z"
                />
                <path
                  className="dark:opacity-50 dark:fill-current dark:text-light fill-brand"
                  d="M91.85,55.06a4.38,4.38,0,0,1-6.21,0L69.09,38.51a4.4,4.4,0,0,1,0-6.21L85.64,15.75A4.39,4.39,0,0,1,91.85,22L78.41,35.41,91.85,48.85A4.4,4.4,0,0,1,91.85,55.06Z"
                />
                <rect
                  className="dark:opacity-50 dark:fill-current dark:text-light fill-brand"
                  x="41.93"
                  y="-1.17"
                  width="8.78"
                  height="77.54"
                  rx="4.39"
                  transform="translate(11.31 -10.71) rotate(15)"
                />
              </svg>
            </div>

            <div className="flex flex-col items-start md:flex-row">
              <p className="w-auto mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} - Designed and built by Mohammed Hilman Trihatmojo
              </p>

              <div className="flex md:hidden">
                <span className="mr-2">
                  {/* <GitHubProfile marginBottom={"mb-0"} /> */}
                </span>
                <span className="mr-2">
                  {/* <TwitterProfile marginBottom={"mb-0"} /> */}
                </span>
                <span className="mr-2">
                  {/* <LinkedInProfile marginBottom={"mb-0"} /> */}
                </span>
              </div>
            </div>
          </footer>
        </div>  

        {/* Fixed Container */}
        <div className="fixed bottom-0 z-30 w-full">
          <div className="container relative flex h-full mx-auto">
          </div>              
        </div>              
      </div>
    </div>
  );
}

const NewIcon = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 132.19 132.19"
    >
      <rect
        width="100.97"
        height="100.97"
        x="15.61"
        y="15.61"
        fill="white"
        strokeWidth="0"
        opacity="0.2"
        rx="12.81"
        ry="12.81"
        transform="rotate(45 66.096 66.088)"
      ></rect>
      <g fill="tomato" strokeWidth="0">
        <rect
          width="9.95"
          height="49.75"
          x="61.04"
          y="41.14"
          rx="4.98"
          ry="4.98"
          transform="rotate(120 66.012 66.023)"
        ></rect>
        <path d="M71.15 38.03c0 2.5-.7 3.6-1.6 4.5L59.13 52.1a4.973 4.973 0 01-7.03 0 4.967 4.967 0 010-7.04l7.03-7.03-8-8a4.955 4.955 0 010-7.03 4.96 4.96 0 017.03 0L69.5 34.32s1 1.2 1.3 1.5a4.96 4.96 0 011.46 3.52zM80.28 108.43a4.973 4.973 0 01-7.03 0L62.69 97.87a4.973 4.973 0 010-7.03l10.56-10.55a4.955 4.955 0 017.03 0c.97.97 1.45 2.24 1.45 3.51s-.48 2.55-1.45 3.52l-7.03 7.04 7.03 7.03a4.985 4.985 0 010 7.04z"></path>
      </g>
    </svg>
  );
};