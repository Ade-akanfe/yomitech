import image1 from "@/assets/29019.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-evenly h-screenVal items-center ">
      <div className="h-screenVal w-full relative z-10">
        <Image
          src={image1.src}
          fill
          sized="100vw"
          quality={100}
          style={{
            objecFit: "cover",
            objectPosition: "center center",
          }}
          alt="yomitech background image"
        />
      </div>
      <div className="absolute bg-deep_blue h-screenVal w-full z-20 opacity-75"></div>
      <div className="absolute h-full w-full z-30 ">
        <div className="flex w-full h-full justify-center items-center flex-col">
          <p className="text-xl xs:text-3xl xl:text-7xl font-semibold text-white">
            YOMTECH LIMITED
          </p>
          <p className="text-sm xs:text-lg xl:text-xl pt-6 text-gray-400 w-4/5 xl:w-5/12 text-center tracking-widest">
            Car body repairs and advanced spray painting accident refurbishment
          </p>
          <p className="text-sm xs:text-md xl:text-lg pt-6 text-gray-400  w-4/5 xl:w-3/6 text-center tracking-widest">
            Offer a range of repair options at different price points to
            accommodate customers with varying budgets.
          </p>
          <p className="text-sm xs:text-lg xl:text-xl py-6 text-gray-400 w-4/5 xl:w-5/12 text-center tracking-widest lowercase">
            OFFICE ADDRESS: UNIT 8, COBHAMS ROAD, B9 4UP, BIRMINGHAMWEST
            MIDLANDS
          </p>
          <p className="text-sm xs:text-md xl:text-xl font-semibold cursor-pointer py-2 text-border_blue w-32 xs:w-3/5 xl:w-3/12 text-center bg-white border-border_blue rounded-2xl border-2">
            Book Us
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
