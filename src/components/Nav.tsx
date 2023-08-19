"use client";
import { poppins } from "@/styles/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Works",
    path: "/works",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Nav = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => console.log("toggle");
  const hidden = isMenuOpen ? "" : "hidden";
  console.log(hidden);

  return (
    <nav className={poppins.className}>
      <div
        className="flex justify-end p-10 md:hidden"
        onClick={() => console.log("click")}
      >
        <button onClick={() => console.log("click")}>
          <CiMenuFries size="24px" onClick={() => console.log("click")} />
        </button>
        <button onClick={() => console.log("click")}>fasdf</button>
      </div>
      <div
        className={`${hidden} md:hidden absolute top-0 left-0 w-full h-screen bg-[--primary]`}
      >
        <TfiClose size="24px" className="absolute top-10 right-10" />

        <ul className="w-full h-screen flex flex-col gap-10 font-light text-2xl items-center justify-center">
          {navLinks.map((link) => {
            const isActive = pathName === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`py-4 relative ${isActive ? "active" : ""}`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="desktop hidden md:flex items-center justify-center gap-14 text-base py-10">
        {navLinks.map((link) => {
          const isActive = pathName === link.path;

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`py-4 relative ${isActive ? "active" : ""}`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
