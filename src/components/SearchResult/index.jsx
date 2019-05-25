import React from 'react'
import styles from './styles.module.css'

const SearchResult = (data) => {
  
 


  const { title, snippet, link } = data
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.snippet}>{snippet}</div>
      <div className={styles.link}>{link}</div>
    </section>
  ) 
}

export default SearchResult

