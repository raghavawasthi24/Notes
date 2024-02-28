import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

export default function LeftSideBar({ category, setpopUp, fetchNotes }) {
  return (
    <div className="bg-white w-[300px] h-screen flex flex-col relative">
      <h1 className="text-xl text-center font-bold my-4">Pocket Notes</h1>
      <div className="flex-1 overflow-auto">
        {category.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 my-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              fetchNotes(category);
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex justify-center items-center text-white"
              style={{ backgroundColor: category.color }}
            >
              {category.keyword}
            </div>
            <div>{category.category}</div>
          </div>
        ))}
      </div>

      <button
        className="bg-[#16008B] p-2 w-fit rounded-full absolute bottom-4 right-4"
        onClick={() => setpopUp(true)}
      >
        <IoIosAdd className="w-8 h-8  text-white" />
      </button>
    </div>
  );
}
