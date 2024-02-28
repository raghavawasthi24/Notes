import React from "react";

export default function LeftSideBar() {
  const topics = [
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
    "edeeffe",
  ];
  return (
    <div className="bg-white w-1/3 h-screen flex flex-col">
      <h1 className="h-12">Pocket Notes</h1>
      <div className="flex-1 overflow-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 my-2"
          >
            <div>{}</div>
            <div>{topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
