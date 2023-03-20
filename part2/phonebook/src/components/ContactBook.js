import React from 'react'
import Person from './Person'

const AllNumbers = ({persons, handleDelete}) => {
    return (
      <>
      <h2>Numbers</h2>
      <table>
      <thead>
      {persons.map(person =>
          <Person key={person.name} person={person} handleDelete={handleDelete} />
          )}
        </thead>
      </table>
      </>    
    )
  }
  
const FilteredNumbers = ({persons, nameFilter}) => {
    return (
      <>
      <h2>Numbers</h2>
      <table>
        <thead>
        {persons.filter(person =>
          person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())).map(filteredName => (
            <Person key={filteredName.name} person={filteredName} />
      ))}
        </thead>
      </table>
      </>
    )
  }
  
const ContactBook = ({nameFilter, persons, handleDelete}) => {
    if (nameFilter) {
      return (
        <>
        <FilteredNumbers persons={persons} nameFilter={nameFilter}/>
        </>
      )
    } return (
      <>
      <AllNumbers persons={persons} handleDelete={handleDelete}/>
      </>
    )
  }

export default ContactBook