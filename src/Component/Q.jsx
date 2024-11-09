import React from "react";
import Correct from "../icons/Correct";

const Q = ({ color }) => {
  return (
    <>
      <div
        className={`flex justify-between items-center m-2 text-white rounded-2xl ${color} p-3`}
      >
        <div className="flex items-center justify-start gap-2">
          <div className="text-green-500">
            <Correct />
          </div>
          <p>14. Sort the array</p>
        </div>
        <div className="text-green-800">
          <p>Easy</p>
        </div>
      </div>
    </>
  );
};

export default Q;
