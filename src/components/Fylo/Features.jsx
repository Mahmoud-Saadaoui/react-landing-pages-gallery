import { features } from "./data";

const FeatureItem = ({ item }) => (
  <div className="flex flex-col items-center space-y-2 md:w-1/2">
    <div className="mb-6 flex h-24 items-center justify-center">
      <img src={item.icon} alt="" loading="lazy" />
    </div>
    <h3 className="text-xl font-bold">{item.title}</h3>
    <p className="max-w-md">{item.description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="bg-gray-50 pt-12 dark:bg-darkBlue1">
    <div className="container mx-auto px-6 pb-32">
      <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
        {features.slice(0, 2).map((item) => (
          <FeatureItem key={item.title + item.icon} item={item} />
        ))}
      </div>

      <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
        {features.slice(2).map((item) => (
          <FeatureItem key={item.title + item.icon} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;