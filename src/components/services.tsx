import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            {t("services_header")}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t("services_text")}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 ">
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt={t("services_general_dentistry_img_alt")}
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="250"
              src="/general-dentistry.jpg"
              width="375"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                {t("services_general_dentistry_header")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("services_general_dentistry_text")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              alt={t("services_cosmetic_dentistry_img_alt")}
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="250"
              src="/general-dentistry.jpg"
              width="375"
            />
            <div className="space-y-2 ">
              <h3 className="text-xl font-bold ">
                {t("services_cosmetic_dentistry_header")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("services_cosmetic_dentistry_text")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              alt={t("services_orthodontics_dentistry_img_alt")}
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="250"
              src="/general-dentistry.jpg"
              width="375"
            />
            <div className="space-y-2 ">
              <h3 className="text-xl font-bold ">
                {t("services_orthodontics_dentistry_header")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("services_orthodontics_dentistry_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
