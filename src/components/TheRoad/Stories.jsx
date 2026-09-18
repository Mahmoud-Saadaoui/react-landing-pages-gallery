import { stories } from "./data";

const Stories = () => (
  <section className="relative py-[10rem]">
    <div className="absolute left-0 top-0 h-full w-full opacity-40">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        preload="metadata"
        poster="/videos/the-road.jpg"
      >
        <source src="/videos/the-road.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="flex flex-col items-center">
      {stories.map((story, index) => (
        <div
          className="m-[5rem] w-[70%] skew-x-[20deg] bg-[rgba(238,238,238,0.85)] p-[5rem] shadow-[0_2rem_5rem_rgba(51,51,51,0.4)] max-[1200px]:w-[85%] max-[1000px]:skew-x-0"
          key={index}
        >
          <div className="flex -skew-x-[20deg] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:skew-x-0">
            <img
              src={story.image}
              alt="Customer image"
              className="mr-[5rem] h-[20rem] w-[20rem] rounded-full object-cover max-[1000px]:mb-[3rem]"
              loading="lazy"
            />
            <div className="tracking-[0.1rem]">
              <h1 className="mb-[1rem] text-[2.5rem] uppercase text-[#555]">
                {story.heading}
              </h1>
              <p className="text-[1.8rem] text-[#777] [&::first-letter]:ml-[1rem]">
                {story.paragraph}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stories;