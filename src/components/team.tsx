import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Team() {
  const t = useTranslations("Team");
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <hr className="border-gray-500 mb-4"></hr>
      <div className=" grid mx-4 items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("team_header")}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t("team_text")}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 ">
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt={t("team_member_photo_alt")}
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
              <h3 className="font-bold">{t("team_doctor1_name")}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("team_doctor1_bio")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              alt={t("team_member_photo_alt")}
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
              <h3 className="font-bold">{t("team_doctor2_name")}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("team_doctor2_bio")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt={t("team_member_photo_alt")}
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
              <h3 className="font-bold">{t("team_doctor3_name")}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("team_doctor3_bio")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 mt-8"></hr>
    </section>
  );
}
