"use client"
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="bg-BackgroundLight">
        <div className="max-w-[1440px] px-[120px] mx-auto mt-0 mb-0">
            <Header />
            <HeroSection />
        </div>
    </div>
  )
}
