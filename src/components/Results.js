import React,{useLayoutEffect} from 'react';
import {useResultContext} from '../context/ResultsContextProvider';
import Loadingicon from './LoadingIcon';
import { useLocation } from 'react-router-dom';

function Results({DarkMode}) {
  const {Results,Loading,SearchItem,getResults} = useResultContext()
  const location = useLocation()

  useLayoutEffect(()=>{
    if(location.pathname === '/news'){
      getResults(`${location.pathname}/q=${SearchItem}`)
      return
    }
    getResults(`${location.pathname}/q=${SearchItem}&num=40`)
  },[SearchItem,location.pathname])

  if(Loading) return <Loadingicon />

  if(location.pathname === '/search') return (
    <div className={` transition-all flex flex-wrap space-y-6 justify-between px-10 sm:px-20 md:px-28 lg:px-44 py-8`}>
      {Results?.results?.map(({link,title},index)=>(
          <div key={index} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p className={`text-sm ${DarkMode ? 'text-gray-400':'text-black'}`}>{ link.length>30 ? link.substring(0,30) : link}</p>
              <p className={`text-lg hover:underline ${DarkMode ? 'text-blue-300':'text-blue-700'}`}>{title}</p>
            </a>
          </div>
      ))}
    </div>
  )
  if(location.pathname === '/images') return (
    <div className={`flex flex-wrap justify-center items-center py-4 border-t ${DarkMode ? 'border-gray-500':'border-gray-700'}`}>
      {Results?.image_results?.map(({image,link : {href,title}},index)=>(
          <a href={href} className="md:p-4 p-3" key={index} rel="noreferrer" target="_blank">
            <img src={image?.src} alt={title} loading="lazy" />
            <p className={`w-36 break-words text-sm mt-2 ${DarkMode ? 'text-gray-300':'text-black'}`}>{title}</p>
          </a>
      ))}
    </div>
  )
  if(location.pathname === '/news') return (
    <div className={` transition-all flex flex-wrap space-y-6 justify-between px-10 sm:px-20 md:px-28 lg:px-44 py-8 border-t ${DarkMode ? 'border-gray-500':'border-gray-700'}`}>
      {Array.from(Results)?.map(({links,id,source,title})=>(
          <div key={id} className="md:w-2/5 w-full">
            <a href={links?.[0].href} target="_blank" rel="noreferrer" className='hover:underline'>
              <p className={`text-lg ${DarkMode ? 'text-blue-300':'text-blue-700'}`}>{title}</p>
            </a>
              <div className='flex gap-4'>
                <a href={source?.href} target="_blank" rel='noreferrer' className={`${DarkMode ? 'text-gray-300':'text-gray-700'}`}>
                  {source?.href}
                </a>
              </div>
          </div>
      ))}
    </div>
  )

  return (
      <div className={`${DarkMode ? 'bg-neutral-800':'bg-gray-200'} p-4`}>
          Rsults
      </div>
  );
}

export default Results;
