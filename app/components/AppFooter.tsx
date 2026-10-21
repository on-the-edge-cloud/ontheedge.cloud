import React from "react";
import Container from "./Container";

const AppFooter = () => {
  return (
    <footer className="py-20 md:py-40">
      <Container>
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
              <ul role="list" className="space-y-8">
                <li>
                  <a
                    href="https://github.com/on-the-edge-cloud"
                    className="flex items-center space-x-3 transition hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>on-the-edge-cloud</span>
                  </a>
                </li>
								<li>
	                  <a
	                    href="https://www.linkedin.com/company/on-the-edge-it-solutions"
	                    className="flex items-center space-x-3 transition hover:text-primary"
	                  >
	                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5" viewBox="0 0 50 50" fill="currentColor">
											    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
											</svg>
	                    <span>Linkedin</span>
	                  </a>
	                </li>
              </ul>
            </div>
            <div className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
              <span className="block text-gray-500 dark:text-gray-400">
                On the Edge IT Solutions S.L. &copy; <span id="year"></span>
              </span>

              <span className="block text-gray-500 dark:text-gray-400">
                Need help?{" "}
                <a
                  href="mailto:tnovau@ontheedge.cloud"
                  className="font-semibold text-gray-600 dark:text-white"
                >
                  {" "}
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;
