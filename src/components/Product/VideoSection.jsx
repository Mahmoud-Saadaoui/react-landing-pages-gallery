import { useRef } from "react";
import { FaFilm } from "react-icons/fa";
import videoSrc from "./video/video.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);

  return (
    <section className="video relative min-h-screen overflow-hidden">
      <video id="video1" ref={videoRef} className="absolute left-0 top-0 min-h-full min-w-full">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay absolute inset-0 z-[1] bg-[#6a3093]/70"></div>
      <button
        type="button"
        onClick={() => (videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause())}
        className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 border-0 bg-transparent text-[30px] text-white outline-none"
      >
        <FaFilm aria-hidden="true" />
        مشاهدة الفيديو
      </button>
    </section>
  );
}