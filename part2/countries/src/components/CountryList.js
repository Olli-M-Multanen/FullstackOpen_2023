import React from 'react'

const CountryList = ({ country, handleClick }) => {
    return (
      <>
      <p>{country.name.common} <button value={country.name.common} onClick={handleClick}>show</button> </p>
      </>
      )
  }
  
export default CountryList