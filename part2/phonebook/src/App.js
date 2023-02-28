import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    const newContact = newName.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    event.preventDefault()
    contactExists(newContact)
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  function contactExists (newContact) {
    if (persons.filter(e => e.name === newContact).length >0 ) {
      alert(`${newContact} is already added to phonebook`)
    } else {
      const personObject = {
        name: newContact
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  return (
    <>
    <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} 
          onChange={handleChange}
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