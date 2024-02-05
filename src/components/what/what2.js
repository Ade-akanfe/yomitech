import Accident from "@/assets/icons/car-burst-solid";
import Car from "@/assets/icons/car-solid";
import HeadSet from "@/assets/icons/headset-solid";
import Helment from "@/assets/icons/helmet-safety-solid";
import Wallet from "@/assets/icons/wallet-solid";

const WhatSecond = () => {
  return (
    <div className="bg-white h-auto py-4 mt-4 flex justify-center items-center ">
      <div className="w-full max-w-8xl xl:w-11/12 flex flex-col xl:flex-row justify-evenly">
        <div className="h-auto flex w-full xl:w-3/4 justify-center items-center flex-col">
          <p className=" w-full text-center xl:text-start xl:w-1/2 tracking-wider mb-3 text-xl xl:text-4xl text-deep_blue font-semibold">
            What we Offer to serve you best
          </p>
          <div className="w-4/5 text-start xl:w-1/2 text-sm xl:text-xl tracking-wide text-deep_blue">
            Unique Solution/Service: Mobile car body repair unit. We offer a
            mobile unit that can come to the customer &#39;s location to assess
            and repair their car body damage. This provides a convenient and
            efficient solution for customers who are unable to bring their
            vehicle to a traditional repair shop.
          </div>
        </div>
        <div className="h-full flex w-full xl:w-2/3 flex-row justify-evenly items-center flex-wrap">
          <div className="w-4/5  xl:w-2/5 h-64 mt-8 xl:mt-0 ">
            <div className="flex justify-center items-center rounded-full bg-black h-10 w-10 ">
              <Accident />
            </div>
            <span className="flex font-semibold text-deep_blue my-3">
              Accidents and Collisions
            </span>
            <span className="w-full text-gray-500">
              Our car body repair business addresses the major problem of
              accidents and collisions that can damage the exterior of a
              vehicle, leaving it in need of repair.
            </span>
          </div>
          <div className="w-4/5 xl:w-2/5 h-64 ">
            <div className="flex justify-center items-center rounded-full bg-black h-10 w-10 ">
              <Car />
            </div>
            <span className="flex font-semibold text-deep_blue my-3">
              Vehicle Aesthetics
            </span>
            <span className="w-full text-gray-500">
              We address the need for maintaining the aesthetics of a vehicle by
              providing services to repair dents, scratches, and paint damage,
              ensuring that our customers &#39; cars look as good as new.
            </span>
          </div>
          <div className=" w-4/5 xl:w-2/5 h-64 ">
            <div className="flex justify-center items-center rounded-full bg-black h-10 w-10 ">
              <Helment height={"20"} />
            </div>
            <span className="flex font-semibold text-deep_blue my-3">
              Safety Concerns
            </span>
            <span className="w-full text-gray-500">
              Our business addresses safety concerns by repairing structural
              damage to the car body, ensuring that the vehicle is safe to drive
              and providing peace of mind to our customers.
            </span>
          </div>
          <div className="w-4/5 xl:w-2/5 h-64 ">
            <div className="flex justify-center items-center rounded-full bg-black h-10 w-10 ">
              <Wallet />
            </div>
            <span className="flex font-semibold text-deep_blue my-3">
              Resale Value
            </span>
            <span className="w-full text-gray-500">
              We help our customers maintain the resale value of their vehicles
              by providing high-quality repairs that restore the car &#39;s
              appearance and structural integrity.
            </span>
          </div>
          <div className="w-4/5 max-w-xs h-64 xl:justify-center xl:flex xl:items-center flex-col mb-6 xl:mb-0">
            <div className="flex justify-center items-center rounded-full bg-black h-10 w-10 ">
              <HeadSet height={"20"} />
            </div>
            <span className="flex font-semibold text-deep_blue my-3">
              Customer Convenience
            </span>
            <span className="w-full text-gray-500 ">
              We address the need for convenience by offering efficient and
              reliable car body repair services, minimizing the inconvenience of
              having a damaged vehicle and allowing our customers to get back on
              the road as soon as possible.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatSecond;
