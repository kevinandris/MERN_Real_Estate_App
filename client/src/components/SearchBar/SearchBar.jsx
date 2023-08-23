// ! exported to HERO.jsx
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = ({filter, setFilter}) => {
  
  return (
    <div className="flexCenter search-bar">
        <HiLocationMarker color='var(--blue)' size={25} />
        <input type="text" />
        <button className="button">Search</button>
    </div>
  )
}

export default SearchBar