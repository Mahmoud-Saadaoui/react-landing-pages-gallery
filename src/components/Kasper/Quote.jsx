import quoteBg from "./images/quote.jpg";

const Quote = () => (
  <div
    className="relative bg-cover py-[100px] text-center text-white before:absolute before:inset-0 before:bg-[rgba(0,0,0,.75)]"
    style={{ backgroundImage: `url(${quoteBg})` }}
  >
    <div className="relative mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <q className="mb-[20px] block text-[30px]">
        accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
        elit, eget tincidunt.
      </q>
      <span>John Doe</span>
    </div>
  </div>
);

export default Quote;