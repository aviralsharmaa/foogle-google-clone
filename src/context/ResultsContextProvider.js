import React,{useContext,createContext,useState} from "react";

const ResultsContext = createContext()
const BaseURI = "https://google-search3.p.rapidapi.com/api/v1"

export const ResultsContextProvider = ({children}) => {
    const [Results, setResults] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [SearchItem, setSearchItem] = useState('');

    async function getResults(type){
        setLoading(true)
        var options = {
            method: 'GET',
            headers: {
              'x-user-agent': 'desktop',
              'x-proxy-location': 'EU',
              'x-rapidapi-host': 'google-search3.p.rapidapi.com',
              'x-rapidapi-key': 'aa8b243c79msh1192756aa613eafp19218bjsnedd9ce04dd8f'
            }
        };
        const res = await fetch(`${BaseURI}${type}`,options);
        const data = await res.json()
        if(type.includes('news')){
            setResults(data.entries)
            setLoading(false)
            return
        }
        setResults(data)
        setLoading(false)
    }
    return (
        <ResultsContext.Provider value={{Results,getResults,Loading,SearchItem,setSearchItem}}>
            {children}
        </ResultsContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultsContext)

