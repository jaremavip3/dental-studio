import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Wellcome() {
  const t = useTranslations("Welcome");
  return (
    <section>
      <div className=" text-primary py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-accent tracking-loose">
              Dental Studio
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Teeth treatment is important
            </h2>
            <p className="text-sm md:text-base text-secondary mb-4">
              Explore new high tech dental clinic where your you can get all
              your teeth fixed quickly and corectly
            </p>
            <a
              href="#contact"
              className="bg-transparent hover:bg-accent text-accent hover:text-background rounded shadow hover:shadow-lg py-2 px-4 border border-accent hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="flex flex-row  justify-center gap-7 md:gap-16  flex-wrap xl:flex-nowrap">
              <div>
                <Image
                  className=" block transition duration-300 ease-in-out hover:scale-105 shadow-xl pb-12"
                  src="/croped_img_1.png"
                  alt="Image 1"
                  height={300}
                  width={250}
                />
              </div>
              <div>
                <Image
                  className=" hidden md:block transition duration-300 ease-in-out hover:scale-105 shadow-xl pt-11"
                  src="/croped_img_2.png"
                  alt="Image 1"
                  height={300}
                  width={250}
                />
              </div>
              <div className="self-center ">
                <Image
                  className=" hidden lg:block transition duration-300 ease-in-out hover:scale-105 shadow-xl "
                  src="/croped_img_3.png"
                  alt="Image 1"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
