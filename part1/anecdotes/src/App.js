import { useState } from "react"

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const NoVotes = () => {
  return (
    <>
    <p>No popular anecdotes so far...</p>
  </>
  )
}

const MostPopular = ({anecdotes, mostPopular, mostVotes}) => {
  return (
    <>
    <h2>Anecdote with most votes</h2>
    <p>{anecdotes[mostPopular]}</p>
    <p>has {mostVotes} votes</p>
  </>
  )
}

const PopularAnecdote = ( {mostVotes, anecdotes, mostPopular}) => {
  if (mostVotes > 0) {
    return (
    <>
      <MostPopular anecdotes={anecdotes} mostPopular={mostPopular} mostVotes={mostVotes}/>
    </>
    )
  }
  return (
  <>
    <NoVotes/>
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const arr = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(arr)
  
  let mostVotes = Math.max(...score)

  let mostPopular = score.indexOf(mostVotes)
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    let copy = [...score]
    copy[selected] += 1
    setScore(copy)
  }

  return (
    <>
    <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {score[selected]} votes</p>
      <Button handleClick={handleVotes} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <PopularAnecdote mostVotes={mostVotes} anecdotes={anecdotes} mostPopular={mostPopular}/>
    </>
  )
}

export default App
