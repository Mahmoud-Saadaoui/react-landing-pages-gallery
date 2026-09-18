import { gallery } from "./data";

const Gallery = ({ onOpen }) => (
  <div className="gallery py-[50px] text-center">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="mb-[50px] text-center text-[30px] font-bold text-[var(--main-color)]">
        Our Gallery
      </h2>
      <div className="text-center">
        {gallery.map(({ src, alt }) => (
          <img
            src={src}
            alt={alt}
            key={src}
            className="m-[5px] w-[200px] cursor-pointer border border-[#CCC] bg-[#F6F6F6] p-[3px]"
            onClick={() => onOpen({ src, alt })}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;