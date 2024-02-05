import Envelope from "@/assets/icons/envelope-regular";
import Location from "@/assets/icons/location-dot-solid";
import Phone from "@/assets/icons/phone-solid";

const Feedback = () => {
  return (
    <div className="w-full h-screem bg-deep_blue flex flex-col justify-center items-center pt-10 pb-10">
      <div className="w-11/12 xl:w-3/5 h-auto flex justify-center items-center flex-col bg-gray-950 curve_left border-white border-2 rounded-tr-xl rounded-bl-xl  ">
        <p className="text-full text-xl xl:text-3xl text-white my-5 ">
          Contact Details
        </p>
        <div className="flex justify-center items-center text-center flex-col">
          <span className="rounded-3xl bg-purple h-12 w-12 xl:h-14 xl:w-14 flex justify-center items-center">
            <Location />
          </span>
          <span className="text-white xl:text-xl my-2">
            UNIT 8, COBHAMS ROAD, B9 4UP, BIRMINGHAMWEST MIDLANDS
          </span>
        </div>
        <div className="flex justify-center items-center text-center flex-col">
          <span className="rounded-3xl bg-purple h-12 w-12 xl:h-14 xl:w-14  flex justify-center items-center">
            <Envelope />
          </span>
          <span className="text-white xl:text-xl my-2">INFO@YOMTECH.CO.UK</span>
        </div>
        <div className="flex justify-center items-center text-center flex-col">
          <span className="rounded-3xl bg-purple h-12 w-12 xl:h-14 xl:w-14  flex justify-center items-center">
            <Phone />
          </span>
          <span className="text-white xl:text-xl my-2">+447538733798</span>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
