import React from 'react'
import Person from './Person'

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

export default ContactBook