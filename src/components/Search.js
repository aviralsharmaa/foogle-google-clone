import React from "react";
import { Route, Routes,Link,Navigate,useLocation } from "react-router-dom";
import Results from "./Results"

const links = [
    {url:'/search',text:'🔍All'},
    {url:'/images',text:'🪞Images'},
    {url:'/news',text:'📰News'}
]

function Search({DarkMode}) {
    const location = useLocation()
  return (
    <div className={`transition-all ${DarkMode ? 'bg-neutral-800':'bg-gray-200'}`}>
        <div className={`border-b ${DarkMode ? 'border-gray-500':'border-gray-700'}`}>
            <div className={`flex ml-10 w-[250px] justify-between items-center`}>
                {links.map(({url,text},index)=>(
                    <Link key={index} to={url} className={`${ url===location.pathname ?`border-b-2 border-blue-600 pb-2 ${DarkMode ? 'text-blue-300':'text-blue-700'}`:`pb-2 ${DarkMode ? 'text-blue-300':'text-blue-700'}`} }`}>{text}</Link>
                ))}
            </div>
        </div>
      <Routes>
            <Route exact path="/" element={<Navigate replace to="/search" />} />
            <Route exact path='/search' element={<Results DarkMode={DarkMode} />} />
            <Route exact path='/images' element={<Results DarkMode={DarkMode} />} />
            <Route exact path='/news' element={<Results DarkMode={DarkMode} />} />
      </Routes>
    </div>
  );
}

export default Search;
