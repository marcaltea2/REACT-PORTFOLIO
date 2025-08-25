import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Images */}
      <div className="overflow-hidden rounded-xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : "translate-x-full absolute"
            }`}
          >
            {index === currentIndex && (
              <img src={img} alt={`Slide ${index}`} className="w-full" />
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 shadow-md"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 shadow-md"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
