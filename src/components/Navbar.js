import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#212930] dark:bg-[#212930] fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <a href="localhost:3000" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/img/logo.png" className="h-10" alt="logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Alpha Squadron
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:flex md:items-center md:space-x-8 md:ml-auto ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-12 right-4 md:top-0 md:right-0 bg-[#212930] md:bg-transparent`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700 ml-6">
            <li>
              <a
                href="localhost:3000"
                className="block py-2 px-3 text-gray-300 hover:text-gray-500 rounded md:bg-transparent md:text-gray-300 md:p-0 md:dark:text-gray-300"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="localhost:3000"
                className="block py-2 px-3 text-gray-300 hover:text-gray-500 rounded md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="localhost:3000"
                className="block py-2 px-3 text-gray-300 hover:text-gray-500 rounded md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="https://saa.iitj.ac.in" target='_blank' rel='noreferrer'
                className="block py-2 px-3 text-gray-300 hover:text-gray-500 rounded md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                SAA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
