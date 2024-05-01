"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LocalSwitcher from "@/components/Local-switcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickOnNavbar = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById("navbar");
      let desireHeight = "-74px";

      if (!navbar) return;

      if (currentScrollPos < 50 || prevScrollPos > currentScrollPos) {
        desireHeight = "0";
      } else if (window.innerWidth < 341) {
        desireHeight = "-114px";
      } else if (isClicked) {
        desireHeight = "-288px";
        setTimeout(() => {
          setIsClicked(false); // Assuming you have a setIsClicked function
        }, 300);
      }

      navbar.style.top = desireHeight;

      setPrevScrollPos(currentScrollPos);
    };

    // Only execute on the client side
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      id="navbar"
      className="  fixed w-full top-0 duration-500 z-10 text-primary "
    >
      <div className="max-w-screen-xl flex flex-wrap gap-2 items-center justify-between mx-auto py-4 px-3 sm:p-4">
        <a
          href="https://dz-dental-studio.vercel.app/#wellcome"
          className="flex items-center px-3 sm:py-1 py-2 sm:px-4 space-x-3 rtl:space-x-reverse bg-accent/80 rounded-full  text-background transition duration-300 ease-in-out hover:scale-105 hover:bg-accent"
        >
          <Image
            src="/dental-svgrepo-com.png"
            width="40"
            height="40"
            alt="Teeth icon"
            className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
          />

          <span className="self-center text-2xl font-semibold  ">
            DZ Studio
          </span>
        </a>
        <div className="flex items-center md:order-2  space-x-1 md:space-x-0 rtl:space-x-reverse gap-2">
          <LocalSwitcher />
          <button
            type="button"
            className={`appearance-none inline-flex items-center rounded-full w-12 h-12 justify-center text-sm text-background  md:hidden hover:bg-accent transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent bg-accent/80 focus::bg-green-300  ${
              isClicked
                ? "scale-110 bg-accent hover:scale-110 rounded-xl "
                : "scale-100 bg-accent/80 "
            }`}
            aria-controls="navbar-language"
            aria-expanded="false"
            onClick={handleClickOnNavbar}
          >
            {isClicked ? (
              <>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
        {isClicked && (
          <>
            <div
              className="items-center justify-between  w-full "
              id="navbar-hidden-menu"
            >
              <ul className="flex flex-col font-medium p-4 mt-1  border-2  border-primary rounded-2xl text-white bg-background/90 md:space-x-8 rtl:space-x-reverse ">
                <li>
                  <a
                    href="#wellcome"
                    className="block py-2 px-3  mx-3  rounded hover:bg-accent   transition duration-300 ease-in-out hover:scale-105  "
                    aria-current="page"
                  >
                    {t("navbar_welcome")}
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="block py-2 px-3 mx-3   rounded hover:bg-accent transition duration-300 ease-in-out hover:scale-105  "
                  >
                    {t("navbar_services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="block py-2 px-3 mx-3   rounded hover:bg-accent transition duration-300 ease-in-out hover:scale-105 "
                  >
                    {t("navbar_team")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-3 mx-3 rounded hover:bg-accent transition duration-300 ease-in-out hover:scale-105  "
                  >
                    {t("navbar_contact")}
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
          <ul className="flex flex-col font-medium p-3 px-10  rounded-full mt-4 border hover:bg-accent text-background/100  bg-accent/80  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 transition duration-300 ease-in-out hover:scale-105">
            <li>
              <a
                href="#wellcome"
                className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent md:hover:text-primary  "
                aria-current="page"
              >
                {t("navbar_welcome")}
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent md:hover:text-primary  "
              >
                {t("navbar_services")}
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent md:hover:text-primary "
              >
                {t("navbar_team")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent md:hover:text-primary "
              >
                {t("navbar_contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
