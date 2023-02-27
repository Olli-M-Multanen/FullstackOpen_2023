import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = ({ courses }) => {
    return (
      <>
      <h1>Web development curriculum</h1>
        {courses.map(course =>
          <div key={course.id}>
            <Header key={course.name} course={course} />
            <Part key={course.id} course={course} />
          </div>
        )}
      </>
    )
  }

export default Course