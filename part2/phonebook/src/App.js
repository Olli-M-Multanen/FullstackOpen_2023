import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
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
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} 
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
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person}/>
          )}
      </div>
    </>
  )
}

export default App