"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const t = useTranslations("Navbar");
  const [isPending, startTransition] = useTransition();
  const router = useRouter(); // get the router object from the next/navigation module
  const activeLocale = useLocale(); // get the active locale from the next-intl module

  const handleLangugeSwitch = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value; // get the selected locale from the select element
    // this will change the url to the selected locale
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <>
      <div className=" max-w-sm ">
        <p className="sr-only">{t("navbar_language")}</p>
        {/* <label
          htmlFor="language"
          className="hidden  md:block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a language
        </label> */}
        <select
          id="language"
          defaultValue={activeLocale}
          disabled={isPending}
          className="appearance-none   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={handleLangugeSwitch}
        >
          <option
            className="appearance-none inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
            value="en"
          >
            {t("navbar_language_en")}
          </option>
          <option
            className="appearance-none inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
            value="ua"
          >
            {t("navbar_language_ua")}
          </option>
        </select>
      </div>
    </>
  );
}
