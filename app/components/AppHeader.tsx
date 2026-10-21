import Container from "./Container";
import "./AppHeader.css";
import Image from "next/image";

const AppHeader = () => {
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
                <Image
                  src="/images/logo.svg"
                  alt="On the Edge Logo"
                  width={300}
                  height={60}
                />
              </a>

            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default AppHeader;
