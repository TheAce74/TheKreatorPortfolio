import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import curve2 from "../assets/curved2.png";

export default function Portfolio() {
  const images = [work1, work2, work3, work4, work5, work6];

  return (
    <section id="portfolio" className="section relative">
      <h2 className="mx-auto text-center w-max bg-primary-500 dark:bg-primary-900 text-neutral-100 font-semibold py-3 px-20 rounded-full">
        My Portfolio
      </h2>
      <h3 className="text-center text-primary-500 dark:text-primary-300 font-bold my-8 text-xl">
        Social Media Designs
      </h3>
      <ul
        role="list"
        className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8"
      >
        {images.map((image, index) => (
          <li key={`work-${index}`}>
            <img
              src={image}
              alt={`design ${index}`}
              draggable={false}
              width="360px"
              height="360px"
              className="mx-auto mb-8 md:mb-0 rounded-3xl"
            />
          </li>
        ))}
      </ul>
      <img
        src={curve2}
        alt=""
        draggable={false}
        width="373px"
        height="647px"
        className="absolute top-0 left-[-1rem] w-48 -z-10 translate-y-5"
      />
    </section>
  );
}
