import Container from "./Container";
import "./AppHeader.css";
// import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import Image from "next/image";

// const links = [
//   {
//     to: "/#features",
//     label: "Features",
//   },
//   {
//     to: "/#solution",
//     label: "Solution",
//   },
//   {
//     to: "/#reviews",
//     label: "Reviews",
//   },
// ];

// const defaultNavLinksClasses = "invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none";
// const defaultHamburgerClasses = "relative -mr-6 p-6";
// const defaultNavLayerClasses = "fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden";

const AppHeader = () => {
  // const [isToggled, setIsToggled] = useState(false);
  // const [navLinkClasses, setNavLinkClasses] = useState(defaultNavLinksClasses);
  // const [hamburgerClasses, setHamburgerClasses] = useState(defaultHamburgerClasses);
  // const [navLayerClasses, setNavLayerClasses] = useState(defaultNavLayerClasses);

  // const onHamburgerClick : MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
  //   e.preventDefault();
  //   setIsToggled(prev => !prev);
  // }, []);

  // const onLinksClick : MouseEventHandler<HTMLLIElement> = useCallback((e) => {
  //   setIsToggled(prev => !prev);
  // }, []);

  // useEffect(() => {
  //   setNavLinkClasses(isToggled ? `${defaultNavLinksClasses} !visible !scale-100 !opacity-100 !lg:translate-y-0` : defaultNavLinksClasses);
  //   setHamburgerClasses(isToggled ? `${defaultHamburgerClasses} toggled` : defaultHamburgerClasses);
  //   setNavLayerClasses(isToggled ? `${defaultNavLayerClasses} origin-top scale-y-100` : defaultNavLayerClasses);
  // }, [isToggled])

  return (
    <header>
      <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <a
                href="/#home"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <Image src="/images/logo.svg" alt="On the Edge Logo" width={300} height={60} />
              </a>

              {/* <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className={hamburgerClasses}
                  onClick={onHamburgerClick}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                </button>
              </div> */}
            </div>
            {/* <div
              id="navLayer"
              aria-hidden="true"
              className={navLayerClasses}
            ></div> */}
            {/* <div
              id="navlinks"
              className={navLinkClasses}
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link) => (
                    <li key={link.label} onClick={onLinksClick}>
                      <a
                        href={link.to}
                        className="hover:text-primary block transition dark:hover:text-white md:px-4"
                      >
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://tailus.gumroad.com/l/astls-premium"
                      target="_blank"
                      className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4"
                    >
                      <span>Premium</span>
                      <span className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300">
                        {" "}
                        new
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default AppHeader;
