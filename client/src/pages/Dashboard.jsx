import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import InputBar from "../components/InputBar";
import Notes from "../components/Notes";
import axios from "axios";
import { colors } from "../constant";
import { makeKeyboard } from "../actions";
import Blank from "../components/Blank";

export default function Dashboard() {
  const [category, setCategory] = useState([]);
  const [popUp, setpopUp] = useState(false);
  const [notes, setNotes] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});

  const initialValue = {
    category: "",
    color: "",
    keyword: "",
  };

  const [formValues, setFormValues] = useState(initialValue);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/category`)
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCategory = () => {
    console.log(formValues);
    setFormValues((prevFormValues) => {
      const updatedFormValues = {
        ...prevFormValues,
        keyword: makeKeyboard(prevFormValues.category),
      };
      axios
        .post(`http://localhost:5000/api/category`, updatedFormValues)
        .then((res) => {
          console.log(res.data);
          setCategory((prev) => [...prev, res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
      setpopUp(false);
      return updatedFormValues;
    });
  };

  const fetchNotes = (category) => {
    console.log(category);
    setActiveCategory(category);
    axios
      .get(`http://localhost:5000/api/notes/${category._id}`)
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-200 w-screen h-screen overflow-hidden flex relative">
      <LeftSideBar
        category={category}
        setpopUp={setpopUp}
        fetchNotes={fetchNotes}
      />

      {activeCategory.category ? (
        <div className="flex flex-col flex-1 relative">
          <Notes notes={notes} category={activeCategory} />
          <InputBar category={activeCategory} fetchNotes={fetchNotes} />
        </div>
      ) : (
        <Blank />
      )}

      {popUp && (
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
          <form className="flex flex-col p-4 gap-4" onSubmit={addCategory}>
            <div className="flex justify-center items-center gap-4">
              <p className="font-bold">Group Name</p>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="border-2 p-2 rounded-md"
                value={formValues.category}
                onChange={(e) =>
                  setFormValues({ ...formValues, category: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold">Choose a color</p> :
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => setFormValues({ ...formValues, color: color })}
                ></div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#16008B] p-2 w-fit rounded-full text-white self-end"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
