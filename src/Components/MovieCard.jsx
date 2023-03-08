import React from 'react'

export default function MovieCard({searchItem, searchDescription}) {
  return (
    <div>
        <input id='search' type="search" placeholder='Recherche'/>
        <button onClick={searchItem}>Recherche</button>
        <input id='recherche' type="search" placeholder='Recherche'/>
        <button onClick={searchDescription}>Recherche</button>
    </div>
  )
}
