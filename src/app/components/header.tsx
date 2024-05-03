"use client";
import { ptSerif } from "@/assets/fonts";
import useClickOutside from "@/lib/useClickOutside";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import avatar from "../../assets/cart.svg";

const navItems = ["Equipment", "About us", "Blog"];

export const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useClickOutside(() => setDropdown(false));

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`flex w-screen justify-between items-center px-[80px] py-[64px] fixed z-30 text-[18px] leading-[21.78px] max-sm:px-[24px]`}
    >
      <div className="flex gap-6 items-center">
        <div className="sm:hidden" ref={ref as RefObject<HTMLDivElement>}>
          <div
            onClick={() => setDropdown(!dropdown)}
            className={cn(`tham tham-e-squeeze tham-w-6 fill-white`, {
              "tham-active": dropdown,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner bg-white" />
            </div>
          </div>
          <div
            className={`z-10 ${
              !dropdown && "hidden"
            } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {navItems.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h1
          className={cn(
            "text-[32px] leading-[38px] tracking-[1%] ",
            ptSerif.className
          )}
          onClick={scrollTo}
        >
          HILL
        </h1>
      </div>
      <nav className="max-sm:hidden">
        <ul className="flex space-x-[32px] font-bold">
          <li className="cursor-pointer">Equipment</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </nav>
      <div className="flex gap-[8px]">
        <Image src={avatar} alt="avatar" />
        <p>Account</p>
      </div>
    </header>
  );
};
