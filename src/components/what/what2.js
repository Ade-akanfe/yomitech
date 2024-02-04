import ProgressBar from "@/assets/icons/bars-progress-solid";
import Accident from "@/assets/icons/car-burst-solid";
import Car from "@/assets/icons/car-solid";
import HeadSet from "@/assets/icons/headset-solid";
import Helment from "@/assets/icons/helmet-safety-solid";
import Person from "@/assets/icons/person-solid";
import Seedling from "@/assets/icons/seedling-solid";
import Vial from "@/assets/icons/vial-circle-check-solid";
import Wallet from "@/assets/icons/wallet-solid";

const WhatSecond = () => {
  return (
    <div className="bg-white h-auto py-4 mt-4">
      <div className="py-10 flex flex-col justify-center items-center ">
        <span className="text-center text-2xl py-2 text-deep_blue">
          What We Offer to Serve You Best
        </span>
        <div className="w-4/5 text-gray-600 text-center py-6">
          Unique Solution/Service: Mobile car body repair unit - we offer a
          mobile unit that can come to customer's location to access and repair
          their car body damage. This provides a convenient and efficient
          solution for customers who are unable to bring their vehicle to a
          traditional repair shop
        </div>
        <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
          <div className="w-3/12 h-64 flex justify-center items-center flex-col border-2 rounded-xl bg-dark_purple">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-deep_blue h-14 w-14 flex justify-center items-center">
                <Accident />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Accident and Collisions
            </p>
            <p className="w-4/5 text-sm text-center text-gray-400">
              Our car body repair business addresses the major problem of
              accidents and collisions that can damage the exterior of a
              vehicle, leaving it in need of repair.
            </p>
          </div>
          <span className="w-5"></span>
          <div className="w-3/12 h-64 flex justify-center items-center flex-col border-2 rounded-xl bg-dark_purple">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-deep_blue h-14 w-14 flex justify-center items-center">
                <Car />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Vehicle Aesthetics
            </p>
            <p className="w-4/5 text-sm text-center text-gray-400">
              We address the need for maintaining the aesthetics of a vehicle by
              providing services to repair dents, scratches, and paint damage,
              ensuring that our customers' cars look as good as new.
            </p>
          </div>
          <span className="w-5"></span>
          <div className="w-3/12 h-64 flex justify-center items-center flex-col border-2 rounded-xl bg-dark_purple">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-deep_blue h-14 w-14 flex justify-center items-center">
                <Wallet />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Safety Concerns
            </p>
            <p className="w-4/5 text-sm text-center text-gray-400">
              Our business addresses safety concerns by repairing structural
              damage to the car body, ensuring that the vehicle is safe to drive
              and providing peace of mind to our customers.
            </p>
          </div>
        </div>
        <div className="h-3"></div>
        <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
          <div className="w-3/12 h-64 flex justify-center items-center flex-col border-2 rounded-xl bg-dark_purple">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-deep_blue h-14 w-14 flex justify-center items-center">
                <Wallet />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Resale Value
            </p>
            <p className="w-4/5 text-sm text-center text-gray-400">
              We help our customers maintain the resale value of their vehicles
              by providing high-quality repairs that restore the car's
              appearance and structural integrity.
            </p>
          </div>
          <span className="w-5"></span>
          <div className="w-3/12 h-64 flex justify-center items-center flex-col border-2 rounded-xl bg-dark_purple">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-gray-950 h-14 w-14 flex justify-center items-center">
                <HeadSet />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Customer Convenience
            </p>
            <p className="w-4/5 text-sm text-center text-gray-400">
              We address the need for convenience by offering efficient and
              reliable car body repair services, minimizing the inconvenience of
              having a damaged vehicle and allowing our customers to get back on
              the road as soon as possible.
            </p>
          </div>
          <span className="w-5"></span>
        </div>
      </div>
    </div>
  );
};
export default WhatSecond;
