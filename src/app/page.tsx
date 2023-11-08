"use client"
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Image from "next/image";
import Introduction from "@/components/Introduction/Introduction";
import Explore from "@/components/Explore/Explore";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-BackgroundLight">
        <div className="">
            <Header />
            <div className="max-w-[1440px] lg:px-[120px] mx-auto mt-0 mb-0 sm:px-4">
                <HeroSection />
            </div>
            <div className="bg-wave-bg h-[153px] md:bg-center sm:bg-center bg-no-repeat bg-cover"></div>
            <Introduction />
            <Explore />
            <FAQ />
            <Footer />
        </div>
    </div>
  )
}
