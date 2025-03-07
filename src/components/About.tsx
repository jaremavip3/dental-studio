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

export default function About() {
  const t = useTranslations("Carousel");

  return (
    <div className="w-full">
      <h2 className="font-semibold text-6xl text-center text-balance sm:mb-20 ">About us</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Column #1 */}
        <div className="grid gap-4">
          <div className="relative h-60 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_1}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 1"
              placeholder="blur"
            />
          </div>
          <div className="relative h-60 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_2}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 2"
              placeholder="blur"
            />
          </div>
          <div className="relative h-40 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_3}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 3"
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
              alt="Clinic Photo 4"
              placeholder="blur"
            />
          </div>
          <div className="relative h-72 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_5}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 5"
              placeholder="blur"
            />
          </div>
          <div className="relative h-52 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_6}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 6"
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
              alt="Clinic Photo 7"
              placeholder="blur"
            />
          </div>
          <div className="relative h-40 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_8}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 8"
              placeholder="blur"
            />
          </div>
          <div className="relative h-52 w-full">
            <Image
              className="rounded-xl shadow"
              src={img_clinic_9}
              fill
              style={{ objectFit: "cover" }}
              alt="Clinic Photo 9"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <hr className="mt-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />
    </div>
  );
}
