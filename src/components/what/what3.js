import Direction from "@/assets/icons/direction";
import GreaterThan from "@/assets/icons/greater_than";
import LessThan from "@/assets/icons/lessThan";
import Image1 from "@/assets/images/01.jpg";
import Image2 from "@/assets/images/02.jpg";
import Image3 from "@/assets/images/03.jpg";
import Image4 from "@/assets/images/04.jpg";
import Image5 from "@/assets/images/05.jpg";
import Image6 from "@/assets/images/06.jpg";
import Image7 from "@/assets/images/07.jpg";
import Image8 from "@/assets/images/08.jpg";
import Image9 from "@/assets/images/09.jpg";
import Image10 from "@/assets/images/10.jpg";
import Image11 from "@/assets/images/11.jpg";
import Image12 from "@/assets/images/12.jpg";
import Image13 from "@/assets/images/13.jpg";
import Image14 from "@/assets/images/14.jpg";
import Image15 from "@/assets/images/15.jpg";
import Image16 from "@/assets/images/16.jpg";
import Image17 from "@/assets/images/17.jpg";
import Image18 from "@/assets/images/18.jpg";
import Image19 from "@/assets/images/19.jpg";
import Image20 from "@/assets/images/20.jpg";
import Image21 from "@/assets/images/21.jpg";
import Image22 from "@/assets/images/22.jpg";
import Image23 from "@/assets/images/23.jpg";
import Image24 from "@/assets/images/24.jpg";
import Image25 from "@/assets/images/25.jpg";
import Image26 from "@/assets/images/26.jpg";
import Image27 from "@/assets/images/27.jpg";
import Image28 from "@/assets/images/28.jpg";
import Image29 from "@/assets/images/29.jpg";
import Image30 from "@/assets/images/30.jpg";
import Image31 from "@/assets/images/31.jpg";
import Image32 from "@/assets/images/32.jpg";
import Image33 from "@/assets/images/33.jpg";
import Image34 from "@/assets/images/34.jpg";
import ImageSlider from "../utils/slider";
import { useState, useEffect } from "react";

const WhatThird = () => {
  const slides = [
    {
      ...Image1,
      alt: "body-part repair",
    },
    {
      ...Image2,
      alt: "body-part repair",
    },
    {
      ...Image3,
      alt: "body-part repair",
    },
    {
      ...Image4,
      alt: "body-part repair",
    },
    {
      ...Image5,
      alt: "body-part repair",
    },
    {
      ...Image6,
      alt: "body-part repair",
    },
    {
      ...Image7,
      alt: "body-part repair",
    },
    {
      ...Image8,
      alt: "body-part repair",
    },
    {
      ...Image9,
      alt: "body-part repair",
    },
    {
      ...Image10,
      alt: "body-part repair",
    },
    {
      ...Image11,
      alt: "body-part repair",
    },
    {
      ...Image12,
      alt: "body-part repair",
    },
    {
      ...Image13,
      alt: "body-part repair",
    },

    {
      ...Image14,
      alt: "body-part repair",
    },
    {
      ...Image15,
      alt: "body-part repair",
    },

    {
      ...Image16,
      alt: "body-part repair",
    },
    {
      ...Image17,
      alt: "body-part repair",
    },
    {
      ...Image18,
      alt: "body-part repair",
    },
    {
      ...Image19,
      alt: "body-part repair",
    },
    {
      ...Image20,
      alt: "body-part repair",
    },

    {
      ...Image21,
      alt: "body-part repair",
    },
    {
      ...Image22,
      alt: "body-part repair",
    },
    {
      ...Image23,
      alt: "body-part repair",
    },
    {
      ...Image24,
      alt: "body-part repair",
    },
    {
      ...Image25,
      alt: "body-part repair",
    },
    {
      ...Image26,
      alt: "body-part repair",
    },
    {
      ...Image27,
      alt: "body-part repair",
    },
    {
      ...Image28,
      alt: "body-part repair",
    },
    {
      ...Image29,
      alt: "body-part repair",
    },
    {
      ...Image30,
      alt: "body-part repair",
    },
    {
      ...Image31,
      alt: "body part repair",
    },
    {
      ...Image32,
      alt: "body part repair",
    },
    {
      ...Image33,
      alt: "body part repair",
    },
    {
      ...Image34,
      alt: "body part repair",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(slides.length - 1);
  const prevHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setPrevIndex((prev) => (newIndex === 0 ? slides.length - 1 : newIndex - 1));
    setNextIndex((prev) => (newIndex === slides.length - 1 ? 0 : newIndex + 1));
  };
  const nextHandler = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setPrevIndex((prev) => (newIndex === 0 ? slides.length - 1 : newIndex - 1));
    setNextIndex((prev) => (newIndex === slides.length - 1 ? 0 : newIndex + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => nextHandler(), 4000);
    return () => clearInterval(interval);
  });
  return (
    <div className="h-auto flex justify-center items-center flex-col w-full">
      <div className="w-full xl:w-4/5 my-9 flex flex-col justify-center items-center max-w-7xl">
        <div className="flex w-full flex-col xl:flex-row max-w-6xl justify-between items-center mb-6 h-auto">
          <div className="w-full max-w-80 xl:items-center xl:w-2/5 flex flex-col relative text-gray-200 xl:justify-center">
            <p className="w-auto text-lg mb-2 flex xl:w-full  capitalize">
              Our car body repair business{" "}
              <span className="inline h-auto ml-2 ">
                <Direction />
              </span>
            </p>
            <div className="w-screen flex flex-col relative text-gray-200 justify-center xl:items-start xl:w-full ">
              <span className="max-w-72 xl:w-full text-sm">
                Addresses the major problem of accidents and collisions that can
                damage the exterior of a vehicle, leaving it in need of repair.
              </span>
            </div>
          </div>
          <div className="items-center flex flex-col xl:w-2/5 relative text-gray-400 mt-4 mb-5 xl:mt-5 h-full">
            <span className="w-4/5 text-gray-200 text-sm">
              Ensuring that repaired vehicles meet safety standards and are
              returned to customers in a safe condition.
            </span>
            <div className="flex cursor-pointer justify-center items-center">
              <span
                onClick={prevHandler}
                className="rounded-full h-10 mr-5 w-10 flex justify-center items-center"
              >
                <LessThan />
              </span>
              <span
                onClick={nextHandler}
                className="rounded-full bg-purple h-8 w-8 flex justify-center items-center"
              >
                <GreaterThan />
              </span>
            </div>
          </div>
        </div>
        <div className="m-auto h-screenVal xl:h-80 w-full max-w-6xl">
          <ImageSlider
            slides={slides}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            nextIndex={nextIndex}
          />
        </div>
      </div>
    </div>
  );
};
export default WhatThird;
