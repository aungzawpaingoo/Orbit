import React from 'react';
import Icon from '../../assets/NavbarIcon.png'

const FooterComponent = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
              src={Icon}
              alt="Navbar Icon"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">Orbit</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Crafting digital solutions that propel your business forward.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-3">RESOURCES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Knowledge Base</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Our Story</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Team</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Press</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-3">CONTACT</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Email Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Location</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Request a Demo</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Partners</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-3">LEGAL</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Terms of Service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Cookie Policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Refund Policy</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Orbit —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
