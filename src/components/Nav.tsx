"use client";
import { navLinks } from "@/data/navlinks";
import { poppins } from "@/styles/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const Nav = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const hidden = isMenuOpen ? "" : "hidden";

  const pageTitle = navLinks.find((link) => link.path === pathName)?.title;

  return (
    <nav className={poppins.className}>
      <div
        className="flex justify-between p-10 md:hidden"
        onClick={() => console.log("click")}
      >
        <Link href="/" className="font-bold">
          {pageTitle}
        </Link>
        <button onClick={toggleMenu}>
          <CiMenuFries size="24px" />
        </button>
      </div>

      <div
        className={`${hidden} md:hidden absolute top-0 left-0 w-full h-screen bg-[--primary]`}
      >
        <button onClick={toggleMenu}>
          <TfiClose size="24px" className="absolute top-10 right-10" />
        </button>

        <ul className="w-full h-screen flex flex-col gap-10 font-light text-2xl items-center justify-center">
          {navLinks.map((link) => {
            const isActive = pathName === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`py-3 relative ${isActive ? "active" : ""}`}
                  onClick={toggleMenu}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="desktop hidden md:flex items-center justify-center gap-16 text-base py-10">
        {navLinks.map((link) => {
          const isActive = pathName === link.path;

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`py-3 relative ${isActive ? "active" : ""}`}
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
