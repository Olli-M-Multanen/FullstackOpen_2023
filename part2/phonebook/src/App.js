import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import ContactBook from './components/ContactBook'
import Notification from './components/Notification'

import peopleService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

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
  const handleDelete = (event) => {
    const id = event.target.value
    const contactName = event.target.getAttribute("data-contact-name")

    if (window.confirm(`Delete contact ${contactName}?`)) {
      peopleService
      .deleteContact(id)
      .then(response => {
        setPersons(persons.filter(contact => contact.id !== id))
      })
    }
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

      const contact = persons.find(c => c.name === name)
      // if name already exists, ask to update phone number
      if (window.confirm(`${contact.name} is already added to phonebook, replace the old number with a new one ?`)) {
        const changedContact = { ...contact, number: number}
        peopleService
          .update(contact.id, changedContact)
          .then(returnedContact => {
            setPersons(persons.map(person => person.id !== contact.id ? person : returnedContact))
          })
          // handle error, incase contact has already been deleted from server
          .catch(error => {
            setErrorMessage(true)
            setNotificationMessage(`${contact.name} was already removed from server`)
            setTimeout(() => {
              setErrorMessage(false)
              setNotificationMessage(null)
            }, 4000)
            // update user page, requested contact from users page
            setPersons(persons.filter(removed => removed.name !== contact.name))
          }) 
      }
    } else {
      // If not found, add object to array
      const personObject = {
        name: name,
        number: number,
      }
      peopleService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    setNotificationMessage(`${name} added succesfully!`)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 4000)
  } 

  return (
    <>
    <h2>Phonebook</h2>
    <Notification message={notificationMessage} errorMessage={errorMessage}/> 
    <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
    <AddContact addPerson={addPerson}newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
    <ContactBook nameFilter={nameFilter} persons={persons} handleDelete={handleDelete}/>
    </>
  )
}

export default App