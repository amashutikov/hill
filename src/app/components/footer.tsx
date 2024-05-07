import { ptSerif } from "@/assets/fonts";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="flex w-full mb-[120px] mt-[200px] pr-[230px] pl-[100px] h-full justify-center items-center max-lg:px-[40px]">
      <div className="max-w-[1460px] w-full flex max-lg:flex-col gap-7">
        <div className="flex-[1.45] flex flex-col justify-between">
          <div>
            <h1
              className={cn(
                "text-[32px] leading-[38px] tracking-[1%] ",
                ptSerif.className
              )}
            >
              HILL
            </h1>
            <p className="font-bold text-[18px] leading-[32px]">
              Get out there & discover your next <br /> slope, mountain &
              destination!
            </p>
          </div>
          <p className="font-medium text-[18px] leading-[32px] opacity-50">
            Copyright 2023 HILL, Inc. Terms & Privacy
          </p>
        </div>
        <div className="flex justify-between flex-[1] max-md:flex-col gap-7">
          <div className="flex flex-col gap-[16px]">
            <h2 className="mb-[8px] font-bold text-[24px] leading-[32px] text-[#FBD784]">
              More on The Blog
            </h2>
            <p className="cursor-pointer">About MNTN</p>
            <p className="cursor-pointer">Contributors & Writers</p>
            <p className="cursor-pointer">Write For Us</p>
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="mb-[8px] font-bold text-[24px] leading-[32px] text-[#FBD784]">
              More on HILL
            </h2>
            <p className="cursor-pointer">The Team</p>
            <p className="cursor-pointer">Jobs</p>
            <p className="cursor-pointer">Press</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
