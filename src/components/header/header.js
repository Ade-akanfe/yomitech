"use client";


import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="w-full flex flex-row justify-evenly auto bg-deep_blue">
      <div className="h-20 w-full flex items-center justify-center">
        <div>
          
        </div>
        <div className="text-purple text-lg">
          <p>YOMTECH</p>
          <p>LIMITED</p>
        </div>
      </div>
      <div className="w-full">
        <nav className="h-full w-full flex items-center justify-between ">
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
        </nav>
      </div>
      <div className="w-full flex items-center justify-center ">
        <div className="px-8 bg-white py-2 rounded-lg">Book us</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
