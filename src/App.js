import SearchBar from './components/SearchBar'
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  const makeRequest = async (searchParameter) => {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${encodeURIComponent(searchParameter)}`)
    const json = await response.json()
    setData(json)
  }

  return (
    <>
    <SearchBar onSearch={makeRequest}/>
    {JSON.stringify(data)}
    </>
  );
}

export default App;
