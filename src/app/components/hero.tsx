"use client";
import { Arrow } from "@/assets/arrow";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import hg from "../../assets/HG.png";
import mg from "../../assets/MG.png";
import vg from "../../assets/VG.png";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const sectionIds = ["start", "01", "02", "03"];

export const Hero = () => {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const selectedId = sectionIds.findIndex(id => id === currentId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentId(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollTo = (id?: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.pageYOffset - 200,
        behavior: "smooth",
      });
    }
  };
  const hgRef = useRef<HTMLDivElement>(null);
  const mgRef = useRef<HTMLDivElement>(null);
  const vgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;

      if (hgRef.current) {
        const translateY = Math.min(scrollPos * 0.5, 500);
        hgRef.current.style.transform = `translateY(${translateY}px)`;
      }
      if (mgRef.current) {
        const translateY = Math.min(scrollPos * 0.3, 250);
        mgRef.current.style.transform = `translateY(${translateY}px)`;
      }
      if (vgRef.current) {
        const translateY = Math.min(scrollPos * 0.35, 300);
        vgRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="start"
      className="relative w-full min-h-[1200px] max-md:min-h-[1440px] max-sm:min-h-[800px] max-[350px]:min-h-[30vh] flex items-start justify-center text-[18px] max-xl:text-[16px]"
    >
      <div
        className="absolute top-0 w-full h-[150vh] max-md:h-full"
        style={{
          background:
            "linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #000 108.93%)",
        }}
      />
      <div
        className="absolute top-[1000px] max-lg:top-[410px] max-md:top-[310px] max-[400px]:top-[170px] z-[18] w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%)",
        }}
      />

      <div ref={hgRef} className="absolute top-[0px] -z-30">
        <Image src={hg} alt="hg" />
      </div>
      <div
        ref={mgRef}
        className="absolute top-[500px] max-[1100px]:top-[350px] max-lg:top-[300px] max-sm:top-[200px] max-[500px]:top-[170px] max-[400px]:top-[150px] max-[320px]:top-[120px] -z-30"
      >
        <Image src={mg} alt="mg" />
      </div>
      <div
        ref={vgRef}
        className="absolute top-[830px] max-[1100px]:top-[600px] max-lg:top-[550px] max-sm:top-[380px] max-[500px]:top-[320px] max-[400px]:top-[280px] max-[320px]:top-[200px] -z-30"
      >
        <Image src={vg} alt="vg" />
      </div>

      <div className="flex items-center justify-between w-full mt-[300px] max-[500px]:mt-[150px] px-[64px] max-lg:px-[32px] relative z-[28] gap-6">
        <div className="flex flex-col items-center gap-6 z-20">
          <p className="rotate-90 mb-6 whitespace-nowrap">Follow us</p>
          <Image className="cursor-pointer" src={instagram} alt="instagram" />
          <Image className="cursor-pointer" src={twitter} alt="twitter" />
        </div>
        <div className="relative flex flex-col gap-7 max-w-[950px]">
          <header className="flex gap-7 items-center">
            <div className="h-[2px] w-[72px] bg-[#FBD784]" />
            <p className="text-[#FBD784] leading-[22px] tracking-[6px] uppercase">
              A Hiking guide
            </p>
          </header>
          <h1 className="mr-[70px] leading-[100px] max-md:text-[60px] max-md:leading-[56px] max-sm:text-[44px] max-[400px]:text-[22px] max-[400px]:leading-[33px] text-[88px] max-[500px]:mr-0">
            Be prepared for the Mountains and beyond!
          </h1>
          <button
            className="group w-fit flex items-center gap-4 relative z-[111]"
            onClick={() => scrollTo("01")}
          >
            <div className="flex flex-col">
              <p className="leading-[21.76px] transition duration-300 font-bold">
                scroll down
              </p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </div>

            <div>
              <Arrow fill="#fff" rotate="90" />
            </div>
          </button>
        </div>
        <div />
        <div className="fixed top-[342px] right-[64px] z-[331] flex gap-7 items-center max-[500px]:hidden">
          <ul className="flex flex-col items-end gap-10 leading-[21.76px] text-white">
            <li className="cursor-pointer" onClick={() => scrollTo()}>
              Start
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("01")}>
              01
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("02")}>
              02
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("03")}>
              03
            </li>
          </ul>

          <div className="relative">
            <div className="w-[3px] h-[240px] bg-white opacity-50" />
            <div
              style={{
                top: `${selectedId !== -1 ? selectedId * 60 : 0}px`,
              }}
              className={`absolute z-[15] w-[3px] h-[60px] bg-white transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
