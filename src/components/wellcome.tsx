import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Wellcome() {
  const t = useTranslations("Wellcome");
  return (
    <section
      className="w-full flex justify-center items- py-6 md:py-12 lg:py-24 xl:py-32 lg:mt-[72px] max-[403px]:mt-[112px] mt-[72px]"
      id="wellcome"
    >
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            {t("wellcome_header")}
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t("wellcome_text")}
          </p>
        </div>
        <Image
          alt={t("wellcome_image_alt")}
          className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
          height={300}
          src="/hero-image.png" // correct path to the image file
          width={700}
          priority={true}
        />
      </div>
    </section>
  );
}
