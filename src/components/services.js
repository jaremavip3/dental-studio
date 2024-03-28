import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full m-0 flex justify-center text-center py-12 md:py-24 lg:py-32 border-t  "
    >
      <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Our Services
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We offer a wide range of dental services to keep your smile healthy
            and beautiful.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Service"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/general-dentistry.jpg"
              width="300"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">General Dentistry</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our general dentistry services include routine checkups,
                cleanings, fillings, and more to keep your smile healthy.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Service"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/general-dentistry.jpg"
              width="300"
            />
            <div className="space-y-2 ">
              <h3 className="text-xl font-bold ">Cosmetic Dentistry</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Transform your smile with our cosmetic dentistry services,
                including teeth whitening, veneers, and smile makeovers.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Service"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/general-dentistry.jpg"
              width="300"
            />
            <div className="space-y-2 ">
              <h3 className="text-xl font-bold ">Orthodontics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Achieve a straighter smile with our orthodontic treatments,
                including braces and clear aligners for patients of all ages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
