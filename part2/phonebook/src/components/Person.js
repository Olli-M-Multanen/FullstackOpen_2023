import React from 'react'

const Person = ({ person, handleDelete}) => {
    return (
      <tr>
      <td>
      {person.name}
      </td>
      <td>
      {person.number} 
      </td>
      <td>
      <button value={person.id} onClick={handleDelete} data-contact-name={person.name}>delete</button>
        </td>
      </tr>
    )
  }

export default Person