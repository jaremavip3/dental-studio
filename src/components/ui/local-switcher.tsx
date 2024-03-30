"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
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
      <div className="border-2 rounded ">
        <p className="sr-only">Change language</p>
        <select
          defaultValue={activeLocale}
          disabled={isPending}
          className="bg-transparent py-2"
          onChange={handleLangugeSwitch}
        >
          <option value="en">English 🇬🇧</option>
          <option value="ua">Ukrainian 🇺🇦</option>
        </select>
      </div>
    </>
  );
}
