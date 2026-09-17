const Video = () => (
  <div className="video">
    <video
      autoPlay
      muted
      loop
      preload="metadata"
      poster="/videos/awesome-video.jpg"
    >
      <source src="/videos/awesome-video.mp4" type="video/mp4" />
    </video>
    <div className="text">
      <h2>Super Awesome Video Here</h2>
      <p>Its All You Need</p>
      <button type="button">See More</button>
    </div>
  </div>
);

export default Video;