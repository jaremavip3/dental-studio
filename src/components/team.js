import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full text-center py-12 border-t flex justify-center md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our experienced and friendly team is dedicated to providing the best
            care for our patients.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 ">
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Team Member"
              className="rounded-full "
              height="400"
              width="400"
              src="/team-member-1.jpeg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
            />
            <div className="space-y-2">
              <h3 className="font-bold">Dr. Diana Zarowsky</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {" "}
                Dr. Diana Zarowsky is a skilled and compassionate dentist with a
                passion for providing quality care to her patients.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Team Member"
              className="rounded-full "
              height="400"
              width="400"
              src="/team-member-1.jpeg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
            />
            <div className="space-y-2">
              <h3 className="font-bold">Dr. Diana Zarowsky</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {" "}
                Dr. Diana Zarowsky is a skilled and compassionate dentist with a
                passion for providing quality care to her patients.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Team Member"
              className="rounded-full "
              height="400"
              width="400"
              src="/team-member-1.jpeg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
            />
            <div className="space-y-2">
              <h3 className="font-bold">Dr. Diana Zarowsky</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {" "}
                Dr. Diana Zarowsky is a skilled and compassionate dentist with a
                passion for providing quality care to her patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
