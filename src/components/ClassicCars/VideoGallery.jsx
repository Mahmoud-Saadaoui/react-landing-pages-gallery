import Section, { sectionHeading } from "./Section";
import { videos } from "./data";

const poster = (src) => src.replace(/\.mp4$/, ".jpg");

const VideoCard = ({ src }) => (
  <video
    src={src}
    poster={poster(src)}
    muted
    loop
    preload="none"
    className="mx-[2rem] w-[25%] rounded-[0.5rem] opacity-80 shadow-[0.3rem_0.3rem_0.5rem_#111] transition-all duration-500 hover:opacity-100 hover:shadow-[0.5rem_0.5rem_1rem_#111] max-[1500px]:m-[2rem] max-[1500px]:w-[30%] max-[1000px]:my-[3rem] max-[1000px]:w-[70%] max-[600px]:my-[2rem] max-[600px]:w-full"
    onMouseEnter={(e) => e.currentTarget.play()}
    onMouseLeave={(e) => e.currentTarget.pause()}
  />
);

const VideoGallery = ({ open, onClose }) => (
  <Section
    id="video-gallery"
    className="flex flex-col justify-around bg-[#222] max-[1500px]:px-[3rem] max-[1000px]:h-auto"
    open={open}
    onClose={onClose}
  >
    <h1 className={`${sectionHeading} mb-[10rem]`}>Video Gallery</h1>
    <div className="flex items-center justify-center max-[1000px]:flex-col">
      {videos.slice(0, 3).map((src) => (
        <VideoCard key={src} src={src} />
      ))}
    </div>
    <div className="flex items-center justify-center max-[1000px]:flex-col">
      {videos.slice(3).map((src) => (
        <VideoCard key={src} src={src} />
      ))}
    </div>
  </Section>
);

export default VideoGallery;