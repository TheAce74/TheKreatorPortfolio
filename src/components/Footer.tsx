import logoDark from "../assets/logo-dark.png";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import curve4 from "../assets/curved4.png";

export default function Footer() {
  return (
    <footer id="contact" className="section relative">
      <div className="w-[max(50%,_27ch)] mx-auto bg-primary-500 dark:bg-primary-900 text-neutral-100 py-4 px-8 my-12 md:-mt-12 rounded-full flex items-center justify-between">
        <img
          src={logoDark}
          alt="The Kreator's Logo"
          draggable={false}
          width="86px"
          height="62px"
          className="md:block w-14 hidden"
        />
        <ul
          role="list"
          aria-label="social links"
          className="flex items-center justify-center md:justify-right w-full md:w-max gap-6 md:gap-4"
        >
          <li aria-label="whatsapp">
            <a
              href="https://wa.link/b6du7i"
              target="_blank"
              className="text-4xl hover:text-indigo-300 focus:text-indigo-300 transition-colors"
            >
              <RiWhatsappFill />
            </a>
          </li>
          <li aria-label="instagram">
            <a
              href="http://instagram.com/kreatorgraphics"
              target="_blank"
              className="text-4xl hover:text-indigo-300 focus:text-indigo-300 transition-colors"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li aria-label="linkedin">
            <a
              href="https://www.linkedin.com/in/wisdom-the-kreator-5404201a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-3xl hover:text-indigo-300 focus:text-indigo-300 transition-colors"
            >
              <ImLinkedin />
            </a>
          </li>
          <li aria-label="x">
            <a
              href="https://x.com/kreatorgraphics?s=09"
              target="_blank"
              className="text-3xl hover:text-indigo-300 focus:text-indigo-300 transition-colors"
            >
              <BsTwitterX />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center font-bold opacity-60 text-sm mb-8">
        &copy; 2023 The Kreator. All Rights reserved.
      </p>
      <img
        src={curve4}
        alt=""
        draggable={false}
        width="373px"
        height="647px"
        className="absolute bottom-0 left-[-1rem] w-48 -z-10"
      />
    </footer>
  );
}
