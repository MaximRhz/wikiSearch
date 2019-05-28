import React from 'react'
import styles from './styles.module.css'
import SearchResult from '../SearchResult'

const SearchResultsList = (props) => {

  const { data } = props
  
  return (
      <section className={styles.activitiesWrapper}>
        {data.map(({title, snippet, url}) => <SearchResult title={title} url={url} snippet={snippet}/>)}
      </section>
  ) 
}

export default SearchResultsList

