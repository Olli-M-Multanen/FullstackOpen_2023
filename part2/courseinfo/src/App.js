const Header = ({ course }) => {
  return (
    <>
    <h1>{course.name}</h1>
    </>
  )
}

const Total = ({ parts }) => {
  // Destructure parts array to access all exercises
  const totalSum = parts.reduce((sum, {exercises}) => sum + exercises, 0)
  return (
    <>
    <p><b>total of {totalSum} exercises</b></p>
    </>
  )
}

const Part = ({ part }) => {
  return (
    <>
    <p>{part.name} {part.exercises}</p>
    </>
  )
}

const Content = ({ course }) => {
  return (
    <>
    <Part part={course.parts[0]}/>
    <Part part={course.parts[1]}/>
    <Part part={course.parts[2]}/>
    <Part part={course.parts[3]}/>
    <Total parts={course.parts}/>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
    <Header course={course} />
    <Content course={course} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App;
