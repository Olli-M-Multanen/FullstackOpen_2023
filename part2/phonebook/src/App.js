import { useState } from 'react'

const Filter = ({nameFilter, handleFilterChange}) => {
  return (
    <>
    filter shown with
      <input 
      value={nameFilter}
      onChange={handleFilterChange}></input>
    </>
  )
}

const AddContact = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <>
    <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
          value={newName} 
          onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input value={newNumber} 
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

const Person = ({ person }) => {
  return (
    <>
    <p>{person.name} {person.number}</p>
    </>
  )
}

const AllNumbers = ({persons}) => {
  return (
    <>
    <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person}/>
        )}
    </>    
  )
}

const FilteredNumbers = ({persons, nameFilter}) => {
  return (
    <>
    <h2>Numbers</h2>
      {persons.filter(person =>
        person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())).map(filteredName => (
          <Person key={filteredName.name} person={filteredName} />
    ))}
    </>
  )
}

const ContactBook = ({nameFilter, persons}) => {
  if (nameFilter) {
    return (
      <>
      <FilteredNumbers persons={persons} nameFilter={nameFilter}/>
      </>
    )
  } return (
    <>
    <AllNumbers persons={persons}/>
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]
  ) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

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

  function contactExists (name, number) {
    name = name.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    if (persons.filter(e => e.name === name).length >0 ) {
      alert(`${name} is already added to phonebook`)
    } else {
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