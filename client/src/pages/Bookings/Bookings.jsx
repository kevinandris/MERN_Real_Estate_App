import React, { useState } from 'react'
import '../Properties/Properties.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import { PuffLoader } from 'react-spinners'
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties'

const Bookings = () => {
  const {data, isError, isLoading} = useProperties()
  const [filter, setFilter] = useState("")

  /* //! ERROR STATE */
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    )
  } 

  /* //! LOADING STATE */
  if (isLoading) {
    return (
      <div style={{height:"60vh"}} className="wrapper flexCenter">
        <PuffLoader 
            height="80" 
            width="80" 
            radius={1} 
            color='#4066ff' 
            aria-label="puff-loading"/>
      </div>
    )
  }

  return (
    <div className='wrapper'>
        <div className="flexColBetween paddings innerWidth properties-container">
          <SearchBar filter={filter} setFilter={setFilter}/>

          <div className="paddings properties">
              {
                data
                  .filter((property) => 
                    property.title.toLowerCase().includes(filter.toLowerCase()) ||
                    property.city.toLowerCase().includes(filter.toLowerCase()) ||
                    property.country.toLowerCase().includes(filter.toLowerCase()) 
                  )
                  .map((card, i) => (
                  <PropertyCard 
                      card={card} 
                      key={i}/>
                ))
              }
          </div>
          
        </div>
    </div>
  )
}

export default Bookings