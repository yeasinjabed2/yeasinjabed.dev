import { NavLayout } from "@/layout/NavLayout";
import contactImg from "@/static/images/contact.png";
import { oxanium } from "@/styles/fonts";
import Image from "next/image";
import { ReactNode } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={oxanium.className + " mt-20 pb-20"}>
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-[--text-primary] font-bold tracking-wider">
            CONTACT ME
          </h1>
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
        </div>

        <Image src={contactImg} alt="contact" className="hidden lg:block" />
      </div>

      <div className="mt-20 mb-20">
        <form>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-[--active-40] p-4 rounded-md bg-[--primary] text-[--text-primary]"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="border border-[--active-40] p-4 rounded-md bg-[--primary] text-[--text-primary]"
            ></textarea>
            <button className="bg-[--active-70] text-[--text-primary] p-3 rounded-md font-semibold text-md">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.getLayout = (page: ReactNode) => <NavLayout>{page}</NavLayout>;

export default Contact;
