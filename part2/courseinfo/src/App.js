// import Header from './components/Header'
// import Part from './components/Part'


const Header = ({ course }) => {
  return (
    <>
    <h2>{course.name}</h2>
    </>
  )
}

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

const Courses = ({ courses }) => {
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

const App = ({}) => {
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
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
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return <Courses courses={courses} />
}

export default App;
