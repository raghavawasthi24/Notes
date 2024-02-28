import React from "react";

export default function Blank() {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <img src="/assets/blankBG.png" alt="" className="max-w-[50%] h-[50%]" />
      <p className="font-semibold text-xl">Pocket Notes</p>
      <p className="w-1/2 text-center">
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>

      <p></p>
    </div>
  );
}
