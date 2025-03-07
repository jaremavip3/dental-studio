import Image from "next/image";
import { pick } from "lodash";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider, useMessages } from "next-intl";

// import Head from "../../components/Head";
// import Navbar from "../../components/Navbar";
// import Wellcome from "../../components/Wellcome";
// import Services from "../../components/Services";
// import Team from "../../components/Team";
// import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";
// import Map from "../../components/Map";
// import PreFooter from "../../components/Prefooter";
// import Carousel from "../../components/Carousel";
// import About from "../../components/About";
// import MovingLine from "../../components/Moving-line";
import Head from "@/components/head";
import Navbar from "@/components/navbar";
import Wellcome from "@/components/wellcome";
import Services from "@/components/services";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Map from "@/components/map";
import PreFooter from "@/components/prefooter";
import Carousel from "@/components/carousel";
import About from "@/components/about";
import MovingLine from "@/components/moving-line";

export default function Home() {
  const messages = useMessages();
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] overflow-y-auto font-custom_font bg-background">
        <NextIntlClientProvider messages={pick(messages, "Navbar")}>
          <Navbar />
        </NextIntlClientProvider>
        <Head />

        <Wellcome />
        <MovingLine />
        <main>
          <NextIntlClientProvider messages={pick(messages, "Carousel")}>
            <Carousel />
          </NextIntlClientProvider>
          <Team />
          <About />
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
