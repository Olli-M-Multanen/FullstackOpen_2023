import React from 'react'

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

export default Filter