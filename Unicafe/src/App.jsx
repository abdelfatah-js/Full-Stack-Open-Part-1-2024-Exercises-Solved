import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const Statistics = ({m, text}) => (
<tr><td>{text}</td><td>{m}</td></tr>
)
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = () => good + neutral + bad
  const neutralX = () => neutral*0
  const badX = () => -bad
  const average = () =>  (good + neutralX() + badX()) / total()
  const positive = () => (good  / total()) *100
  const statistics = () =>{ if(good === 0 && neutral === 0 && bad === 0) {
    return(
      <p>No feedback given</p>
    )
  }else {
    return(
      <table>
        <tbody>
          <Statistics text='good' m={good}/>
          <Statistics text='neutral' m={neutral}/>
          <Statistics text='bad' m={bad}/>
          <Statistics text='All' m={total()}/>
          <Statistics text='average' m={average()}/>
          <tr><td>positive</td><td>{positive()}%</td></tr>
        </tbody>
      </table>
    )
  }
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='bad'/>
      <h1>statistics</h1>
      {statistics()}
    </div>
  )
}

export default App
