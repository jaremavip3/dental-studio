import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-1.5 px-4 w-full shrink-0 items-center md:px-6 border-t bg-accent">
      <p className="text-xs text-background ">{t("footer_text")}</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          {t("footer_terms")}
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          {t("footer_privacy")}
        </Link>
      </nav>
    </footer>
  );
}
