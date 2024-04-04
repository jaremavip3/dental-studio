"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { title } from "process";
import classNames from "classnames";
import { Chevron } from "@/icons/chevron";
import { useCallback, useMemo, useRef, useState } from "react";

const slides = [
  {
    title: "Dental Implants",
    img: "/carousel_implants.jpg",
    width: 600,
    height: 450,
    centered: true,
  },
  {
    title: "Dental Cleaning",
    img: "/carousel_cleaning.jpeg",
    width: 500,
    height: 325,
    centered: true,
  },
  {
    title: "Dental Orthodontology",
    img: "/carousel_orthodontology.png",
    width: 860,
    height: 595,
    centered: true,
  },
  {
    title: "Dental Root Canal",
    img: "/carousel_root.jpg",
    width: 2500,
    height: 2500,
    centered: true,
  },
  {
    title: "Dental Veneers",
    img: "/carousel_veneers.jpg",
    width: 500,
    height: 400,
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
              <div className="slide-center snap-center relative flex h-full flex-col bg-white w-[350px]  rounded-2xl">
                <div
                  className={classNames(
                    "flex h-full justify-center",
                    slide.centered ? "items-center" : "items-start"
                  )}
                >
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={slide.width}
                    height={slide.height}
                  />
                </div>
                <h3 className="mt-auto text-2xl font-semibold p-6">
                  {slide.title}
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
