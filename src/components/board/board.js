import Logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-deep_blue h-auto justify-center items-center">
      <div className="w-full h-1 bg-white mb-10"></div>
      <div className=" w-full xl:w-5/6 max-w-6xl  flex justify-evenly items-center flex-col xl:flex-row">
        <div className="w-4/5 xl:w-1/3">
          <div className="flex w-full">
            <div className="relative h-16 w-16 mr-2">
              <Image
                src={Logo.src}
                fill
                sized="100vw"
                quality={100}
                style={{
                  objecFit: "cover",
                  objectPosition: "center center",
                }}
                alt="Yomitech logo"
              />
            </div>
            <div className="flex flex-col font-bold items-center justify-center text-2xl text-white">
              <span>YOMTCH</span>
              <span>LIMITED</span>
            </div>
          </div>
          <div className="text-gray-400 text-lg xl:text-xl my-6 capitalize">
            Car body repairs and advanced spray painting accident refurbishment
          </div>
          <div className="text-gray-400 text-lg xl:text-xl mb-6 capitalize">
            Offer a range of repair options at different price points to
            accommodate customers with varying budgets.
          </div>
          <div className="text-gray-400 text-lg xl:text-xl mb-6 lowercase">
            OFFICE ADDRESS: UNIT 8, COBHAMS ROAD,B9 4UP, BIRMINGHAMWEST MIDLANDS
          </div>
        </div>
        <div className="w-full xl:w-auto h-auto flex flex-col justify-center items-center xl:items-start">
          <div className="text-white w-4/5 xl:w-auto text-xl">
            OUR CATEGORIES
          </div>
          <ul className="text-gray-400 flex w-4/5 xl:w-auto xl:flex-col justify-between xl:justify-evenly h-1/2">
            <li className="xl:mt-5">
              <Link href="#">Home</Link>
            </li>
            <li className="xl:my-5">
              <Link href="#about">About us</Link>
            </li>
            <li>
              <Link href="#service">Our Services</Link>
            </li>
            <li className="xl:my-6">
              <Link href="#contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
