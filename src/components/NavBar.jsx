// import React from 'react''
import { useState } from 'react'
import{ NavLink,Link, useNavigate }from 'react-router-dom'
import useTheme from '../hooks/use_theme';

export default function NavBar() {

  let [search , setSearch ] = useState('');
  let navigate = useNavigate();

  let handleSearch = ()=>{
    console.log(search);
    navigate('/?search='+search);
  }


  let {theme,changeTheme}= useTheme();

  console.log(theme);

  return (
    <nav onClick={changeTheme} className={`border border-b-1 ${theme === 'dark' ? 'bg-blue-100' : 'bg-yellow-100'}`}>
    <ul className="flex justify-between p-5 items-center max-w-6xl mx-auto">
      <li className="flex items-center gap-3">
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search Books ...."
          className="outline-none"
          value={search}
          onChange={e=> setSearch(e.target.value)}
        />
        <button onClick={handleSearch} to ="/create" className="text-white bg-primary px-2 py-1  rounded-2xl gap-3 flex items-center">
          <span>Search</span>
        </button>
      </li>
      <Link to="/" className="flex items-center gap-4 md:-ml-32 cursor-pointer ">
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
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>

        <span className="text-2xl font-bold text-primary hidden md:block">
          Books
        </span>
      </Link>
      <li className="flex gap-3">
        <NavLink to ="/create" className="text-white bg-primary px-3 py-2  rounded-2xl gap-3 flex items-center">
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
          <span className="hidden md:block">Create Book</span>
        </NavLink>
        <div className="w-11">
          <img
            className="w-full rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AKPQZvx98AhKP4PZyknV8kEC946Mi-CbI8O_qZzah6iPuw=s64-c-mo"
            alt=""
          />
        </div>
      </li>
    </ul>
  </nav>
  )
}
