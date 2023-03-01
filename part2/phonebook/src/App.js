import { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import ContactBook from './components/ContactBook'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    contactExists(newName, newNumber)
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }
  // Before adding to array, check if name exists
  function contactExists (name, number) {
    // every word in a string to UpperCase
    name = name.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    // filter array, if string found, alert
    if (persons.filter(e => e.name === name).length >0 ) {
      alert(`${name} is already added to phonebook`)
    } else {
      // If not found, add object to array
      const personObject = {
        name: name,
        number: number,
        id: persons.length +1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <>
    <h2>Phonebook</h2>
    <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
    <AddContact addPerson={addPerson}newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
    <ContactBook nameFilter={nameFilter} persons={persons}/>
    </>
  )
}

export default App