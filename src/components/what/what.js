import ProgressBar from "@/assets/icons/bars-progress-solid";
import HeadSet from "@/assets/icons/headset-solid";
import Helment from "@/assets/icons/helmet-safety-solid";
import Person from "@/assets/icons/person-solid";
import Seedling from "@/assets/icons/seedling-solid";
import Vial from "@/assets/icons/vial-circle-check-solid";

const What = () => {
  return (
    <div className="bg-white h-auto py-4 mt-4">
      <div className="py-10 bg-deep_blue flex flex-col justify-center items-center ">
        <span className="text-center text-xl font-semibold xl:text-2xl text-white py-2">
          What we do to serve you best
        </span>
        <div className="w-11/12 xl:w-2/4 text-gray-400 text-center py-3 xl:py-6">
          We as a company, we have always been passionate about cars and wanted
          to use our skills as team to help people restore and maintain the
          appearance of your vehicles
        </div>
        {/* 1,2,3 */}
        <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
          <div className="w-5/12 xl:w-3/12 h-60 flex justify-center items-center flex-col border-2 rounded-md bg-gray-950 rounded-tl-roundedem">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 xl:h-14 xl:w-14 flex justify-center items-center">
                <Vial />
              </span>
            </p>
            <p className="w-full text-sm xl:text-lg text-center text-white font-semibold mb-2">
              Quality Workmanship
            </p>
            <p className="w-11/12 xl:w-4/5 text-xs text-center text-gray-600">
              Striving for excellence in repair and restoration to ensure
              customer satisfaction
            </p>
          </div>
          <span className="w-3 xl:w-5"></span>
          <div className="w-5/12 xl:w-3/12 h-60 flex justify-center items-center flex-col border-2  rounded-tr-roundedem xl:rounded-md bg-gray-950">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 xl:h-14 xl:w-14 flex justify-center items-center">
                <Person />
              </span>
            </p>
            <p className="w-full text-sm xl:text-lg text-center text-white font-semibold mb-2">
              Honesty and Integrity
            </p>
            <p className=" xl:w-4/5 text-xs xl:text-sm text-center text-gray-600">
              Conducting business with transparency and ethical behaviour,
              providing accurate assessments and fair pricing
            </p>
          </div>
          <span className="xl:w-5 hiddem xl:block"></span>
          <div className="w-3/12 h-60 hidden xl:flex justify-center items-center flex-col border-2 rounded-md bg-gray-950 rounded-tr-roundedem">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-14 w-14 flex justify-center items-center">
                <HeadSet />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Customer Service
            </p>
            <p className="w-4/5 text-sm text-center text-gray-600">
              Priortizing customer's needs and providing a positive experience
              throughout the repair process
            </p>
          </div>
        </div>
        <div className="h-3 block xl:hidden"></div>
        <div className="w-full h-full flex xl:hidden flex-row flex-wrap justify-center items-center">
          <div className="w-5/12 h-60 flex justify-center items-center flex-col border-2 rounded-md bg-gray-950 ">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 flex justify-center items-center">
                <HeadSet />
              </span>
            </p>
            <p className="w-full text-center text-sm xl:text-lg text-white font-semibold mb-2">
              Customer Service
            </p>
            <p className="w-11/12 text-xs xl:text-sm text-center text-gray-600">
              Priortizing customer's needs and providing a positive experience
              throughout the repair process
            </p>
          </div>
          <span className="w-3"></span>
          <div className="w-5/12 h-60 flex justify-center items-center flex-col border-2 rounded-md bg-gray-950">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 flex justify-center items-center">
                <Seedling />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2 text-sm xl:text-lg">
              Environmental Responsibilty
            </p>
            <p className="w-11/12 text-xs xl:text-sm text-center text-gray-600">
              Implementing eco-friendly practices and using sustainable products
            </p>
          </div>
          {/* <span className="w-5"></span>` */}
        </div>
        <div className="h-3"></div>
        <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
          <div className="w-5/12 xl:w-3/12 h-60 flex justify-center items-center flex-col border-2 rounded-md bg-gray-950 rounded-bl-roundedem">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 xl:h-14 xl:w-14 flex justify-center items-center">
                <ProgressBar />
              </span>
            </p>
            <p className="w-full text-center text-xs xl:text-lg text-white font-semibold mb-2">
              Continuous Improvement
            </p>
            <p className="w-11/12 xl:w-4/5 text-xs xl:text-sm text-center text-gray-600">
              Staying updated with the latest repair techniques, tools and
              materials to deliver best result.
            </p>
          </div>
          <span className="hidden xl:block xl:w-5"></span>
          <div className="w-3/12  xl:h-60 hidden xl:flex justify-center items-center flex-col border-2 rounded-md bg-gray-950">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 xl:h-14 xl:w-14 flex justify-center items-center">
                <Seedling />
              </span>
            </p>
            <p className="w-full text-center text-white font-semibold mb-2">
              Environmental Responsibilty
            </p>
            <p className="w-4/5 text-sm text-center text-gray-600">
              Implementing eco-friendly practices and using sustainable products
            </p>
          </div>
          <span className="w-3 xl:w-5"></span>
          <div className="w-5/12 xl:w-3/12 h-60 flex justify-center items-center flex-col border-2 rounded-md bg-gray-950 rounded-br-roundedem">
            <p className="w-full flex items-center justify-center mb-6 mt-2 ">
              <span className="rounded-full bg-purple h-12 w-12 xl:h-14 xl:w-14 flex justify-center items-center">
                <Helment />
              </span>
            </p>
            <p className="w-full text-center text-sm xl:text-lg text-white font-semibold mb-2">
              Safety
            </p>
            <p className="w-11/12 xl:w-4/5 text-xs xl:text-sm text-center text-gray-600">
              Ensuring that repaired verhicles meet safety standard and are
              returned to customers in a safe condition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default What;
