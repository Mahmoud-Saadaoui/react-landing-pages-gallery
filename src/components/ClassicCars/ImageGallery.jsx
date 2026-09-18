import Section, { sectionHeading } from "./Section";
import { galleries } from "./data";

const galleryLefts = [
  "left-[50%]",
  "left-[30%] max-[1500px]:left-[25%] max-[750px]:left-[22%]",
  "left-[70%] max-[1500px]:left-[75%] max-[750px]:left-[78%]",
];

const ImageGallery = ({ open, onClose }) => (
  <Section
    id="image-gallery"
    className="flex flex-col justify-between max-[1500px]:h-auto max-[750px]:pt-[6rem] max-[750px]:pb-[1rem]"
    open={open}
    onClose={onClose}
  >
    <h1 className={`${sectionHeading} mb-[10rem]`}>Image Gallery</h1>
    {galleries.map((row, rowIndex) => (
      <div
        className="flex items-center justify-center my-[10rem] [perspective:10rem] max-[1500px]:my-[12rem] max-[600px]:my-[9rem]"
        key={rowIndex}
      >
        <div className="relative mx-auto h-[3rem] w-4/5 bg-[rgba(38,126,199,0.8)] shadow-[1rem_1rem_5rem_#444] max-[1500px]:w-[90%] max-[750px]:h-[1.5rem] max-[750px]:w-[95%]">
          <span className="absolute left-0 top-[-10rem] h-[10rem] w-full origin-bottom bg-[rgba(34,152,248,0.7)] [transform:rotateX(20deg)] max-[750px]:top-[-5rem] max-[750px]:h-[5rem]"></span>
        </div>
        {row.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className={`absolute bottom-[6rem] w-[15%] origin-bottom rounded-[0.5rem] shadow-[0.2rem_-0.2rem_0.5rem_#888] transition-all duration-300 hover:shadow-[0_0.2rem_0.3rem_#888] [transform:translateX(-50%)_rotateX(0.5deg)] hover:[transform:translateX(-50%)_rotateX(0deg)] max-[1500px]:w-[20%] max-[750px]:w-[25%] max-[750px]:bottom-[4rem] ${galleryLefts[index]}`}
          />
        ))}
      </div>
    ))}
  </Section>
);

export default ImageGallery;