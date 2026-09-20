const Video = () => (
  <div className="relative before:absolute before:inset-0 before:bg-[rgba(0,0,0,.4)]">
    <video
      autoPlay
      muted
      loop
      preload="metadata"
      poster="/videos/awesome-video.jpg"
      className="w-full"
    >
      <source src="/videos/awesome-video.mp4" type="video/mp4" />
    </video>
    <div className="absolute top-1/2 w-full -translate-y-1/2">
      <div
        data-reveal
        className="bg-[rgba(15,116,143,.7)] p-[50px] text-center text-white"
      >
        <h2 className="mb-[30px] font-normal uppercase">
          Super Awesome Video Here
        </h2>
        <p className="mb-[30px]">Its All You Need</p>
        <button
          type="button"
          className="border-0 bg-black px-[20px] py-[10px] uppercase text-white"
        >
          See More
        </button>
      </div>
    </div>
  </div>
);

export default Video;