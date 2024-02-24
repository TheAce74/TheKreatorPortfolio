import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import curve1 from "../assets/curved1.png";
import curve2 from "../assets/curved2.png";
import curve3 from "../assets/curved3.png";
import { FaStar } from "react-icons/fa6";
import { useTrail, animated, useInView } from "@react-spring/web";

const testimonials = [
  {
    image: person1,
    name: "Iheanacho Vivian",
    profession: "DIGITAL MARKETER",
    first: '"I got Wisdom to come up with a design for my Twitter banner.',
    second:
      "And I was surprised by the creativity. He designed a banner that not only suits my personal brand, but it also helped me stand out.",
    third: '100% recommend him."',
  },
  {
    image: person2,
    name: "Glory Daniel",
    profession: "BUSINESS OWNER",
    first:
      '"When it comes to designing marketing creatives, Wisdom is the one for the job.',
    second:
      "Had a skincare product I needed to sell out quickly, I had been running ads but I hadn't been seeing any results.",
    third:
      'Got on a live call with him, we changed the headline, added a CTA and then boom massive sales!!"',
  },
  {
    image: person3,
    name: "Emmanuel Onyemuche",
    profession: "CEO, ALPHY TECHNOLOGIES",
    first:
      '"I grew my sales from mere peanuts to about 5x in profit since I started working with Wisdom for my designs.',
    second:
      "I'm a strong believer in doing what works, this guy makes the whole ad thing work!",
    third: 'Save yourself the design hassle."',
  },
  {
    image: person4,
    name: "Zubby Uhuo",
    profession: "INTERNET MARKETER & CONTENT CREATOR",
    first: '"My webinar designs were basically text on a background...',
    second:
      "But I found a guy that gave life to my designs, delivers fast and also asks for my feedback at every phase of the design process. That's Wisdom.",
    third: 'Definitely recommend him!."',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    rootMargin: "-40% 0%",
    once: true,
  });
  const trails = useTrail(testimonials.length, {
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 210, friction: 20 },
    from: {
      opacity: 0,
    },
  });

  return (
    <section ref={ref} id="testimonials" className="section relative">
      <h2 className="mx-auto text-center w-max bg-primary-500 dark:bg-primary-900 text-neutral-100 font-semibold py-3 px-20 rounded-full">
        Testimonials
      </h2>
      <ul
        role="list"
        className="md:grid md:grid-cols-5 md:[&>*:nth-child(2)]:-translate-y-[15%] md:[&>*:nth-child(3)]:-translate-y-[30%] md:[&>*:nth-child(4)]:-translate-y-[45%]"
      >
        {trails.map((props, index) => (
          <animated.li
            key={`testimonial-${index}`}
            className="mt-8 md:mt-0 md:first:mt-8 border-[3px] border-primary-900 dark:border-primary-500 rounded-3xl p-6 bg-primary-500 dark:bg-primary-900 text-neutral-100 md:odd:col-start-1 md:odd:col-end-4 md:even:col-start-3 md:even:col-end-6 md:even:shadow-md md:even:shadow-primary-900 md:even:z-10"
            style={props}
          >
            <div className="flex gap-4 items-center mb-5">
              <img
                src={testimonials[index].image}
                alt={`design ${index}`}
                draggable={false}
                width="96px"
                height="96px"
                className="rounded-[50%] w-16"
              />
              <div>
                <h3 className="font-semibold">{testimonials[index].name}</h3>
                <p className="tracking-[3px] text-sm my-0.5">
                  {testimonials[index].profession}
                </p>
                <div className="flex gap-1 items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div>
              <p>{testimonials[index].first}</p>
              <p className="my-4">{testimonials[index].second}</p>
              <p>{testimonials[index].third}</p>
            </div>
          </animated.li>
        ))}
      </ul>
      <img
        src={curve1}
        alt=""
        draggable={false}
        width="373px"
        height="647px"
        className="absolute top-0 right-[-1rem] w-48 -z-10 translate-y-full"
      />
      <img
        src={curve2}
        alt=""
        draggable={false}
        width="373px"
        height="647px"
        className="absolute top-0 left-[-1rem] w-48 -z-10 translate-y-5"
      />
      <img
        src={curve3}
        alt=""
        draggable={false}
        width="373px"
        height="647px"
        className="absolute bottom-0 right-[-1rem] w-48 -z-10 -translate-y-[130%]"
      />
    </section>
  );
}
