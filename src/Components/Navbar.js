import React, { useState, useEffect } from "react";
import Images from "../Assets/Images";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle toggling the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scrolling behavior
  const handleScroll = () => {
    // Adjust the threshold value (e.g., 100) as needed for your specific case
    const threshold = 100;
    const scrolled = window.scrollY > threshold;
    setIsScrolled(scrolled);
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-transparent ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white shadow-xl pb-2 md:pb-9 z-10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full lg:pt-12 ">
            <div className="flex items-center space-x-16 flex-shrink-0">
              <a href="#">
                <h3
                  className={`${
                    isScrolled ? "text-[#0F172A]" : "text-white"
                  } text-3xl font-roboto font-bold leading-tight" `}
                >
                  trakor
                </h3>
              </a>
            </div>
            <div className="hidden lg:block pt-2 lg:pl-24 2xl:pl-24">
              <div className=" flex items-baseline space-x-5 2xl:space-x-9">
                <a
                  href="#home"
                  className={`${
                    isScrolled
                      ? "text-[#0F172A] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
                      : "text-white  hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white"
                  } text-base font-roboto  font-medium leading-snug tracking-tight `}
                >
                  Product
                </a>
                <a
                  href="#Solutions"
                  className={`${
                    isScrolled
                      ? "text-[#0F172A] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
                      : "text-white  hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white"
                  }text-base font-roboto  font-medium leading-snug tracking-tight `}
                >
                  Solutions
                </a>
                <a
                  href="#Pricing"
                  className={`${
                    isScrolled
                      ? "text-[#0F172A] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
                      : "text-white  hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white"
                  } text-base font-roboto  font-medium leading-snug tracking-tight`}
                >
                  Documentation
                </a>
                <a
                  href="#Resources"
                  className={`${
                    isScrolled
                      ? "text-[#0F172A] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
                      : "text-white  hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white"
                  } text-base font-roboto  font-medium leading-snug tracking-tight `}
                >
                  Pricing
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-6 ">
                <div>
                  <h3
                    className={`${
                      isScrolled ? "text-[#475569]" : "text-white"
                    } font-roboto text-base font-medium leading-relaxed`}
                  >
                    Log In
                  </h3>
                </div>
                <div
                  className={`${
                    isScrolled
                      ? "border-[#475569] bg-[#334155]"
                      : "border-[#475569] bg-[#334155]"
                  } rounded-md border  cursor-pointer py-1 px-3`}
                >
                  <h3
                    className={`${
                      isScrolled ? "text-white" : "text-white"
                    }  font-roboto text-base font-medium leading-relaxed`}
                  >
                    Request more info
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className={`${isScrolled ? " text-[#0F172A]" : "text-white"} `}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } lg:hidden fixed inset-y-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 transform`}
        id="mobile-menu"
      >
        <div className="pt-2 pl-2">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-blue-900"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <a href="#">
            <h3
              className="text-[#0F172A] text-3xl lg:texl-4xl font-roboto font-extrabold leading-tight text-center
             hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
            >
              trakor
            </h3>
          </a>
        </div>
        <div className="p-4 space-y-7">
          <a
            href="#home"
            className="block text-gray-900  text-base font-roboto  font-medium leading-snug tracking-tight
            hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
          >
            Product
          </a>
          <a
            href="#Solutions"
            className="block text-gray-900  text-base font-roboto  font-medium leading-snug tracking-tight
            hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
          >
            Solutions
          </a>
          <a
            href="#Pricing"
            className="block text-gray-900  text-base font-roboto  font-medium leading-snug tracking-tight
            hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
          >
            Documentation
          </a>
          <a
            href="#Resources"
            className="block text-gray-900  text-base font-roboto  font-medium leading-snug tracking-tight
            hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0F172A]"
          >
            Pricing
          </a>
        </div>
        <div className="flex flex-col items-baseline p-4 space-y-7">
          <div>
            <h3
              className="text-gray-900
                 font-roboto text-base font-medium leading-relaxed"
            >
              Log In
            </h3>
          </div>
          <div
            className={`${
              isScrolled
                ? "border-[#475569] bg-[#334155]"
                : "border-[#475569] bg-[#334155]"
            } rounded-md border  cursor-pointer p-1`}
          >
            <h3
              className={`${
                isScrolled ? "text-white" : "text-white"
              }  font-roboto text-base font-medium leading-relaxed`}
            >
              Request more info
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
