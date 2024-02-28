import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import InputBar from "../components/InputBar";
import Notes from "../components/Notes";

export default function Dashboard() {
  return (
    <div className="bg-gray-200 w-screen h-screen overflow-hidden flex">
      <LeftSideBar />
      <div className="w-2/3 flex flex-col">
        <Notes />
        <InputBar />
      </div>
    </div>
  );
}
