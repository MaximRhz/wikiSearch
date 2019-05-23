import React, { useState } from 'react'
import styles from './styles.module.css'
import { ReactComponent as Magnifier } from './magnifier.svg';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      onSearch(query)
    }
  } 

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <input className={styles.searchInput} value={query} onChange={event => setQuery(event.target.value)} onKeyPress={handleKeyPress} />
        <button className={styles.magnifierButton} onClick={() => onSearch(query)}><Magnifier className={styles.magnifierIcon}/></button>
      </div>
    </div>
  ) 
}

export default SearchBar

