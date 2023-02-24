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

const StatisticLine = ({text, value, sign}) => {
  return (
    <div>
      <p>{text} {value} {sign}</p>
    </div>
  )
}

const Statistics = ({ good, neutral, bad, total, positive}) => {
  if (total < 1) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={positive / total} />
      <StatisticLine text="average" value={good / total * 100} sign="%"/>
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
