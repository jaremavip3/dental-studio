import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PreFooter() {
  const t = useTranslations("Prefooter");
  function FacebookIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }

  function InstagramIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }

  function MailboxIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
        <polyline points="15,9 18,9 18,11" />
        <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
        <line x1="6" x2="7" y1="10" y2="10" />
      </svg>
    );
  }

  function MapPinIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  function PhoneIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  function SmileIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    );
  }
  function WorkingHourIcon(props: any) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 7V12L9.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  return (
    <section className="w-full text-primary p-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div>
          <h2 className="font-bold text-lg mb-4">{t("prefooter_adress")}</h2>
          <MapPinIcon className="text-accent w-6 h-6 mb-2" />
          <p>{t("prefooter_adress_text")}</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">{t("prefooter_phone")}</h2>
          <PhoneIcon className="text-accent w-6 h-6 mb-2" />
          <p>416-998-4853</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">{t("prefooter_email")}</h2>
          <MailboxIcon className="text-accent w-6 h-6 mb-2" />
          <p>info@dzdental.ca</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">
            {t("prefooter_working_hours")}
          </h2>
          <WorkingHourIcon className=" bg-accent rounded-full w-6 h-6 mb-2" />
          <p>{t("prefooter_working_hours_during_week_days")}</p>
          <p>{t("prefooter_working_hours_saturday_day")}</p>
          <p>{t("prefooter_working_hours_sunday_day")}</p>
        </div>

        <div className="lg:col-span-4 md:col-span-2">
          <div className="flex gap-4 flex-col lg:flex-row justify-between items-center lg:items-start mt-8 border-t-4 border-background pt-4 ">
            <div>
              <h2 className="font-bold text-lg mb-4">
                {t("prefooter_social_networks")}
              </h2>
              <p>{t("prefooter_social_networks_text")}</p>
            </div>
            <div className="flex space-x-4 self-end lg:self-auto ">
              <InstagramIcon className="text-accent w-6 h-6" />
              <FacebookIcon className="text-accent w-6 h-6" />
            </div>
          </div>
          <hr className="my-12 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-accent to-transparent opacity-35" />
          <div className="flex justify-center mt-8">
            <div className="flex items-center">
              <div className="rounded-full bg-primary p-2">
                <SmileIcon className="text-[#2D3E50] w-8 h-8" />
              </div>
              <h1 className="font-bold text-xl ml-4">DZ Dental Studio</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
