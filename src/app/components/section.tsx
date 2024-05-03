import { Arrow } from "@/assets/arrow";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
  text: string;
  index: string;
  img: StaticImageData;
  imgAlt?: string;
  align?: "left" | "right";
}

export const Section: FC<Props> = ({
  title,
  subtitle,
  text,
  index,
  align = "left",
  img,
  imgAlt = title,
}) => {
  return (
    <section
      id={index}
      className={`max-w-[1460px] max-lg:flex-col-reverse max-lg:gap-[46px] relative z-[29] gap-[114px] flex items-center justify-center ${
        align === "right" &&
        "flex-row-reverse gap-[264px] max-[1300px]:gap-[114px]"
      }`}
    >
      <div className="flex flex-col gap-[27px] max-sm:text-[14px] max-lg:text-[16px] text-[18px] flex-[1] relative">
        <header className="flex gap-6 items-center">
          <div className="h-[2px] w-[72px] bg-[#FBD784]" />
          <h2 className="uppercase leading-[22px] tracking-[6px] text-[#FBD784] font-extrabold">
            {subtitle}
          </h2>
        </header>
        <h1 className="leading-[77px] max-sm:text-[24px] max-sm:leading-8 max-lg:text-[50px]  text-[64px] font-semibold">
          {title}
        </h1>
        <p className="leading-8 font-bold">{text}</p>
        <button className="text-[#FBD784] leading-[21.76px] flex items-center gap-4">
          <p>read more</p> <Arrow fill="#FBD784" className="" />
        </button>
        <p className="absolute -top-[100px] -left-[148px] opacity-10 text-[240px] max-lg:text-[140px] max-sm:text-[88px] max-sm:-left-[33px] max-sm:-top-[110px] max-lg:-left-[80px] leading-[240px] font-bold text-white">
          {index}
        </p>
      </div>
      <div className="flex-[1]">
        <Image className=" relative z-[13]" src={img} alt={imgAlt} />
      </div>
    </section>
  );
};
