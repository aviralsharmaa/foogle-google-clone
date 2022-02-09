import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import {useResultContext} from '../context/ResultsContextProvider';

function Header({DarkMode,setDarkMode,InputValue,setInputValue}) {
    const {setSearchItem} = useResultContext()
  return (
    <>
    <div className={`transition-all flex justify-between md:justify-start items-center py-7 ${DarkMode ? 'bg-neutral-800':'bg-gray-200'}`}>
      <div className={` text-2xl sm:text-3xl ml-10 sm:ml-16 lg:ml-24 sm:mr-8 lg:mr-14 mb-2 ${DarkMode ? 'text-white':'text-gray-900'}`}>
        <Link to="/">
          {" "}
          <span className="font-semibold">Foogle</span> 🔍
        </Link>
      </div>
      <div className="input-bar relative">
        <input
          type="text"
          className={`mr-6 md:mr-0 transition-all ${DarkMode ? 'text-white':'text-gray-900'} ${DarkMode ? 'bg-google-gray':'bg-white'} ${DarkMode ? 'shadow-md':'shadow-md'}  rounded-3xl w-[47vw] sm:w-[50vw] lg:w-[500px] py-2 md:py-3 md:pl-9 md:pr-9 pl-6 pr-12 outline-none`}
          placeholder="Search with Google or enter address"
          value={InputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          onKeyDown={(e) => {
            console.log("Pressed")
            if(e.keyCode === 13){
                console.log("Enter Pressed")
                if (InputValue.length === 0) {
                    alert("Search field cannot be empty");
                    return;
                  }
                  setSearchItem(InputValue);
            }
        }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-400 absolute right-10 md:right-5 top-2 md:top-3 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={()=> {
            setSearchItem(InputValue)
            setInputValue('')
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-gray-500 absolute  right-20 md:right-14 top-2 md:top-3 cursor-pointer ${InputValue === '' ?'hidden':'absolute'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={(e)=>setInputValue('')}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className={`${DarkMode ? 'hidden':'absolute'} text-3xl rounded-lg absolute top-[93px] md:top-8 right-5 mb-1 cursor-pointer`} onClick={()=>{setDarkMode(true)}}>
          🌃
      </div>
      <div className={`${DarkMode ? 'absolute':'hidden'} text-2xl rounded-lg absolute top-[93px] md:top-8 right-5 mb-1 cursor-pointer`} onClick={()=>{setDarkMode(false)}}>
          ☀️
      </div>
    </div>
    <Search  DarkMode={DarkMode}/>
    </>
  );
}

export default Header;
