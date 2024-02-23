import profile from "../assets/profile.png";
import curve1 from "../assets/curved1.png";
import { useInView, animated } from "@react-spring/web";

export default function Home() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  return (
    <animated.section
      id="home"
      className="section relative"
      ref={ref}
      style={springs}
    >
      <div className="p-8 bg-primary-500 dark:bg-primary-900 rounded-[2em] md:grid md:grid-cols-2 md:gap-8 md:items-center lg:py-16">
        <div>
          <img
            src={profile}
            alt="The Kreator Himself"
            draggable={false}
            width="430px"
            height="422px"
            className="rounded-[2em] mx-auto w-[min(100%,_20em)]"
          />
          <p className="mt-6 mb-6 md:mb-0 mx-auto text-center w-[min(100%,_20em)] bg-neutral-100 text-neutral-900 font-bold py-3 px-6 rounded-full">
            Brand Marketing Designer
          </p>
        </div>
        <div className="*:text-neutral-100 *:font-semibold text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-4">
            <span>Hi there!! I'm Wisdom</span>
            <br />
            <span>The Kreator</span>
          </h1>
          <p>
            I'm a Creative Designer who loves working with brands, businesses &
            marketers to craft appealing designs to help them effectively market
            their offers and services.
          </p>
          <a
            href="mailto:chimawisdom153@gmail.com"
            className="block mt-6 w-max mx-auto md:mx-0 bg-primary-900 dark:bg-primary-500 text-neutral-100 py-3 px-6 rounded-full hover:bg-neutral-900 focus-visible:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus-visible:bg-neutral-900 transition-colors active:scale-95 md:hidden"
          >
            Work With Me
          </a>
        </div>
      </div>
      <img
        src={curve1}
        alt=""
        draggable={false}
        width="373px"
        height="647px"
        className="absolute bottom-0 right-[-1rem] w-48 translate-y-[55%] sm:translate-y-1/2 md:translate-y-1/3"
      />
    </animated.section>
  );
}
