import Image from "next/image";
import { useTranslations } from "next-intl";
import img_clinic_1 from "../../public/grid_clinic_pics/clinic_photo_1.jpg";
import img_clinic_2 from "../../public/grid_clinic_pics/clinic_photo_2.jpg";
import img_clinic_3 from "../../public/grid_clinic_pics/clinic_photo_3.jpg";
import img_clinic_4 from "../../public/grid_clinic_pics/clinic_photo_4.jpg";
import img_clinic_5 from "../../public/grid_clinic_pics/clinic_photo_5.jpg";
import img_clinic_6 from "../../public/grid_clinic_pics/clinic_photo_6.jpg";
import img_clinic_7 from "../../public/grid_clinic_pics/clinic_photo_7.jpg";
import img_clinic_8 from "../../public/grid_clinic_pics/clinic_photo_8.jpg";
import img_clinic_9 from "../../public/grid_clinic_pics/clinic_photo_9.jpg";
import img_clinic_10 from "../../public/grid_clinic_pics/clinic_photo_10.jpg";
import img_clinic_11 from "../../public/grid_clinic_pics/clinic_photo_11.jpg";
import img_clinic_12 from "../../public/grid_clinic_pics/clinic_photo_12.jpg";

export default function GaleryGrid() {
  const t = useTranslations("Gallery");

  return (
    <div className="w-full px-4">
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
        {t("gallery_header")}
      </h2>
      <p className="text-center     text-white text-balance mt-4">{t("gallery_text")}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* Column #1 */}
        <div className="grid gap-4">
          <div className="relative h-60 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_1}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-60 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_2}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-40 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_3}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
        </div>

        {/* Column #2 */}
        <div className="grid gap-4">
          <div className="relative h-40 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_4}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-72 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_5}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-52 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_6}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
        </div>

        {/* Column #3 */}
        <div className="grid gap-4">
          <div className="relative h-72 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_7}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-40 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_8}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-52 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_9}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
        </div>

        {/* Column #4 */}
        <div className="grid gap-4">
          <div className="relative h-40 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_10}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-60 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_11}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
          <div className="relative h-60 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_12}
              fill
              style={{ objectFit: "cover" }}
              alt={t("gallery_img_alt")}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <hr className="mt-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />
    </div>
  );
}
