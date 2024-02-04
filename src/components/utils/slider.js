import { useState } from "react";

const ImageSlider = ({ slides, currentIndex, nextIndex, prevIndex }) => {
  const slidestyles = {
    height: "100%",
    position: "relative",
    display: "flex",
    // justifyContent: "space-evenly",
  };
  const styles = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].src})`,
  };
  const styles01 = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[prevIndex].src})`,
  };
  const styles02 = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[nextIndex].src})`,
  };

  return (
    <div style={slidestyles} className="flex justify-evenly ">
      <div style={styles01} className="hidden xl:block"></div>
      <div style={styles} className="mx-2"></div>
      <div style={styles02} className="hidden xl:block"></div>
    </div>
  );
};

export default ImageSlider;
