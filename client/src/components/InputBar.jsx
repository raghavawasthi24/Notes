import React from "react";

export default function InputBar() {
  return (
    <div className="w-full flex items-center justify-between p-2 my-2">
      <input
        type="text"
        className="w-full p-2 border border-red-300 rounded"
        placeholder="Title"
      />
      <button className="bg-blue-500 text-white p-2 rounded">Add</button>
    </div>
  );
}
