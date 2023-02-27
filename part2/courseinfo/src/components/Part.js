import React from 'react'

const Part = ({ course }) => {
    const totalSum = course.parts.reduce((sum, {exercises}) => sum + exercises, 0)
    return (
      <>
      {course.parts.map((part, index) => {
        return (
        <div key={index}>
          <p> {part.name} {part.exercises}</p>
        </div>
        )
      })}
      <p><b>total of {totalSum} exercises</b></p>
      </>
    )
  }



  export default Part