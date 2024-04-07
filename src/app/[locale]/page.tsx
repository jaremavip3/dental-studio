import Image from "next/image";
import Head from "@/components/head";
import Navbar from "@/components/navbar";
import Wellcome from "@/components/wellcome";
import Services from "@/components/services";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Map from "@/components/map";
import PreFooter from "@/components/prefooter";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { pick } from "lodash";
import Carousel from "@/components/carousel";

export default function Home() {
  const messages = useMessages();
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] overflow-y-auto  ">
        <NextIntlClientProvider messages={pick(messages, "Navbar")}>
          <Navbar />
        </NextIntlClientProvider>
        <Head />
        <Wellcome />
        <main>
          <NextIntlClientProvider messages={pick(messages, "Carousel")}>
            <Carousel />
          </NextIntlClientProvider>
          <Team />
          <NextIntlClientProvider messages={pick(messages, "Contact")}>
            <Contact />
          </NextIntlClientProvider>
          <Map />
        </main>
        <PreFooter />
        <Footer />
      </div>
    </>
  );
}
