import Section from "./Section";
import { videos } from "./data";

const poster = (src) => src.replace(/\.mp4$/, ".jpg");

const VideoCard = ({ src }) => (
  <video
    src={src}
    poster={poster(src)}
    muted
    loop
    preload="none"
    className="video"
    onMouseEnter={(e) => e.currentTarget.play()}
    onMouseLeave={(e) => e.currentTarget.pause()}
  />
);

const VideoGallery = ({ open, onClose }) => (
  <Section
    id="video-gallery"
    className="section-3 target"
    open={open}
    onClose={onClose}
  >
    <h1 className="section-heading">Video Gallery</h1>
    <div className="videos-wrapper center">
      {videos.slice(0, 3).map((src) => (
        <VideoCard key={src} src={src} />
      ))}
    </div>
    <div className="videos-wrapper center">
      {videos.slice(3).map((src) => (
        <VideoCard key={src} src={src} />
      ))}
    </div>
  </Section>
);

export default VideoGallery;