import Image from "next/image";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import Wellcome from "@/components/Wellcome";
import Services from "@/components/services";
import Team from "@/components/Team";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head />
      <div className="flex flex-col min-h-[100dvh] overflow-y-auto ">
        <Navbar />
        <Wellcome />
        <main>
          <Services />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
