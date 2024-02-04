"use client";
import IconBar from "@/assets/icons/bars-solid";
import Logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="w-full flex flex-row justify-evenly auto bg-deep_blue z-20 relative">
      <div className="h-20 w-9/12 xl:w-1/2 flex items-center justify-between xl:justify-center">
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
          <div className="text-purple text-lg font-semibold  xl:text-xl">
            <p>YOMTECH</p>
            <p>LIMITED</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden xl:flex justify-end ">
        <nav className="h-full w-full flex items-center justify-evenly ">
          <Link href="/ademola" className="text-white text-base">
            Home
          </Link>
          <Link href="/ademola" className="text-gray-600 text-base">
            About us
          </Link>
          <Link href="/ademola" className="text-gray-600 text-base">
            Our services
          </Link>
          <Link href="/ademola" className="text-gray-600 text-base">
            Contact
          </Link>
          <div className="w-2/12 flex items-center justify-center ">
            <div className="w-full text-center py-2 bg-white rounded-lg">
              Book us
            </div>
          </div>
        </nav>
      </div>
      <div className="w-auto flex  xl:hidden h-auto  justify-center items-center">
        <IconBar />
      </div>
    </div>
  );
};

export default HeaderComponent;
