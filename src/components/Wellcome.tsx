import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import wellcome_image_1 from "../../public/croped_img_1.png";
import wellcome_image_2 from "../../public/croped_img_2.png";
import wellcome_image_3 from "../../public/croped_img_3.png";

export default function Wellcome() {
  const t = useTranslations("Welcome");
  return (
    <section id="wellcome">
      <div className=" text-primary pb-0 pt-4 sm:py-20 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center mb-0 mt-12 sm:my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-snug text-accent ">
              {t("welcome_header_black")}
            </h1>
            <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-snug text-accent ">
              {t("welcome_header_yellow")}
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"> {t("welcome_second_header")}</h2>
            <p className="text-sm md:text-base text-secondary mb-4">{t("welcome_text")}</p>
            <a
              href="#contact"
              className="bg-transparent hover:bg-accent text-accent hover:text-background rounded shadow hover:shadow-lg py-2 px-4 border border-accent hover:border-transparent"
            >
              {t("welcome_contact")}
            </a>
          </div>
          <div className="p-8 mt-12  md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="flex flex-row lg:flex-nowrap  justify-center gap-7 md:gap-16  flex-wrap xl:flex-nowrap">
              <div>
                <Image
                  className=" block transition duration-300 ease-in-out hover:scale-110 shadow-xl pb-12"
                  src={wellcome_image_1}
                  alt="Image 1"
                  height={300}
                  width={300}
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  className=" hidden md:block transition duration-300 ease-in-out hover:scale-110 shadow-xl pt-11"
                  src={wellcome_image_2}
                  alt="Image 1"
                  height={300}
                  width={300}
                  placeholder="blur"
                />
              </div>
              <div className="self-center ">
                <Image
                  className=" hidden lg:block  transition duration-300 ease-in-out hover:scale-110 shadow-xl "
                  src={wellcome_image_3}
                  alt="Image 1"
                  height={300}
                  width={300}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
