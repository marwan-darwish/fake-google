import React,{useEffect,useState} from 'react'
import { useDebounce } from 'use-debounce/lib'
import { useResultContext } from '../context/ResultContextProvider'
import { Links } from './Links'
export const Search = () => {
    const[text,setText]=useState("")
    const{setSearchTerm}=useResultContext()
    const[debouncedValue]=useDebounce(text,600)
    useEffect(() => {
     if(debouncedValue){
         setSearchTerm(debouncedValue)
     }//eslint-disable-next-line
    }, [debouncedValue])
    return (
        <div className="relative sm:ml-28 md:ml-38 sm:-mt-10 mt-3">
            <input value={text} type="text" className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg "
            placeholder="search..."
            onChange={(e)=>setText(e.target.value)}/>
            {text&&(<button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={()=>setText("")}>
X
            </button>)}
            <Links/>
        </div>
    )
}
