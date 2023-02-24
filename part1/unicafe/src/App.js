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

const Statistics = ({ good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("Good")
    setGood(good + 1)
  }
  const handleNeutral = () => {
    console.log("Neutral")
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    console.log("Bad")
    setBad(bad + 1)
  }

  return (
    <>
    <Header />
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleNeutral} text="neutral" />
    <Button handleClick={handleBad} text="bad" />
    <Statistics good={good} neutral={neutral} bad={bad} /> 
    </>
  )
}

export default App;
