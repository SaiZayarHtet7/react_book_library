// import React from 'react';

import min_thein_kha from "../assets/min_thein_kha.jpeg";

import useFetch from "../hooks/UseFetch";
import { Link, useLocation } from "react-router-dom";

export default function BookList() {

  
  let location = useLocation();

  let params = new URLSearchParams(location.search);

  let search = params.get("search");


    ///checking the search parmas 
  let { data: books, loading, error } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` :``}`);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {loading && <p>loading .....</p>}

      {/* book list */}

      {/* checking data is null*/}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <div className="p-1 border border-1">
                <img src={min_thein_kha} alt="" className="w-fit" />
                <div className="text-center space-y-2 mt-4">
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>

                  <div className="flex flex-wrap">
                    {book.categories.map((category) => (
                      <span
                        className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
                        key={category}
                      >
                        {category}
                      </span>
                    ))}{" "}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {!books?.length && <p className="text-center text-xl test-gray-500">No Search Results Found</p>}
    </div>
  );
}

//https://htmlcheatsheet.com/css/