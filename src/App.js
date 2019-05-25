import SearchBar from './components/SearchBar'
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  const transformData = ({ title, snippet }) => ({ title, snippet: snippet.replace(/<[^>]+>/g,''), url: encodeURI(`https://ru.wikipedia.org/wiki/${title}`) })

  const makeRequest = async (searchParameter) => {
    const response = await fetch(`https://ru.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&origin=*&srlimit=20&sroffset=0&srsearch=${encodeURIComponent(searchParameter)}`)
    const json = await response.json()
    setData(json.query.search.map(transformData))
  }
  
  

  
  return (
    <>
    <SearchBar onSearch={makeRequest}/>
    {JSON.stringify(data)}
    </>
  );
}

export default App;
