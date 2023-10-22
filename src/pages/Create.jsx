// import React from 'react'

import { useEffect, useState } from "react";

import useFetch from "../hooks/UseFetch";
import { useNavigate } from "react-router-dom";

export default function Create() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [newCategory, setNewCategory] = useState("");
  let [categories, setCategories] = useState([]);

  let { setPostData, data: book ,loading,} = useFetch(
    "http://localhost:3000/books",
    "POST"
  );

  let addCategory = () => {
    if(newCategory && categories.includes(newCategory)){
      setNewCategory("");
      return;
    }
    setCategories((prev) => [...prev, newCategory]);
    setNewCategory("");
  };


  let navigate =  useNavigate();


  let addBook = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      categories,
    };
    setPostData(data);
  };

  useEffect(() => {
    console.log(book);

    if(book ){
      navigate('/');
    }
  }, [book,navigate]);

  return (
    <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Book Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Book Title"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Book Descriptions
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Books Description"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Categories
          </label>
          <div className="flex items-center space-x-2">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              // onSubmit={(e)=>addCategory()}
              className="mb-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Books Category"
            />
            <button
              type="button"
              className="bg-primary p-2 rounded-lg mb-3"
              onClick={addCategory}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mb-5">
          {categories.map((category) => (
            <span
              className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
              key={category}
            >
              {category}
            </span>
          ))}{" "}
        </div>

        {!loading && <p>loading .....</p>}
        {
        loading &&  <button className="text-white bg-primary px-3 py-2 w-full  rounded-2xl gap-3 flex items-center justify-center" onClick={addBook}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className=" md:block">Create Book</span>
        </button>
        }
      </div>
    </form>
  );
}
