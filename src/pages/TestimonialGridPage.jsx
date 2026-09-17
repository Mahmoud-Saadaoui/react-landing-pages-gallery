import TestimonialGridCard from "../components/TestimonialGrid/TestimonialGridCard";
import cards from "../components/TestimonialGrid/cards";
import "../components/TestimonialGrid/TestimonialGrid.css";

const TestimonialGridPage = () => (
  <div className="testimonial-grid min-h-screen bg-gray-200">
    <div className="container mx-auto max-w-7xl p-2 md:p-10">
      <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
        {cards.map((card) => (
          <TestimonialGridCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialGridPage;