
const FeedbackTwo = () => {
  return (
    <div className="w-full h-auto bg-deep_blue flex flex-col justify-center items-center pb-10 ">
      <div className="w-11/12 xl:w-3/5 max-w-6xl h-auto flex justify-center items-center flex-col bg-gray-950 curve border-white border-2 rounded-tr-xl rounded-bl-xl  ">
        <p className="text-full text-xl xl:text-3xl text-white my-3 ">SUBSCRIBE</p>
        <div className="flex w-11/12 xl:w-8/12 justify-center items-center text-center flex-row bg-white h-12 rounded-md px-1">
          <span className="font-semibold text-sm px-4 py-2 w-4/12 text-deep_blue">
            FULL NAME{" "}
          </span>
          <input className="bg-deep_blue px-4 py-2 w-full outline-none focus:outline-none border-none focus:border-none text-white" />
        </div>
        <span className="h-5"></span>
        <div className="flex w-11/12 xl:w-8/12 justify-center items-center text-center flex-row bg-white h-12 rounded-md px-1">
          <span className="font-semibold text-sm px-4 py-2 w-4/12 text-deep_blue">
            Email{" "}
          </span>
          <input className="bg-deep_blue px-4 py-2 w-full outline-none focus:outline-none border-none focus:border-none text-white" />
        </div>
        <span className="h-5"></span>
        <div className="flex overflow-hidden py-1 w-11/12 xl:w-8/12 justify-center items-center text-center flex-row bg-white h-auto rounded-md px-1">
          <textarea
            row={20}
            col={10}
            className="bg-deep_blue px-4 w-full h-20 rounded-md outline-none focus:outline-none border-none focus:border-none text-white"
            placeholder="Ask your question"
          />
        </div>
        <span className="h-5"></span>
        <div className="flex mb-10 font-semibold text-deep_blue cursor-pointer overflow-hidden py-2  w-8/12 justify-center items-center text-center flex-row bg-white h-auto rounded-md px-1">
          Submit
        </div>
      </div>
    </div>
  );
};
export default FeedbackTwo;
