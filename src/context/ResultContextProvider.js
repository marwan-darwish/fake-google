import { createContext,useContext,useState } from "react";
const ResultContext=createContext()
const baseUrl="https://google-search3.p.rapidapi.com/api/v1"
export const ResultContextProvider=({children})=>{
    const [results,setResults]=useState([])
    const[loading,setLoading]=useState(false)
    const [searchTerm,setSearchTerm]=useState("google")
    const getResults= async(type)=>{
setLoading(true)
const response=await fetch(`${baseUrl}${type}`,{
    headers: {'x-user-agent': 'desktop',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key':process.env.REACT_APP_API_KEY
}
})
const data=await response.json()
if(type.includes("/news")){
setResults(data.entries)
}else if(type.includes("/images")){
    setResults(data.image_results)
}else{
    setResults( data.results)
}
setLoading(false)
    }
    return (
        <ResultContext.Provider value={{
            getResults,
            results,
            loading,
            searchTerm,
            setSearchTerm
        }}>
{children}
        </ResultContext.Provider>
    )
}
export const useResultContext=()=>useContext(ResultContext)