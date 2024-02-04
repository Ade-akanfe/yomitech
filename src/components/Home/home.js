import image1 from "@/assets/29019.jpg";
import Image from "next/image";

const HomePage = () => {
  
  return (
    <div className="flex flex-row justify-evenly h-screenVal bg-white items-center">
      <div className="w-full flex justify-center items-center h-full flex-col">
        <div>
          <div>
            <p className="text-deep_blue font-bold text-6xl text-left">
              YOMTECH
            </p>
            <p className="text-deep_blue font-bold text-6xl text-left">
              LIMITED
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xl text-left">
              Automobile Car Body
            </p>
            <p className="text-gray-500 text-xl text-left">Repairs Company</p>
          </div>
          <div className="text-gray-600 text-md text-left font-light">
            <p>Offers a range of repair options at different Offers a range</p>
            <p>of repair options at different price points</p>
            <p> to accomodate customers with varying budgets</p>
          </div>
          <div className="w-1/2 flex justify-end items-center py-5">
            <div className="py-2 px-14 rounded-lg bg-deep_blue text-white font-semibold  hover:bg-white hover:text-deep_blue shadow-2xl shadow-gray-900">Book Us</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative">
          <Image
            src={image1.src}
            blurDataURL={image1.blurDataURL}
            width={700}
            height={600}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
