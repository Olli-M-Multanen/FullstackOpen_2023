import React from 'react'

const Filter = ({ filter, handleFilterChange, onClick }) => {
    return (
      <>
      <form onSubmit={onClick}>
        <div>
          find countries:
          <input 
            value={filter} onChange={handleFilterChange}/>
        </div>
      </form>
      </>
    )
  }
  
export default Filter