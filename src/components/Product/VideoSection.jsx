import { useRef } from "react";
import { FaFilm } from "react-icons/fa";
import videoSrc from "./video/video.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);

  return (
    <section className="video">
      <video id="video1" ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay">
        <button type="button" onClick={() => (videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause())}>
          <FaFilm aria-hidden="true" />
          مشاهدة الفيديو
        </button>
      </div>
    </section>
  );
}