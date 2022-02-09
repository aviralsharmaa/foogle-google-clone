import React, { useState } from "react";
import { useResultContext } from "../context/ResultsContextProvider";
import Searchpage from "./Searchpage";

function Home({ DarkMode, setDarkMode, InputValue, setInputValue }) {
  const { setSearchItem } = useResultContext();
  const [InitialSearch, setInitialSearch] = useState(false);

  if (!InitialSearch) {
    return (
      <div
        className={`${
          DarkMode ? "bg-neutral-800" : "bg-gray-200"
        } h-screen flex flex-col items-center gap-4`}
      >
        <div
          className={`${
            DarkMode ? "hidden" : "absolute"
          } text-3xl rounded-lg top-2 right-5 mb-1 cursor-pointer`}
          onClick={() => {
            setDarkMode(true);
          }}
        >
          🌃
        </div>
        <div
          className={`${
            DarkMode ? "absolute" : "hidden"
          } text-2xl rounded-lg top-2 right-5 mb-1 cursor-pointer`}
          onClick={() => {
            setDarkMode(false);
          }}
        >
          ☀️
        </div>
        <div
          className={`mr-12 font-serif mt-64 md:mt-36 text-4xl sm:text-7xl ${
            DarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          🔍 <span className="font-bold text-4xl sm:text-6xl">Foogle</span>
        </div>
        <div className=" mt-6 sm:mt-10 relative ">
          <input
            type="text"
            className={` transition-all ${
              DarkMode ? "text-white" : "text-gray-900"
            } ${DarkMode ? "bg-google-gray" : "bg-white"} ${
              DarkMode ? "shadow-lg" : "shadow-lg"
            }  rounded-lg w-[70vw] sm:w-[60vw] lg:w-[650px] py-2 sm:py-3 md:pl-9 md:pr-9 pl-6 pr-14 sm:pr-12 outline-none`}
            placeholder="Search with Google or enter address"
            value={InputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
                console.log("Pressed")
                if(e.keyCode === 13){
                    console.log("Enter Pressed")
                    if (InputValue.length === 0) {
                        alert("Search field cannot be empty");
                        return;
                      }
                      setSearchItem(InputValue);
                      setInitialSearch(true)
                }
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-400 absolute right-5 top-2 sm:top-3 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              if (InputValue.length === 0) {
                alert("Search field cannot be empty");
                return;
              }
              setSearchItem(InputValue);
              setInitialSearch(true)
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
            className={`h-6 w-6 text-gray-500 absolute right-14 top-2 sm:top-3 cursor-pointer ${
              InputValue === "" ? "hidden" : "absolute"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={(e) => setInputValue("")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    );
  }
  if (InitialSearch) {
      return ( <Searchpage DarkMode={DarkMode} setDarkMode={setDarkMode} InputValue={InputValue} setInputValue={setInputValue} /> )
  }
}

export default Home;
