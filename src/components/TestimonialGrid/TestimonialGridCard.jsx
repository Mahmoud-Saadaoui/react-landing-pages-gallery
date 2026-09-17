import { quotation } from "./cards";

const TestimonialGridCard = ({ card }) => {
  const {
    name,
    role,
    image,
    boxClass,
    headline,
    headlineClass,
    detail,
    detailClass,
    quotation: showQuotation,
  } = card;

  return (
    <div className={boxClass}>
      {showQuotation && (
        <img
          src={quotation}
          alt=""
          aria-hidden="true"
          className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
        />
      )}
      <div className="flex z-10 space-x-4">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          loading="lazy"
        />
        <div className="text-sm">
          <h4 className="opacity-90">{name}</h4>
          <p className="opacity-50">{role}</p>
        </div>
      </div>
      <p className={`mt-6 text-xl ${headlineClass}`}>{headline}</p>
      <p className={detailClass}>{detail}</p>
    </div>
  );
};

export default TestimonialGridCard;