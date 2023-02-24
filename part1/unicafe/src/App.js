import { useState } from "react";

const Header = () => {
  return (
    <>
      <h1>Give feedback</h1>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value, sign}) => {
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{value} {sign}</td>
    </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad, total, positive}) => {
  if (total < 1) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  } else return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={positive / total} />
          <StatisticLine text="average" value={good / total * 100} sign="%"/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total +1)
    setPositive(positive + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total +1)
  }
  const handleBad = () => {
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
