import React from "react";
import logo from "../assets/R.png";
import Play from "../icons/Play";
import Fork from "../icons/Fork";

const Profile = () => {
  return (
    <>
      <div className="p-4 w-full">
        <div className="w-full flex justify-center sm:justify-start">
          <img
            className="  bg-white w-24 h-24 rounded-lg shadow-lg p-4"
            src={logo}
            alt="Profile"
          />
        </div>
        <div className="w-full flex justify-center sm:justify-start mt-4">
          <h2 className="text-3xl font-semibold text-white">Favorite</h2>
        </div>
        <div className="w-full flex justify-center sm:justify-start mt-8 text-white">
          <h1>Banti . 19 Questions</h1>
        </div>

        <div className="w-full flex justify-center items-center gap-6 sm:justify-start mt-8 text-white">
          <div className="flex justify-center gap-2 bg-white py-2 px-4 rounded-3xl text-black items-center">
            <Play />
            <h1 className="text-lg font-medium cursor-pointer">Practice</h1>
          </div>
          <div className="bg-stone-700 p-3 rounded-full cursor-pointer">
            <Fork />
          </div>
        </div>
      </div>

      <div className="bg-stone-700  h-[1px] m-4"></div>

      <div className="hidden md:grid md:grid-cols-8 lg:grid-cols-12 p-2 rounded-lg">
        <div className="col-span-6 lg:col-span-8 bg-stone-700 m-2 flex items-center justify-center  h-40 rounded-lg">
          <div className="bg-stone-700 m-2 h-40 flex items-center justify-center flex-col rounded-lg relative">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background:
                  "conic-gradient(rgb(68,64,60) 0% 2%, yellow 2% 10%, rgb(68,64,60) 10% 12%, red 12% 35%, rgb(68,64,60) 35% 65%, green 65% 100%)",
              }}
            >
              <div className="w-[120px] h-[120px] bg-stone-700 rounded-full flex items-center flex-col justify-center">
                <div className="flex justify-center">
                  <h2 className="text-white text-4xl font-semibold -my-4">
                    82
                  </h2>
                  <h1 className="text-stone-300 font-medium">.23%</h1>
                </div>
                <h1 className="text-white">Acceptance</h1>
              </div>
            </div>
            <div className="absolute bottom-[35px]">
              <h1 className="text-[10px] text-white">96 Submissions</h1>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-4 grid grid-rows-3 m-2 gap-2">
          <div className="row-span-1 bg-stone-700 h-12 flex items-center justify-center flex-col rounded-lg">
            <h1 className="text-green-500 text-sm">Easy</h1>
            <h1 className="text-white  text-xs">116/11</h1>
          </div>
          <div className="row-span-1 bg-stone-700 h-12 flex items-center justify-center flex-col rounded-lg">
            <h1 className="text-yellow-500 text-sm">Medium</h1>
            <h1 className="text-white  text-xs">198/11</h1>
          </div>
          <div className="row-span-1  bg-stone-700 h-12 flex items-center justify-center flex-col rounded-lg">
            <h1 className="text-red-500 text-sm">Hard</h1>
            <h1 className="text-white  text-xs">18/11</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
