"use client";
import IconBar from "@/assets/icons/bars-solid";
import Logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeaderComponent = () => {
  const [open, setOPen] = useState(false);
  return (
    <div className="w-full  flex flex-row justify-evenly auto bg-deep_blue z-50 relative">
      <div className="h-20 w-9/12 max-w-2xl xl:w-1/2 flex items-center justify-between xl:justify-center">
        <div className="w-full xl:w-1/2 flex items-center">
          <div className="relative  h-8 w-10  xl:h-12 xl:w-14 mr-2 justify-center items-center">
            <Image
              src={Logo.src}
              fill
              sized="100vw"
              alt="yomitech's logo"
              quality={100}
              style={{
                objecFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          <div className="text-white text-lg font-bold  xl:text-xl">
            <p>YOMTECH</p>
            <p>LIMITED</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden xl:flex justify-end max-w-3xl">
        <nav className="h-full w-full flex items-center justify-evenly ">
          <Link href="#/" className="text-white text-base">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 text-base">
            About us
          </Link>
          <Link href="#service" className="text-gray-600 text-base">
            Our services
          </Link>
          <Link href="#contact" className="text-gray-600 text-base">
            Contact
          </Link>
          <div className="w-2/12 flex items-center justify-center ">
            <div className="w-full text-center py-2 bg-white rounded-lg">
              Book us
            </div>
          </div>
        </nav>
      </div>
      <div
        onClick={() => setOPen((prev) => !prev)}
        className="w-auto flex relative z-20  xl:hidden h-auto  justify-center items-center"
      >
        <IconBar />
      </div>
      {open && (
        <div className="absolute right-0 h-screen w-2/3 z-40 bg-deep_blue sm:hidden">
          <div
            onClick={() => setOPen((prev) => !prev)}
            className="font-bold text-white text-3xl border-white border-2 w-20 flex justify-center"
          >
            X
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <ul className="text-white text-lg flex flex-col h-full w-full justify-evenly items-center">
              <Link href="#" onClick={() => setOPen(false)}>
                Home
              </Link>
              <Link href="#about " onClick={() => setOPen(false)}>
                About Us
              </Link>
              <Link href="#service" onClick={() => setOPen(false)}>
                Our Services
              </Link>
              <Link href="#contact" onClick={() => setOPen(false)}>
                Contact Us
              </Link>
              <div className="w-auto flex items-center justify-center ">
                <div
                  className="w-32 text-center py-2 bg-white text-deep_blue rounded-lg "
                  onClick={() => setOPen(false)}
                >
                  Book us
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
