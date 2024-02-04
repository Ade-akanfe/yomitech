const Board = () => {
  return (
    <div className="w-full bg-white h-screenVal flex justify-center items-center flex-col">
      <p className="text-deep_blue text-2xl">Board of Management</p>
      <div className="h-4/5 w-3/5 flex justify-between items-center">
        <div className="flex w-full justify-center items-center relative h-4/5 flex-col">
          <div className="h-full w-4/5 bg-black rounded curve"></div>
          <div className="w-full flex justify-center flex-col ">
            <p className="text-black text-center text-lg">
              Mr Abayomi Adegbite
            </p>
            <p className="text-gray-900 text-xs text-center">
              Director, Yomtech Limited
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center relative h-4/5 flex-col">
          <div className="h-full w-4/5 bg-black rounded curve_left"></div>
          <div className="w-2/3 flex justify-center flex-col ">
            <p className="text-black text-center text-lg">
              Mr Emmanuel Adegbite
            </p>
            <p className="text-gray-900 text-xs text-center">
              Co-Director, Yomtech Limited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
