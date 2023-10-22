// import React from 'react';

import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import bookImg from "../assets/min_thein_kha.jpeg";
export default function BookDetail() {
  let { id } = useParams();

  ///fetch data from booklist
  let {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>loading....</p>}
      {book && (
        <div className="grid grid-cols-2 gap-2">
          <div> 
            <img src={bookImg} alt="" className="w-[80%]" />
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-3xl">{book.title}</h1>
            <div className="space-x-3 p">
              {book.categories.map(category =>(
                <span key={category} className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm ">category</span>
              ))}
            </div>
            <p>
              {book.descriptions}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
