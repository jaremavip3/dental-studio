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

        <select
          id="language"
          defaultValue={activeLocale}
          disabled={isPending}
          className="appearance-none bg-accent/80 text-center font-medium py-3 px-2 sm:px-4 text-background rounded-full  focus:ring-background focus:border-background block w-full  hover:bg-accent hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105"
          onChange={handleLangugeSwitch}
        >
          <option
            className="appearance-none inline-flex items-center font-medium justify-center px-4 py-2 text-sm  rounded-lg   "
            value="en"
          >
            {t("navbar_language_en")}
          </option>
          <option
            className="appearance-none inline-flex items-center font-medium justify-center px-4 py-2 text-sm  rounded-lg "
            value="ua"
          >
            {t("navbar_language_ua")}
          </option>
        </select>
      </div>
    </>
  );
}
