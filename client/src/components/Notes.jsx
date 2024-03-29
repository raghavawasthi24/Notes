import React from "react";
import { formatDateTime } from "../actions";

export default function Notes({ notes, category }) {
  return (
    <div className="flex-1 overflow-auto">
      <p
        className="font-bold text-xl p-2 sticky top-0 z-10"
        style={{ backgroundColor: category.color }}
      >
        {category.category}
      </p>
      {notes.map((note, index) => {
        const formattedDate = formatDateTime(note.createdAt);
        return (
          <div
            key={index}
            className="p-2 my-2 border border-gray-300 rounded flex flex-col bg-white shadow-md m-4"
          >
            <h1 className="text-xl font-bold">{note.content}</h1>
            <p className="w-fit self-end">{formattedDate}</p>
          </div>
        );
      })}
    </div>
  );
}
