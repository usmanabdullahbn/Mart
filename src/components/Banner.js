import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showComponent, setShowComponent] = useState(true);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img4.8f7fc6b56e74dba2b6f9.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const preSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setShowComponent(window.innerWidth >= 750);
    };

    handleResize(); // check initial screen width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showComponent) {
    return null; // Don't render the component if the screen width is below 750px
  }

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400%] h-full flex transition-transform duration-1000"
        >
          {data.map((image, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={image}
              alt={`Img${index}`}
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute left-0 right-0 mx-auto bottom-16 sm:bottom-44 flex justify-center gap-8">
          <div
            onClick={preSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
