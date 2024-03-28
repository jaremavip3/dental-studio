import Image from "next/image";
import Head from "@/components/head";
import Navbar from "@/components/navbar";
import Wellcome from "@/components/wellcome";
import Services from "@/components/services";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] overflow-y-auto ">
        <Navbar />
        <Head />
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
