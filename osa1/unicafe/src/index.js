import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = ({ value, text, endsign }) => (
    <tr>
        <td>{text}</td>
        <td>{value} {endsign}</td>
    </tr>
)

const Statistics = ({ stats }) => {
    const { good, bad, neutral } = stats
    if (good + neutral + bad === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    const all = good + neutral + bad 
    const average = (good + (-1 * bad)) / all
    const positive = good / all * 100 
    return (
        <div>
            <table>
                <tbody>
                    <Statistic text='good' value={good} />
                    <Statistic text='neutral' value={neutral} />
                    <Statistic text='bad' value={bad} />

                    <Statistic text='all' value={all} />
                    <Statistic text='average' value={average} />
                    <Statistic text='positive' value={positive} endsign='%' />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const stats = {
        good: good,
        bad: bad,
        neutral: neutral,
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />
            <h1>statistics</h1>
            <Statistics stats={stats} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)