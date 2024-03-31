"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LocalSwitcher from "@/components/ui/local-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById("navbar");
      if (navbar !== null) {
        if (prevScrollPos > currentScrollPos || currentScrollPos < 50) {
          navbar.style.top = "0";
        } else {
          if (window.innerWidth < 341) {
            navbar.style.top = "-114px";
          } else {
            navbar.style.top = "-74px";
          }
        }
      }

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
      className="bg-white border-gray-200  fixed w-full top-0 duration-200"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://dz-dental-studio.vercel.app/#wellcome"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/dental-svgrepo-com.png"
            width="40"
            height="40"
            alt="Teeth icon"
          />

          <span className="self-center text-2xl font-semibold  ">
            DZ Studio
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <LocalSwitcher />
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="appearance-none inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#wellcome"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  "
                aria-current="page"
              >
                {t("navbar_welcome")}
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  "
              >
                {t("navbar_services")}
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                {t("navbar_team")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
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
