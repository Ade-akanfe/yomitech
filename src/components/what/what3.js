"use client";

import Image1 from "@/assets/images/01.jpg";
import Image2 from "@/assets/images/02.jpg";
import Image3 from "@/assets/images/03.jpg";
import Image4 from "@/assets/images/04.jpg";
import Image5 from "@/assets/images/05.jpg";
import Image6 from "@/assets/images/06.jpg";
import Image from "next/image";
import { useState } from "react";

const slides = [Image1, Image2, Image3, Image4, Image5, Image6];

const WhatThird = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeSlide = (direction) => {
    setCurrentIndex((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <section className="section gallery-section" id="work">
      <div className="section-inner">
        <div className="gallery-heading">
          <div className="section-heading">
            <p className="eyebrow eyebrow-light">A closer look</p>
            <h2>Care in every detail.</h2>
            <p>
              A selection of bodywork and refinishing from our workshop.
            </p>
          </div>
          <div className="gallery-controls" aria-label="Gallery controls">
            <button
              type="button"
              aria-label="Show previous photo"
              onClick={() => changeSlide(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Show next photo"
              onClick={() => changeSlide(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="gallery-layout">
          <div className="gallery-feature">
            <Image
              src={slides[currentIndex]}
              fill
              sizes="(max-width: 760px) 100vw, 60vw"
              alt={`Yomtech car body repair example ${currentIndex + 1}`}
            />
            <div className="gallery-caption">
              Bodywork and paintwork, finished with care
            </div>
          </div>
          <div className="gallery-thumbnails" aria-label="Choose a photo">
            {slides.map((image, index) => (
              <button
                className={`gallery-thumb${index === currentIndex ? " gallery-thumb-active" : ""}`}
                key={image.src}
                type="button"
                aria-label={`Show repair photo ${index + 1}`}
                aria-pressed={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={image}
                  fill
                  sizes="(max-width: 760px) 50vw, 20vw"
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatThird;
