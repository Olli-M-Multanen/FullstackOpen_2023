import { useState, useEffect } from "react"
import axios from "axios"
import Filter from './components/Filter'
import CountryPanel from "./components/CountryPanel"

const App = () => {
  
  const API_KEY = process.env.REACT_APP_API_KEY

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [isLoading, setLoading] = useState(true);

  const hook = () => {
    console.log('country effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('country promise fulfilled')
      setCountries(response.data)
      console.log('render', response.data.length,'countries')
      setLoading(false)
    })
  }
  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    }

  const onClick = (event) => {
    event.preventDefault()
    }

    const handleClick = (event) => {
      event.preventDefault()
      setFilter(event.target.value)
      }
  if (isLoading) {
    return (
      <>
      <p>Loading data...</p>
      </>
    )
  }
  return (
    <>
      <Filter filter={filter} onClick={onClick} handleFilterChange={handleFilterChange} />
      <CountryPanel filter={filter} countries={countries} handleClick={handleClick} api_key={API_KEY}/>
    </>
  ) 
}

export default App