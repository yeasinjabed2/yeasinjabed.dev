import { oxanium } from "@/styles/fonts";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsDownload, BsFacebook } from "react-icons/bs";

export default function Home() {
  const handleDownloadPDF = () => {
    window.open("/api/Yeasin_Hossain_Resume.pdf", "_blank");
  };
  return (
    <main className={oxanium.className}>
      <div className="flex justify-center items-center h-screen radial-gradient">
        <div className="flex flex-col gap-3 pb-20 lg:pb-0">
          <h4 className="text-lg font-semibold text-[--active]">
            Hi, I&apos;m
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[--text-primary] tracking-widest">
            YEASIN JABED
          </h1>
          <h5 className="text-sm md:text-base lg:text-lg text-[--text-secondary] font-light">
            A <span className="text-[--active]"> Web Developer </span>based in
            Bangladesh .
          </h5>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yeasinjabed2"
              className="hover:cursor-pointer hover:translate-y-[-3px] transition-all"
              target="_blank"
            >
              <AiFillGithub size="26px" />
            </a>
            <a
              href="https://twitter.com/yeasinjabed"
              className="hover:cursor-pointer hover:translate-y-[-3px] transition-all"
              target="_blank"
            >
              <AiOutlineTwitter size="26px" />
            </a>
            <a
              href="#"
              className="hover:cursor-pointer hover:translate-y-[-3px] transition-all"
            >
              <BsFacebook size="24px" />
            </a>
            <a
              href="#"
              className="hover:cursor-pointer hover:translate-y-[-3px] transition-all"
            >
              <AiFillLinkedin size="26px" />
            </a>
          </div>

          <div className="flex text-sm mt-3">
            <div className="flex border border-[--active-70] font-light text-[--active-70] rounded-md items-center">
              <Link
                href="/works"
                className="p-1 px-2 hover:cursor-pointer hover:opacity-70"
              >
                Works
              </Link>
              <span className="small-divider"></span>
              <Link
                href="/blogs"
                className="p-1 px-2 hover:cursor-pointer hover:opacity-70"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-10 hover:cursor-pointer hover:translate-y-[-5px] transition"
          onClick={handleDownloadPDF}
        >
          <div className="flex gap-3">
            <BsDownload size="20px" />
            <h5 className="text-base text-[--text-secondary] font-light">
              RESUME
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
}
