import { useState } from "react";

const Header = () => {
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad, total, positive}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {positive / total}</p>
      <p>positive {good / total * 100} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    console.log("Good")
    setGood(good + 1)
    setTotal(total +1)
    setPositive(positive + 1)
  }
  const handleNeutral = () => {
    console.log("Neutral")
    setNeutral(neutral + 1)
    setTotal(total +1)
  }
  const handleBad = () => {
    console.log("Bad")
    setBad(bad + 1)
    setTotal(total +1)
    setPositive(positive - 1)
  }

  return (
    <>
    <Header />
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleNeutral} text="neutral" />
    <Button handleClick={handleBad} text="bad" />
    <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive}/> 
    </>
  )
}

export default App;
