"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { title } from "process";
import classNames from "classnames";
import { Chevron } from "@/icons/chevron";
import { useCallback, useMemo, useRef, useState } from "react";

const slides = [
  {
    title: "1_img_Teeth Whitening",
    img: "/carousel_pics/1_teeth_whitening.webp",
    centered: true,
  },
  {
    title: "2_img_Child_Dentistry",
    img: "/carousel_pics/2_child_dentistry.webp",
    centered: true,
  },
  {
    title: "3_img_Dental_Filling",
    img: "/carousel_pics/3_dental_filling.webp",
    centered: true,
  },
  {
    title: "4_img_tooth_extraction",
    img: "/carousel_pics/4_tooth_extraction.webp",
    centered: true,
  },
  {
    title: "5_img_Dental_Implants",
    img: "/carousel_pics/5_dental_implants.webp",
    centered: true,
  },
  {
    title: "6_img_Hygiene",
    img: "/carousel_pics/6_proffesional_oral_hygiene.webp",
    centered: true,
  },
  {
    title: "7_img_Tooth_decay",
    img: "/carousel_pics/7_tooth_decay.webp",
    centered: true,
  },
  {
    title: "8_img_Gum_disease",
    img: "/carousel_pics/8_gum_deasece.webp",
    centered: true,
  },
  {
    title: "9_img_Wisdom_teeth",
    img: "/carousel_pics/9_wisdom_teeth.webp",
    centered: true,
  },
  {
    title: "10_img_Ortodontics",
    img: "/carousel_pics/10_orthodontics.webp",
    centered: true,
  },
  {
    title: "11_img_Aligners",
    img: "/carousel_pics/11_aligners.webp",
    centered: true,
  },
];

const slideWidth = 350;
const slideMargin = 20;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: "smooth",
  });
};

export default function Carousel() {
  const t = useTranslations("Carousel");
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const currentSlide = useMemo(() => {
    return Math.round(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <div className="bg-gray-200 min-h-screen font-sans py-16">
      <h2 className="font-semibold text-6xl text-center text-balance mb-20">
        A magical connection to your devices.
      </h2>

      <div className="h-[500px] overflow-hidden">
        <ul
          ref={sliderRef}
          onScroll={(ev) => {
            setSliderPosition(ev.currentTarget.scrollLeft);
          }}
          className="flex h-[540px] pb-10 overflow-x-auto snap-x snap-mandatory"
        >
          {slides.map((slide) => (
            <li
              className="snap-center snap-always shrink-0 mr-5 last:mr-0"
              key={slide.title}
            >
              <div className="slide-center snap-center relative flex h-full flex-col bg-white w-[350px]  rounded-2xl overflow-hidden p-2">
                <div className="flex-grow relative rounded-2xl overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-auto text-2xl font-semibold p-6 ">
                  {t(slide.title)}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="disabled:text-gray-400 disabled:border-gray-400 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center mr-2"
        >
          <span className="sr-only">Previous slide</span>
          <Chevron className="rotate-180 w-3 h-3" />
        </button>
        <button
          disabled={scrolledToEndOfSlider || currentSlide === slides.length}
          onClick={() => goToNextSlide()}
          className="disabled:text-gray-400 disabled:border-gray-400  w-8 h-8 border-2 border-black rounded-full flex items-center justify-center"
        >
          <span className="sr-only">Next slide</span>
          <Chevron className=" w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
