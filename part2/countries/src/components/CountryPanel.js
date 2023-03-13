import React from 'react'
import CountryList from './CountryList'
import Country from './Country'

const CountryPanel = ({countries, filter, handleClick, api_key}) => {

    let countryFilter = countries.filter(country =>
      country.name.common.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  
      if (countryFilter.length > 10) {
        return (
          <>
          <p>Too many matches, specify another filter</p>
          </>
        )
      } else if (countryFilter.length <=10 && countryFilter.length > 1) {
        return (
          <>
          {countries.filter(country =>
            country.name.common.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map(foundCountry => (
              <CountryList key={foundCountry.name.common} country={foundCountry} handleClick={handleClick}/>
            ))}
          </>
        )
      } else if (countryFilter.length === 0) {
        return (
          <>
          <p>no matches, please try another country</p>
          </>
        )
      }
      return (
        <>
        {countries.filter(country =>
          country.name.common.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map(foundCountry => (
            <Country key={foundCountry.name.common} country={foundCountry} api_key={api_key}/>
          ))}
        </>
      )
  }
  
export default CountryPanel