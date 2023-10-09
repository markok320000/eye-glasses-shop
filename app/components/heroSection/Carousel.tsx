import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type CarouselProps = {
  slides: React.ReactNode[];
};

const Carousel = ({ slides }: CarouselProps) => {
  const [curr, setCurr] = React.useState(0);

  const prev = () => {
    setCurr((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurr((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleMouseEnter = () => {
    // add pause functionality here
  };

  const handleMouseLeave = () => {
    // add resume functionality here
  };

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => slide)}
      </div>
      <div>
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-1 rounded-full shadow bg-gray-800/80 text-white/80 hover:bg-gray-800"
        >
          <ChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-1 rounded-full shadow bg-gray-800/80 text-white/80 hover:bg-gray-800"
        >
          <ChevronRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
