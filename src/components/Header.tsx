import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import themeLight from "../assets/theme-light.svg";
import themeDark from "../assets/theme-dark.svg";
import { useCallback, useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const changeTheme = useCallback(() => {
    if (
      getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setItem("theme", "light");
    } else {
      setItem("theme", "dark");
    }
    changeTheme();
  };

  useEffect(() => {
    changeTheme();
  }, [changeTheme]);

  return (
    <header className="header flex items-center justify-between">
      <img
        src={theme === "dark" ? logoDark : logoLight}
        alt="The Kreator's Logo"
        draggable={false}
        width="86px"
        height="62px"
        className="w-[3.5em]"
      />
      <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
        <nav className="hidden md:block">
          <ul
            role="list"
            className="flex items-center gap-4 md:gap-8 lg:gap-12 *:font-bold"
          >
            <li>
              <a
                href="#home"
                className="after:block after:w-0 after:h-[0.2em] after:bg-current after:rounded-full after:mx-auto after:transition-[width] hover:after:w-full focus:after:w-full focus:outline-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="after:block after:w-0 after:h-[0.2em] after:bg-current after:rounded-full after:mx-auto after:transition-[width] hover:after:w-full focus:after:w-full focus:outline-none"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="after:block after:w-0 after:h-[0.2em] after:bg-current after:rounded-full after:mx-auto after:transition-[width] hover:after:w-full focus:after:w-full focus:outline-none"
              >
                Contact Me
              </a>
            </li>
            <a
              href="mailto:chimawisdom153@gmail.com"
              className="mb-[0.2em] bg-primary-400 text-neutral-100 py-2 px-5 rounded-full hover:bg-primary-500 focus-visible:bg-primary-500 transition-colors active:scale-95"
            >
              Send Me a Mail
            </a>
          </ul>
        </nav>
        <button
          onClick={handleChangeTheme}
          aria-label="change theme"
          className="active:scale-95"
        >
          <img
            src={theme === "dark" ? themeDark : themeLight}
            alt=""
            draggable={false}
            width="30px"
            height="30px"
          />
        </button>
      </div>
    </header>
  );
}
