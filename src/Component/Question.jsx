import React from "react";
import Fillter from "../icons/Fillter";
import Cut from "../icons/Cut";
import Q from "./Q";

const Question = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex justify-center items-center gap-2 bg-white rounded-full  w-24 m-1">
          <Fillter />
          <h1 className="text-sm font-medium">Filter</h1>
        </div>
        <div className="flex justify-center items-center gap-2 bg-stone-800 rounded-full m-1 w-24 p-2">
          <h1 className="text-sm text-white">Easy</h1>
          <div className="bg-stone-600 p-1 rounded-full">
            <Cut />
          </div>
        </div>
      </div>
      <Q color="bg-stone-800" />
      <Q color="bg-stone-900" />
      <Q color="bg-stone-800" />
      <Q color="bg-stone-900" />
      <Q color="bg-stone-800" />
      <Q color="bg-stone-900" />
      <Q color="bg-stone-800" />
      <Q color="bg-stone-900" />
      <Q color="bg-stone-800" />
      <Q color="bg-stone-900" />
    </>
  );
};

export default Question;
