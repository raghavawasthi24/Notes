import axios from "axios";
import React, { useState } from "react";

export default function InputBar({ category, fetchNotes }) {


  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/notes`, {
        content,
        category: category._id,
      
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes(category);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      className="w-full flex items-center justify-between p-2 my-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full p-2 border border-red-300 rounded"
        placeholder="Title"
        onChange={(e) =>
          setContent(e.target.value)
        }
      />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Add
      </button>
    </form>
  );
}
